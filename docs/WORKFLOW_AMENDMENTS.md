# Editorial workflow amendments

This log records material changes to the production investigation workflow. It supplements `docs/EDITORIAL_WORKFLOW.md`; the current workflow remains the operative instruction.

## 2026-09-10 — Fast findings and civic action

**Requested by:** Publisher

**Decision:** Every production investigation must open with a hyper-concise findings digest and provide verified, immediately usable civic-action links.

**Implemented requirements:**

- Frontmatter `summary` now contains 2–4 points of no more than 180 characters each and is presented as a 30-second read.
- Published, non-demonstration investigations require frontmatter `actions` with at least one official contact route.
- Action entries identify their category, title, responsible organization, instruction, URL and verification date.
- Reporters must check relevant elected-representative contacts, petition options and other useful public processes such as complaints, meetings, submissions and records requests.
- Petitions are listed only when their status and relevance can be verified. If no active petition is established, an official petition process may be linked instead.
- Civic-action language must remain lawful, non-partisan and respectful. External petitions and campaigns are resources, not publication endorsements.
- The case file must include a reader-action inventory, and links must be rechecked immediately before publication.

**Implementation:** `src/content.config.ts` validates the new requirements, `src/components/ActionList.astro` presents action links, and `src/layouts/InvestigationLayout.astro` places the fast findings and action block before the long-form article.
