# UR NOT MAD ENOUGH

The static website for **UR NOT MAD ENOUGH**, an independent, evidence-first accountability publication currently focused on Yukon. Reporting appears as deep Dossiers, tightly scoped Briefs and a living Ledger of what happened next. Every format uses the same evidentiary standard and preserves clear distinctions between confirmed facts, supported conclusions, allegations and unresolved questions.

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

Begin direct reporting while gathering records. Agents verify recipients, write focused questions and create complete unsent drafts in the editor mailbox using [`docs/RESPONSE_REQUEST_TEMPLATE.md`](docs/RESPONSE_REQUEST_TEMPLATE.md). The publisher reviews every message and clicks Send. Keep contacts, draft IDs and correspondence under `.unme-private/`; record only actual contact events in public case files. Publishing permission does not authorize agents to send outreach.

Lead with what happened, who is affected and why it matters within the first 100–150 words. A consequential local failure or policy choice can merit reporting without scandal, crime or an exclusive. Preserve the evidence standard while cutting repeated caveats and process narration; retain the verification trail in citations and case files.

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

For an explicitly authorized withdrawal, set the article to `draft: true`, preserve its MDX and historical approval, record the reason in its case file, and deploy after validation. Verify that its former URL returns 404 and that listings, topic pages, RSS and sitemap exclude it. A scope withdrawal is not a factual retraction. Restoring it requires a new explicit publication decision and current checks.

Check the former URL with and without a trailing slash on both production hostnames. During the September 11 withdrawal, removed trailing-slash assets remained available after deployment and cache purging. `public/_redirects` explicitly routes those six retired addresses to their absent, extensionless counterparts so they resolve to a real 404. Check and remove any matching withdrawal rule before approved republication or reuse of a retired topic. Cloudflare parses this file at deployment; Astro preview does not apply it. See the [Pages redirect documentation](https://developers.cloudflare.com/pages/configuration/redirects/).

## Project map

- `src/content/investigations/` — investigation Markdown and MDX
- `src/pages/dossiers/` — the flagship Dossier desk
- `src/pages/briefs/` — tightly scoped Briefs
- `src/pages/ledger/` — current outcome status for published files
- `docs/EDITORIAL_WORKFLOW.md` — production reporting and publication gates
- `docs/WORKFLOW_AMENDMENTS.md` — dated record of editorial workflow changes
- `docs/ARTICLE_BRIEF.md` — reusable human/Codex investigation brief
- `docs/CASE_FILE_TEMPLATE.md` — required publication-safe investigation dossier
- `docs/RESPONSE_REQUEST_TEMPLATE.md` — direct-reporting drafts, right of reply and actual contact log
- `docs/DISTRIBUTION_WORKFLOW.md` — approved-recipient, cadence and outreach controls
- `docs/DISTRIBUTION_CAMPAIGN_TEMPLATE.md` — reusable private campaign record
- `docs/OUTREACH_TEMPLATES.md` — reporter, desk, community and courtesy message structures
- `docs/REPUBLISHING_POLICY_DRAFT.md` — draft excerpt and republication terms
- `docs/REPUBLISHING_PERMISSION_TEMPLATE.md` — one-use outlet permission record
- `docs/FUNDING_AND_INDEPENDENCE_DRAFT.md` — draft revenue and underwriting guardrails
- `docs/GROWTH_ROADMAP.md` — Yukon reporting priorities and future supporting subscription
- `docs/PAID_PRODUCT_DEFINITION.md` — supporting-subscription promise and financial assumptions
- `docs/PAID_PRODUCT_HANDOFF.md` — implementation instructions for a later subscription build
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
- `.github/workflows/validate.yml` — independent validation-only CI

For the current business and infrastructure sequence, see `docs/GROWTH_ROADMAP.md`.

## Cloudflare Pages deployment

Production is published by the Cloudflare Pages project `urnotmadenough` from the repository's `main` branch. Cloudflare uses the Astro preset, runs `npm run deploy:build`, publishes `dist`, and reads the pinned runtime from `.node-version`. The deployment command checks formatting, content, Astro and TypeScript before building, then validates generated metadata, links, draft exclusions, feeds and routes before Cloudflare publishes the result.

The GitHub workflow is validation-only CI. It deliberately does not publish, so Cloudflare is the single production deployment path. The Cloudflare GitHub App is restricted to this repository.

## Custom domain

The domain remains registered at Namecheap, while its authoritative DNS is managed by Cloudflare. Preserve the Google mail-routing, SPF, DKIM and site-verification records when changing web records. Both the apex and `www` hostnames must be attached to the Pages project and verified over HTTPS.

`public/CNAME` remains the source for the production hostname used by Astro's canonical URLs and internal links. Optional `PUBLIC_SITE_URL` and `PUBLIC_BASE_PATH` environment variables can override this behavior for an unusual deployment. Site URL behavior is centralized in `astro.config.mjs`; editorial identity and default metadata are centralized in `src/config/site.ts`.

### Hosting rollback

Keep the last successful GitHub Pages deployment available during the migration window. If a rollback is required, leave Cloudflare DNS authoritative and replace the Pages web records with the four documented GitHub Pages apex addresses (`185.199.108.153` through `185.199.111.153`) plus the `www` CNAME to `sheamckenziebc.github.io`. Confirm the GitHub custom-domain setting before changing DNS. Restore the former Pages deployment workflow from Git history only if a new GitHub-hosted release is required.
