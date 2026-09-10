export function GET({ site }: { site: URL }) {
  const basePath = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/`;
  const sitemap = new URL(`${basePath}sitemap-index.xml`, site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain" },
  });
}
