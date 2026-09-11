# UR NOT MAD ENOUGH

The static website for **UR NOT MAD ENOUGH**, an independent, evidence-first accountability publication. Reporting appears as deep Dossiers, tightly scoped Briefs and a living Ledger of what happened next. Every format uses the same evidentiary standard and preserves clear distinctions between confirmed facts, supported conclusions, allegations and unresolved questions.

The repository uses Astro, TypeScript, Astro Content Collections, MDX and plain CSS. It has no database, CMS, client framework, analytics or runtime backend.

## Local development

Use Node.js 22.19 or newer (Node 24 is used in CI).

```sh
npm ci
npm run dev
```

Useful checks:

```sh
npm run format:check
npm run check
npm run build
npm run validate:build
npm run preview
```

The production site is generated in `dist/`.

## Publishing a Dossier or Brief

Add one `.md` or `.mdx` file to `src/content/investigations/`. Copy one of the demonstration investigations as a starting point, then replace every frontmatter value and the article body. Normal publication does not require application-code changes.

For real reporting, follow [`docs/EDITORIAL_WORKFLOW.md`](docs/EDITORIAL_WORKFLOW.md). The workflow requires a case file and claim ledger before drafting, a fair account of contrary evidence, a response opportunity, explicit appeal and review checks, an initial Ledger status and technical validation. A Brief is short because the story is simple, not because the verification is. [`docs/ARTICLE_BRIEF.md`](docs/ARTICLE_BRIEF.md) is a reusable intake brief that can be handed directly to Codex. Repository agents are directed to this process by `AGENTS.md`.

Required frontmatter is validated at build time:

- `title`, `slug`, `description`, `publishedDate`, `authors`
- `jurisdiction`, `topics`, `organizations`
- `format`, `featured`, `draft`, `summary`, `sources`
- `ledger` for published production reporting
- `actions` for published production investigations
- `publicationReview` for published production investigations
- optional `updatedDate`, hero image fields and SEO overrides

Set `format: dossier` for the deep form or `format: brief` for a tightly scoped finding. Set `draft: true` to keep a file out of generated pages and the RSS feed. Set the optional `demonstration: true` only for fictional fixtures; demonstrations are also excluded from every public route and feed. The `summary` is a validated 2–4 point, 30-second findings digest. Every published production file also needs a current `ledger` status, plain-language outcome summary and checked date. Before publication, `actions` must include at least one current official contact route; relevant petition and public-process links should also be supplied when verified. Published production reporting must carry at least one source and `publicationReview` metadata pointing to an existing, slug-matched case file and recording editor approval, right-of-reply status, fairness review and final fact-check completion. If `heroImage` is supplied, `heroImageAlt` is required, and `updatedDate` cannot precede `publishedDate`. A malformed article fails the build. MDX files can import the editorial components in `src/components/` for evidence, findings, document links, responses, updates and corrections.

This repository is public. Tracked case files must be publication-safe: use opaque source IDs and omit private contact details, confidential identities, restricted documents and unpublished legal advice. Store sensitive working material under `.unme-private/`, which Git ignores, or in another approved secure system. Never rely on Git deletion to erase material that was already committed.

## Project map

- `src/content/investigations/` — investigation Markdown and MDX
- `src/pages/dossiers/` — the flagship Dossier desk
- `src/pages/briefs/` — tightly scoped Briefs
- `src/pages/ledger/` — current outcome status for published files
- `docs/EDITORIAL_WORKFLOW.md` — production reporting and publication gates
- `docs/WORKFLOW_AMENDMENTS.md` — dated record of editorial workflow changes
- `docs/ARTICLE_BRIEF.md` — reusable human/Codex investigation brief
- `docs/CASE_FILE_TEMPLATE.md` — required publication-safe investigation dossier
- `docs/RESPONSE_REQUEST_TEMPLATE.md` — right-of-reply request and response log
- `docs/DISTRIBUTION_WORKFLOW.md` — approved-recipient, cadence and outreach controls
- `docs/DISTRIBUTION_CAMPAIGN_TEMPLATE.md` — reusable private campaign record
- `docs/OUTREACH_TEMPLATES.md` — reporter, desk, community and courtesy message structures
- `docs/REPUBLISHING_POLICY_DRAFT.md` — draft excerpt and republication terms
- `docs/REPUBLISHING_PERMISSION_TEMPLATE.md` — one-use outlet permission record
- `docs/FUNDING_AND_INDEPENDENCE_DRAFT.md` — draft revenue and underwriting guardrails
- `docs/case-files/` — source inventories, chronologies, claim ledgers and open checks
- `.unme-private/` — ignored local working area for sensitive reporting and distribution material
- `scripts/validate-build.mjs` — generated-route, metadata, link and draft-leakage checks
- `src/content.config.ts` — the validated investigation schema
- `src/config/site.ts` — publication name, tagline and global metadata
- `src/components/` — small presentation and editorial components
- `src/layouts/` — shared document and investigation layouts
- `src/pages/` — routes, indexes, RSS, robots and 404
- `src/styles/global.css` — global design tokens and shared typography
- `src/utils/` — date, sorting, slug and base-path helpers
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## GitHub Pages deployment

The workflow follows GitHub Pages’ artifact deployment approach. A push to `main` installs the locked dependencies, checks formatting and types, builds the site, validates generated metadata and links, checks that drafts and demonstrations did not leak, and deploys only if every stage passes. The Astro configuration derives the temporary Pages URL and repository base path from GitHub Actions automatically, so a project repository works at `https://OWNER.github.io/REPOSITORY/` without hard-coded owner details.

After the repository is pushed to GitHub, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source.

## Custom domain

For a domain such as `urnotmadenough.ca`:

1. Configure the required DNS records with the domain provider.
2. Add `public/CNAME` containing only the domain name, such as `urnotmadenough.ca`.
3. Configure and verify the custom domain under **Settings → Pages**.

Astro reads `public/CNAME` automatically and switches canonical URLs and internal links to the domain root. Optional `PUBLIC_SITE_URL` and `PUBLIC_BASE_PATH` repository variables can override this behavior for an unusual deployment. Site URL behavior is centralized in `astro.config.mjs`; editorial identity and default metadata are centralized in `src/config/site.ts`.
