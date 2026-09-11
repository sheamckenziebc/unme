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

- Focus new reporting on Yukon issues unless the editor explicitly changes that scope. A meaningful local failure, policy choice or harmful norm can warrant coverage without a criminal finding, scandal or exclusive discovery. Apply the same standards to all political actors and institutions.
- Before creating or substantially updating a real investigation, read and follow `docs/EDITORIAL_WORKFLOW.md`.
- Start production work from `docs/CASE_FILE_TEMPLATE.md`; use `docs/RESPONSE_REQUEST_TEMPLATE.md` to prepare and track right-of-reply requests.
- Treat user-supplied claims and links as leads. Verify them independently and create the source register, chronology, claim ledger and disconfirming-evidence record before drafting the article.
- Treat tracked case files as public. Never commit confidential sources, private contact details, unpublished legal advice, restricted records, secrets or embargoed material; keep sensitive working files under the ignored `.unme-private/` directory or another approved secure location.
- Use `docs/ARTICLE_BRIEF.md` when a reporting brief is needed; do not require every field to be filled before beginning safe research.
- Keep a new investigation `draft: true` until the workflow's publication gates are satisfied. Never imply that a response was requested, an appeal was checked or an article was published unless that action occurred.
- Do not add `publicationReview` metadata or change `draft` to `false` without a completed case-file readiness decision and explicit editor approval. Record any gate exception, its reason and its approver.
- Give every production investigation a hyper-concise findings summary and a verified civic-action section. Use official representative/contact links, include petitions only when their status and relevance are clear, and record link-check dates in the case file.
- Make direct reporting part of the investigation: identify responsible actors, affected people and useful independent sources; prepare focused questions that could change the account. Public documents alone do not automatically excuse fresh reporting or right of reply.
- Agents handle outreach preparation through verified, fully addressed, ready-to-send drafts in the editor mailbox, with source links, reasonable deadlines and a private review log. The user reviews every message and clicks Send. Do not send, schedule, follow up or accept interview/background terms on the user's behalf. If mailbox access is unavailable, prepare the complete private packet and identify the specific remaining access step.
- Lead with the human consequence and the reason to care now. Within the first 100–150 words, explain what happened, who is affected and what is at stake. Keep necessary qualifications beside their claims; put detailed audit trails in the case file or source notes. Never invent a person, experience or harm to make a story vivid.
- Publishing and deploying still require explicit user direction. Permission to research, prepare outreach or publish does not authorize agents to send correspondence.

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
- Run `npm run format`, `npm run check`, `npm run build` and `npm run validate:build` after meaningful changes.
- Update README instructions when publication or deployment workflows change.
