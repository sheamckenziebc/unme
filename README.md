# UR NOT MAD ENOUGH

The first static website for **UR NOT MAD ENOUGH**, an independent, evidence-first accountability publication. The site is built for long-form investigations, direct access to source records and clear distinctions between confirmed facts, supported conclusions, allegations and unresolved questions.

The repository uses Astro, TypeScript, Astro Content Collections, MDX and plain CSS. It has no database, CMS, client framework, analytics or runtime backend.

## Local development

Use Node.js 22.19 or newer (Node 24 is used in CI).

```sh
npm install
npm run dev
```

Useful checks:

```sh
npm run format:check
npm run check
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Publishing an investigation

Add one `.md` or `.mdx` file to `src/content/investigations/`. Copy one of the demonstration investigations as a starting point, then replace every frontmatter value and the article body. Normal publication does not require application-code changes.

Required frontmatter is validated at build time:

- `title`, `slug`, `description`, `publishedDate`, `authors`
- `jurisdiction`, `topics`, `organizations`
- `featured`, `draft`, `summary`, `sources`
- optional `updatedDate`, hero image fields and SEO overrides

Set `draft: true` to keep an investigation out of generated pages and the RSS feed. If `heroImage` is supplied, `heroImageAlt` is required. A malformed article fails the build. MDX articles can import the editorial components in `src/components/` for evidence, findings, document links, responses, updates and corrections.

## Project map

- `src/content/investigations/` — investigation Markdown and MDX
- `src/content.config.ts` — the validated investigation schema
- `src/config/site.ts` — publication name, tagline and global metadata
- `src/components/` — small presentation and editorial components
- `src/layouts/` — shared document and investigation layouts
- `src/pages/` — routes, indexes, RSS, robots and 404
- `src/styles/global.css` — global design tokens and shared typography
- `src/utils/` — date, sorting, slug and base-path helpers
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## GitHub Pages deployment

The workflow follows Astro’s official GitHub Pages deployment approach. A push to `main` builds and deploys the static site. The Astro configuration derives the temporary Pages URL and repository base path from GitHub Actions automatically, so a project repository works at `https://OWNER.github.io/REPOSITORY/` without hard-coded owner details.

After the repository is pushed to GitHub, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source.

## Custom domain

For a domain such as `urnotmadenough.ca`:

1. Configure the required DNS records with the domain provider.
2. Add `public/CNAME` containing only `urnotmadenough.ca`.
3. In GitHub, add the repository variable `PUBLIC_SITE_URL` with the value `https://urnotmadenough.ca`.
4. Add the repository variable `PUBLIC_BASE_PATH` with the value `/`.
5. Configure and verify the custom domain under **Settings → Pages**.

Site URL behavior is centralized in `astro.config.mjs`; editorial identity and default metadata are centralized in `src/config/site.ts`.
