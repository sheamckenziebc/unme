# Working on UR NOT MAD ENOUGH

This repository is a static, content-first investigative publication. Preserve its small architecture and evidence-first editorial identity.

## Non-negotiable direction

- Keep the site statically generated with Astro unless a demonstrated requirement cannot be met that way.
- Treat Markdown or MDX investigations as the source of truth. Publishing an ordinary article must not require application-code changes.
- Preserve strict content-schema validation. Bad metadata should fail the build.
- Prefer primary evidence, careful attribution and restrained conclusions in all demonstration or production copy.
- Never invent allegations about real people or organizations.
- Keep `CONFIRMED`, `SUPPORTED`, `ALLEGED` and `UNRESOLVED` semantically explicit; colour is supporting information only.

## Production investigations

- Before creating or substantially updating a real investigation, read and follow `docs/EDITORIAL_WORKFLOW.md`.
- Treat user-supplied claims and links as leads. Verify them independently and create the case file and claim ledger before drafting the article.
- Use `docs/ARTICLE_BRIEF.md` when a reporting brief is needed; do not require every field to be filled before beginning safe research.
- Keep a new investigation `draft: true` until the workflow's publication gates are satisfied. Never imply that a response was requested, an appeal was checked or an article was published unless that action occurred.
- Give every production investigation a hyper-concise findings summary and a verified civic-action section. Use official representative/contact links, include petitions only when their status and relevance are clear, and record link-check dates in the case file.
- Publishing, deploying, contacting sources and sending requests for comment require explicit user direction. Draft the questions and identify the correct recipients without taking those external actions on your own.

## Technical boundaries

- Do not add a backend, database, authentication, CMS, client framework, Tailwind or a component library without a concrete requirement and written justification.
- Prefer semantic HTML, plain CSS and zero client JavaScript. Add hydration only when an interaction materially needs it.
- Keep dependencies few and purposeful. Reuse the existing utilities and components before creating abstractions.
- Keep components focused. Do not move article-specific facts or prose into reusable components.
- Maintain GitHub Pages base-path compatibility by using `withBase()` for internal URLs.

## Quality bar

- Mobile layouts must remain usable from 320px upward.
- Preserve visible focus styles, strong contrast, semantic landmarks, meaningful image alt text and reduced-motion support.
- Long articles, tables, citations and URLs must not break narrow screens.
- Run `npm run format`, `npm run check` and `npm run build` after meaningful changes.
- Update README instructions when publication or deployment workflows change.
