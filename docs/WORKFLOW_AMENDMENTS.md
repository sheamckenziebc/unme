# Editorial workflow amendments

This log records material changes to the production investigation workflow. It supplements `docs/EDITORIAL_WORKFLOW.md`; the current workflow remains the operative instruction.

## 2026-09-11 — Accessible language and the UNME voice

**Requested by:** Publisher, to align the writing with UR NOT MAD ENOUGH and make consequential public records understandable, memorable and useful in everyday conversation.

**Decision:** Write clear, level-headed reporting with broad appeal and a livelier voice. Investigate inconsistencies, mismanagement, avoidable failures and bad choices, explain the evidence and consequences, and leave readers free to form their own judgment.

**Implemented requirements:**

- Use everyday language, explain necessary jargon and unfamiliar institutions, prefer concrete actions and read the prose aloud for clarity and natural rhythm.
- Permit sharp comparisons, dry wit, blunt criticism and occasional swearing when they serve a documented point. Do not replace reporting with manufactured outrage or ridicule people affected by a failure.
- Give every Dossier and Brief at least one central, verified fact that readers can accurately repeat to a family member. Use the existing summary where possible; preserve essential attribution, scope and qualifications when the sentence is shared alone.
- Record the exact takeaway, claim-ledger ID and source locator in the case file and final handoff. Check memorable wording against contrary evidence. “Irrefutable” sets an ambition for proof, not immunity from correction.
- Make accessibility and accurate repetition part of the drafting instructions and publication review. Record actual review work without inventing reader testing. These are editorial checks, with no new article schema fields or site components.

**Operative files:** `AGENTS.md`, `EDITORIAL_WORKFLOW.md`, `CASE_FILE_TEMPLATE.md`, `ARTICLE_BRIEF.md` and README. Existing evidence states, fairness, direct-reporting and publication-approval requirements remain in force.

## 2026-09-11 — Direct reporting, clearer writing and Yukon focus

**Requested and approved direction:** Publisher, including explicit confirmation that the non-Yukon story to remove is Waltham/Portage-du-Fort.

**Decisions and implementation:**

- Direct reporting begins during evidence gathering and includes relevant responsible actors, affected people, records custodians and independent sources. Record what it added; an omission needs a specific editor-approved exception. Public documents alone do not automatically excuse fresh reporting or right of reply.
- Agents research and verify recipients, resolve all message placeholders, prepare source-linked questions and reasonable deadlines, create addressed unsent mailbox drafts and verify them by reading them back. The publisher reviews every message and clicks Send. Follow-ups, resends, forms and scheduling replies follow the same boundary.
- Drafting, approval, sending, delivery and response are separate states. Preserve mailbox evidence privately and only safe status summaries publicly. A draft deadline creates no missed-response claim.
- Prepare first direct inquiries after publication for the Eagle Gold disclosure and Yukon procurement investigations. Preserve the September 10 no-contact disclosures and publication exceptions; later contact cannot retroactively become prepublication right of reply.
- Explain the finding, affected people and concrete consequence within the first 100–150 words. Replace mandatory article boilerplate with a flexible reader-led structure; cut repeated caveats and process narration while retaining material limits and the auditable evidence trail. Never invent a scene, person or harm.
- Select useful, consequential Yukon stories without requiring an extraordinary scandal, crime, novelty or proof of illegality. Non-partisanship permits reasoned criticism of political choices, institutions and societal norms under the same standard of evidence.
- Focus current coverage on Yukon. Withdraw Waltham/Portage-du-Fort from public routes with `draft: true`, retaining the historical article and case file. This is a geographic scope decision, not a factual retraction; republication needs a fresh explicit decision.
- Define the future subscription as support for public journalism. Supersede the paid Eagle Gold watch proposal and pilot-briefing requirements. No checkout, price, provider purchase or payment activation is authorized by this amendment.

**Operative files:** `AGENTS.md`, `EDITORIAL_WORKFLOW.md`, `CASE_FILE_TEMPLATE.md`, `RESPONSE_REQUEST_TEMPLATE.md`, `ARTICLE_BRIEF.md` and the distribution workflow. README and public About, Methodology and Brief desk copy reflect the new direction. The growth roadmap, product definition, execution handoff and funding memo reflect the supporting-subscription decision.

## 2026-09-10 — Dossier, Brief and Ledger architecture

**Requested by:** Publisher

**Decision:** UNME publishes two reporting formats under one evidentiary standard and maintains an outcome Ledger for every published file.

**Implemented requirements:**

- The Dossier is the deep form: original primary-source reporting, chronology, competing explanations, response, aftermath and unresolved questions.
- The Brief is a tightly scoped finding whose material truth is already substantially established. It receives the same verification, fairness, response and publication gates as a Dossier.
- A Brief may become a Dossier when new records, sources or public response materially expand the reporting question.
- Every published production file carries a plain-language Ledger status, summary and checked date. Later authoritative developments are recorded without manufacturing a new story.
- Candidate selection considers evidence strength, comprehensibility, abuse or betrayal of public trust, human consequences and undercoverage. No calendar obligation overrides the publication threshold; UNME is allowed to publish nothing.

**Implementation:** The content schema now validates `format` and `ledger`; the site exposes dedicated Dossier, Brief and Ledger desks; the case file and reporting brief record format choice and outcome status.

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
- Added a public correction-request form and clear warning that the intake was not confidential. This route was later retired when the dedicated editor inbox became available; the site now directs correction requests to email.
- Documented AI-assisted work as non-evidentiary, preserved named human editorial accountability, and documented the boundary between public case files and private reporting material.
- Verified public pages at 320px, 375px and desktop widths with no horizontal overflow, valid landmarks, unique headings, usable navigation and correct metadata.

**Deliberate hold:** The Yukon investigation remains `draft: true`. Its case file records outstanding registry checks, right of reply, hostile read, final fact check and editor approval; this infrastructure launch does not waive those gates.
