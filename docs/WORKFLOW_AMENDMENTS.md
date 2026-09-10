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

## 2026-09-10 — Operational pipeline hardening

**Prompt:** An outside audit argued that the editorial philosophy was well established but the investigation procedure needed to be hardwired.

**Assessment:** The audit described an earlier repository state. The merged workflow already required a chronology, claim ledger, current-status checks, thesis stress test, right of reply, publication gates and a completion handoff. Creating a second competing workflow file would have weakened the single source of truth.

**Accepted and implemented:**

- Added explicit workflow stages with required outputs and exit conditions from intake through verified deployment.
- Added `docs/CASE_FILE_TEMPLATE.md` as the standard dossier for source registration, chronology, claims, disconfirming evidence, current status, reader actions, responses, hostile read, readiness and deployment records.
- Added `docs/RESPONSE_REQUEST_TEMPLATE.md` with contact verification, authorization, deadline rationale, message contents, delivery evidence and response incorporation checks.
- Made the red-team pass auditable: reporters must record where contrary evidence was sought and how it changed the thesis.
- Added a formal legal, privacy and fairness hostile read plus a standardized readiness decision and completion handoff.
- Added post-deployment verification for the live URL, canonical metadata, indexes, RSS, sitemap and critical links.
- Added schema-validated `publicationReview` metadata. A production article cannot be built as published without a case-file reference, named approval, right-of-reply status, fairness review and completed final fact check.

**Adapted or rejected:**

- Kept `docs/EDITORIAL_WORKFLOW.md` as the sole operative workflow rather than adding a duplicative `INVESTIGATION_WORKFLOW.md`.
- Did not automate source contact, editorial judgment, legal conclusions or gate exceptions. Those actions require real evidence and named human authorization; a checkbox or build script cannot truthfully manufacture them.

## 2026-09-10 — Launch-readiness and fail-closed publishing

**Prompt:** Conduct a complete codebase, README and strategic sanity review so the live publication is ready for its first production investigation.

**Decision:** The public site may launch before its first investigation, but it must not present demonstrations as reporting or allow an incomplete production file to bypass editorial and technical gates.

**Implemented:**

- Excluded demonstration fixtures from every public route, index, feed and sitemap; added explicit reporting-in-progress states for the empty archive.
- Made published production entries require at least one source, verified civic actions, a slug-matched case file and recorded editor approval, right-of-reply status, fairness review and final fact check. Future-dated publication, approval and action-check dates fail validation.
- Added generated-site validation for required outputs, metadata, canonical URLs, internal links and fragments, accessibility basics, published route presence, RSS/sitemap consistency and draft or demonstration leakage.
- Changed the GitHub Pages workflow to run locked installation, formatting, Astro/TypeScript diagnostics, the production build and generated-site validation before uploading a deployable artifact. Deployment permissions now exist only on the deploy job.
- Added a public correction-request form and clear warning that the GitHub intake is not confidential.
- Documented AI-assisted work as non-evidentiary, preserved named human editorial accountability, and documented the boundary between public case files and private reporting material.
- Verified public pages at 320px, 375px and desktop widths with no horizontal overflow, valid landmarks, unique headings, usable navigation and correct metadata.

**Deliberate hold:** The Yukon investigation remains `draft: true`. Its case file records outstanding registry checks, right of reply, hostile read, final fact check and editor approval; this infrastructure launch does not waive those gates.
