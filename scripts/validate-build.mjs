import { access, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const repositoryRoot = process.cwd();
const outputRoot = path.join(repositoryRoot, "dist");
const contentRoot = path.join(
  repositoryRoot,
  "src",
  "content",
  "investigations",
);
const configuredBase = (process.env.PUBLIC_BASE_PATH || "/")
  .replace(/^\/+|\/+$/g, "")
  .trim();
const failures = [];

async function filesUnder(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const target = path.join(root, entry.name);
      return entry.isDirectory() ? filesUnder(target) : [target];
    }),
  );
  return nested.flat();
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, "i"))?.[1];
}

function stripBase(pathname) {
  if (!configuredBase) return pathname;
  const prefix = `/${configuredBase}`;
  if (pathname === prefix) return "/";
  return pathname.startsWith(`${prefix}/`)
    ? pathname.slice(prefix.length)
    : pathname;
}

async function resolveInternalTarget(href, sourceFile) {
  const [rawPath] = href.split(/[?#]/, 1);
  if (!rawPath) return sourceFile;

  let target;
  if (rawPath.startsWith("/")) {
    const pathname = stripBase(
      new URL(rawPath, "https://local.invalid").pathname,
    );
    target = path.join(
      outputRoot,
      decodeURIComponent(pathname.replace(/^\//, "")),
    );
  } else {
    target = path.resolve(
      path.dirname(sourceFile),
      decodeURIComponent(rawPath),
    );
  }

  if (await exists(target)) {
    const targetStat = await stat(target);
    if (targetStat.isFile()) return target;
    if (
      targetStat.isDirectory() &&
      (await exists(path.join(target, "index.html")))
    ) {
      return path.join(target, "index.html");
    }
  }
  if (await exists(path.join(target, "index.html")))
    return path.join(target, "index.html");
  if (!path.extname(target) && (await exists(`${target}.html`)))
    return `${target}.html`;
  return undefined;
}

function contentEntry(file, source) {
  const frontmatter = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
  const slug = frontmatter.match(/^slug:\s*["']?([^"'\r\n]+)["']?\s*$/m)?.[1];
  if (!slug)
    failures.push(
      `${path.relative(repositoryRoot, file)}: missing readable slug`,
    );
  return {
    file,
    slug,
    draft: /^draft:\s*true\s*$/m.test(frontmatter),
    demonstration: /^demonstration:\s*true\s*$/m.test(frontmatter),
  };
}

if (!(await exists(outputRoot))) {
  console.error(
    "dist/ does not exist. Run npm run build before validate:build.",
  );
  process.exit(1);
}

const outputFiles = await filesUnder(outputRoot);
const htmlFiles = outputFiles.filter((file) => file.endsWith(".html"));
const canonicalOwners = new Map();

for (const file of htmlFiles) {
  const relative = path.relative(outputRoot, file).replaceAll(path.sep, "/");
  const html = await readFile(file, "utf8");
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map(
    (match) => match[1],
  );
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length)
    failures.push(
      `${relative}: duplicate id(s): ${[...new Set(duplicateIds)].join(", ")}`,
    );

  if (!/<html\b[^>]*\blang=["']en["']/i.test(html))
    failures.push(`${relative}: missing lang="en"`);
  if ((html.match(/<h1\b/gi) ?? []).length !== 1)
    failures.push(`${relative}: expected exactly one h1`);
  if (!/<title>[^<]+<\/title>/i.test(html))
    failures.push(`${relative}: missing non-empty title`);

  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const description = metaTags.find(
    (tag) => attribute(tag, "name")?.toLowerCase() === "description",
  );
  if (!description || !attribute(description, "content")?.trim())
    failures.push(`${relative}: missing meta description`);
  const robots = metaTags.find(
    (tag) => attribute(tag, "name")?.toLowerCase() === "robots",
  );
  if (
    relative === "404.html" &&
    !attribute(robots ?? "", "content")?.includes("noindex")
  )
    failures.push(`${relative}: 404 page must be noindex`);
  if (
    relative !== "404.html" &&
    attribute(robots ?? "", "content")?.includes("noindex")
  )
    failures.push(`${relative}: public page must not be noindex`);

  const linkTags = html.match(/<link\b[^>]*>/gi) ?? [];
  const canonicalTags = linkTags.filter((tag) =>
    attribute(tag, "rel")?.split(/\s+/).includes("canonical"),
  );
  if (canonicalTags.length !== 1) {
    failures.push(`${relative}: expected exactly one canonical link`);
  } else {
    const canonical = attribute(canonicalTags[0], "href");
    if (!canonical || !/^https:\/\//.test(canonical))
      failures.push(`${relative}: canonical must be an absolute HTTPS URL`);
    if (canonical) {
      if (canonicalOwners.has(canonical))
        failures.push(
          `${relative}: duplicate canonical also used by ${canonicalOwners.get(canonical)}`,
        );
      canonicalOwners.set(canonical, relative);
    }
  }

  for (const image of html.match(/<img\b[^>]*>/gi) ?? []) {
    if (attribute(image, "alt") === undefined)
      failures.push(`${relative}: image missing alt attribute`);
  }

  for (const labelled of html.match(/\baria-labelledby=["']([^"']+)["']/gi) ??
    []) {
    for (const id of labelled.match(/["']([^"']+)["']/)?.[1].split(/\s+/) ??
      []) {
      if (!ids.includes(id))
        failures.push(
          `${relative}: aria-labelledby references missing id "${id}"`,
        );
    }
  }

  for (const anchor of html.match(/<a\b[^>]*>/gi) ?? []) {
    const href = attribute(anchor, "href");
    if (!href?.trim()) {
      failures.push(`${relative}: anchor missing a non-empty href`);
      continue;
    }
    if (/^(?:https?:|mailto:|tel:|data:)/i.test(href)) continue;
    const target = await resolveInternalTarget(href, file);
    if (!target) {
      failures.push(`${relative}: broken internal link ${href}`);
      continue;
    }
    const fragment = href.includes("#")
      ? decodeURIComponent(href.split("#")[1].split("?")[0])
      : undefined;
    if (fragment && target.endsWith(".html")) {
      const targetHtml =
        target === file ? html : await readFile(target, "utf8");
      const targetIds = [...targetHtml.matchAll(/\bid=["']([^"']+)["']/gi)].map(
        (match) => match[1],
      );
      if (!targetIds.includes(fragment))
        failures.push(
          `${relative}: link ${href} references a missing fragment`,
        );
    }
  }
}

const requiredOutputs = [
  "index.html",
  "404.html",
  "about/index.html",
  "briefs/index.html",
  "corrections/index.html",
  "dossiers/index.html",
  "investigations/index.html",
  "jurisdictions/index.html",
  "ledger/index.html",
  "methodology/index.html",
  "topics/index.html",
  "robots.txt",
  "rss.xml",
  "sitemap-index.xml",
  "CNAME",
];
for (const required of requiredOutputs) {
  if (!(await exists(path.join(outputRoot, required))))
    failures.push(`missing required output: ${required}`);
}

const contentFiles = (await filesUnder(contentRoot)).filter((file) =>
  /\.mdx?$/.test(file),
);
const contentEntries = await Promise.all(
  contentFiles.map(async (file) =>
    contentEntry(file, await readFile(file, "utf8")),
  ),
);
const publicEntries = contentEntries.filter(
  (entry) => !entry.draft && !entry.demonstration,
);
const privateEntries = contentEntries.filter(
  (entry) => entry.draft || entry.demonstration,
);

for (const entry of publicEntries) {
  if (
    !(await exists(
      path.join(outputRoot, "investigations", entry.slug, "index.html"),
    ))
  ) {
    failures.push(
      `${entry.slug}: published production route was not generated`,
    );
  }
}
for (const entry of privateEntries) {
  if (
    await exists(
      path.join(outputRoot, "investigations", entry.slug, "index.html"),
    )
  ) {
    failures.push(
      `${entry.slug}: draft or demonstration leaked into generated routes`,
    );
  }
}

if (await exists(path.join(outputRoot, "rss.xml"))) {
  const rss = await readFile(path.join(outputRoot, "rss.xml"), "utf8");
  const itemCount = (rss.match(/<item>/g) ?? []).length;
  if (itemCount !== publicEntries.length)
    failures.push(
      `rss.xml: expected ${publicEntries.length} item(s), found ${itemCount}`,
    );
  for (const entry of privateEntries) {
    if (rss.includes(`/investigations/${entry.slug}/`))
      failures.push(`rss.xml: leaked ${entry.slug}`);
  }
}

if (await exists(path.join(outputRoot, "sitemap-index.xml"))) {
  const sitemapIndex = await readFile(
    path.join(outputRoot, "sitemap-index.xml"),
    "utf8",
  );
  for (const match of sitemapIndex.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const pathname = stripBase(new URL(match[1]).pathname);
    const target = path.join(
      outputRoot,
      decodeURIComponent(pathname.replace(/^\//, "")),
    );
    if (!(await exists(target)))
      failures.push(
        `sitemap-index.xml: missing referenced sitemap ${match[1]}`,
      );
  }
  for (const sitemap of outputFiles.filter((file) =>
    /sitemap-\d+\.xml$/.test(file),
  )) {
    const xml = await readFile(sitemap, "utf8");
    for (const entry of privateEntries) {
      if (xml.includes(`/investigations/${entry.slug}/`))
        failures.push(`${path.basename(sitemap)}: leaked ${entry.slug}`);
    }
  }
}

if (failures.length) {
  console.error(`Build validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Build validation passed: ${htmlFiles.length} HTML pages, ${publicEntries.length} published production investigation(s), ${privateEntries.length} excluded draft/demonstration file(s).`,
);
