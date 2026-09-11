# Production reporting workflow

This is the operating procedure for creating or substantially updating a real UR NOT MAD ENOUGH Dossier, Brief or Ledger entry. It is written for both human editors and Codex. Read it together with `AGENTS.md` and the public methodology page.

The purpose is repeatability: a new article should be produced from a documented chain of evidence, not from the confidence or memory of the writer.

## The completion contract

For a new investigation, produce these four things:

1. A case file in `docs/case-files/` containing the source register, chronology, claim ledger, current-status checks, disconfirming evidence, reader-action inventory, response log, hostile read, readiness decision and open checks.
2. A production MDX draft in `src/content/investigations/` that follows the site's schema and editorial components, including the 30-second findings summary and verified civic actions.
3. A standardized handoff copied from the case file's final readiness section: decision, current thesis, strongest complication, material gaps, response status, current-status result, exceptions, approval and technical checks.
4. A private direct-reporting packet with verified recipients, questions tied to evidence gaps, complete mailbox drafts, proposed deadlines and a review log. The editor's remaining action should be to review each message and click Send. A draft is not a contact event.

Do not publish merely because the prose is finished. Keep `draft: true` until the publication gates in this document are satisfied or the editor explicitly accepts a documented exception.

## One standard, three products

- **The Dossier** is the flagship deep form: original primary-source work, chronology, competing explanations, government or subject response, documentary evidence, aftermath and unresolved questions.
- **The Brief** explains one consequential, substantially established finding. Use only the length needed to establish it, explain its consequence and include the strongest relevant response. There is no minimum word count or requirement that the finding be extraordinary.
- **The Ledger** follows outcomes after publication: recommendations accepted, ignored or partly implemented; money repaid; an official resigned; no action; action underway; or the matter remains unresolved.

> A Brief is short because the story is simple, not because the verification is.

Dossiers and Briefs pass the same evidence, attribution, fairness, response, current-status and publication gates. A Brief may become a Dossier when new records, sources or public response materially expand the reporting question; preserve the original record and document the change of scope.

The current reporting focus is Yukon. Cover governments, political actors, companies, institutions and societal norms where a specific question matters to people here. Work elsewhere requires an explicit scope decision from the editor.

Candidate selection weighs consequence, evidence, clarity and usefulness. A service failure, unfair process, unexplained cost, ineffective policy, broken commitment or normalized practice can warrant scrutiny even when lawful, familiar or already reported elsewhere. Readers do not need a scandal to deserve an explanation. Identify what this piece adds: a clear account, new evidence, a tested explanation, an affected person's experience or a current follow-up. Do not manufacture an exclusive claim.

Non-partisan means applying the same standards across parties and interests. It permits direct criticism of political choices and social norms, with the factual basis and reasoning visible. Distinguish reported findings from the publication's policy or moral judgment. An absence of criminal or civil liability does not establish that a decision was competent, fair or harmless.

Publishing frequency remains a planning aid, not a quota. Hold weakly supported or inconsequential work; do not reject a useful local story merely because it is ordinary.

## Workflow stages and exit conditions

Start the dossier from `docs/CASE_FILE_TEMPLATE.md`. A stage is complete only when its evidence is recorded in that case file.

| Stage            | Required output                                                                                                   | Exit condition                                                                                                                |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Intake           | Lead, public-interest reason, proposed format, testable hypothesis, defeat condition, scope and sensitivity notes | The lead is specific enough to test without assuming its truth and the proposed format fits its evidentiary scope.            |
| Evidence         | Source register, chronology, claim ledger and current-status plan                                                 | Material claims have primary support or are explicitly unresolved.                                                            |
| Direct reporting | Source map, focused questions, verified contacts and complete private mailbox drafts                              | Requests are ready for the editor to review and send; the log separates preparation, sending and replies.                     |
| Red team         | Disconfirming-evidence record and strongest fair contrary account                                                 | The thesis survives, is narrowed, or is abandoned based on recorded results.                                                  |
| Draft            | Schema-valid MDX, fast summary, actions and reporting-status disclosure                                           | Draft accurately reflects the dossier and remains `draft: true`.                                                              |
| Right of reply   | Actual send/delivery record, responses and incorporation record                                                   | Responses are fairly included, a reasonable delivered-request deadline passed, or an editor-approved exception is documented. |
| Final review     | Current-status refresh, hostile read, fact check, copy edit and link check                                        | All gates are checked or each exception has a named approver, reason and mitigation.                                          |
| Publication      | `publicationReview`, initial Ledger state, explicit editor approval, passing build and deployment authorization   | The deployed URL is verified and the commit, deployment run and live checks are recorded.                                     |
| Post-publication | Ledger checks, correction/update intake and source monitoring appropriate to the story                            | Material new evidence is verified and handled through the Ledger, update or correction workflow.                              |

## Ground rules

- Treat a user's description, a tip and a news story as a **lead**, not as proof.
- Prefer the final operative primary record: the signed judgment over a news summary, the final audit over a press release, the executed contract over a procurement notice.
- Separate what a decision-maker found from what a party alleged or argued.
- State the strongest fair version of the criticized party's position.
- Do not turn an unexplained fact into a claim of motive.
- Do not describe conduct as illegal, corrupt, fraudulent, obstructive or in bad faith unless a competent authority made that finding or the evidence independently proves every element. Attribute such language when it belongs to someone else.
- Name individuals only when identification materially helps the public understand responsibility. Never imply personal wrongdoing from an institution's litigation position.
- Use exact calendar dates. Distinguish an event date, decision date, release date, retrieval date and article publication date.
- Preserve meaningful caveats near the claim they qualify, not only at the end.
- Choose Dossier or Brief by the complexity of the proved story, never by weakening verification or padding a simple finding.

### Public repository safety

This code repository and its history are public. The tracked case file is therefore a publication-safe accountability record, not a secure newsroom vault.

- Never commit confidential source identities, private contact details, unpublished legal advice, credentials, embargoed material, unlawfully obtained records or information covered by a publication ban or sealing order.
- Store sensitive working material under the ignored `.unme-private/<article-slug>/` directory or another editor-approved secure system. Use opaque IDs in the tracked dossier.
- Before staging changes, inspect the exact file list and diff for accidental disclosures. Removing a secret in a later commit does not remove it from Git history.
- Public transparency yields to source safety, privacy, legal duties and the security of the reporting process.

## Evidence states

Use the site's four labels consistently.

| State        | Use it when                                                                                               | Do not use it when                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `CONFIRMED`  | Strong primary evidence directly establishes the proposition.                                             | The source merely repeats another person's claim.                            |
| `SUPPORTED`  | Multiple facts strongly support an inference, but the record is incomplete or interpretation is required. | A definitive finding exists; use confirmed instead.                          |
| `ALLEGED`    | A person, party or institution asserts something that has not been independently established.             | The allegation has been adopted as a finding by the relevant decision-maker. |
| `UNRESOLVED` | The question matters and available evidence cannot answer it.                                             | The answer is inconvenient but present in the record.                        |

An official allegation is still an allegation. A government statement is not automatically confirmed. A court's summary of a party's argument confirms that the argument was made, not that the argument was true.

## Source hierarchy

Work down this list until each material claim rests on the strongest source reasonably available:

1. Final judgments, formal findings, signed orders, statutes and regulations.
2. Auditor, ombudsman, commissioner, inquiry and regulator reports.
3. Executed contracts, public accounts, filings, transcripts, correspondence, datasets and records released under access law.
4. On-record responses from the people or organizations concerned.
5. High-quality secondary reporting and expert analysis.
6. Tips, social posts, anonymous claims and partisan statements as leads only until corroborated.

For PDFs, preserve the direct URL and record the page and paragraph numbers used. Check whether a corrected version, appendix, response or later decision exists. If a link may disappear, add a lawful archive URL or preserve a working copy outside the public repository.

## Reader-first summary and civic action

Every production investigation must help a reader understand the finding quickly and act on it responsibly.

### The 30-second findings summary

- Write 2–4 standalone points, each no longer than 180 characters. The schema enforces these limits.
- Put the decisive confirmed outcome first. Use the remaining points for scale or consequence, the strongest contrary fact and the central unresolved limit.
- Use plain language, concrete nouns and proved verbs. Do not add outrage language, throat-clearing, unexplained acronyms or facts that exist only in the long-form body.
- Enter the points in frontmatter `summary`; the investigation layout renders them before the article body.

### Make the consequence easy to understand

- Within the first 100–150 words of the body, explain the finding, who is affected and why it matters now. Tie the consequence to money, time, safety, access, rights, public services, power or a concrete decision. Do not bury the reason to care after the chronology.
- Show the chain from decision to consequence. Separate a documented harm, a person's attributed experience and a plausible risk. If the effect is unknown, name the decision people cannot evaluate or the question that still needs reporting. Never invent a resident, quote, scene, lost service or causal link.
- Make one main point per paragraph. Prefer concrete actors and verbs; translate a legal term or acronym when first needed. Use a table only when comparison is easier than prose.
- Keep each material qualification beside the claim it limits. Repeat it only where a standalone headline, summary or new context would otherwise mislead. Remove repeated disclaimers, defensive throat-clearing and a paragraph's second explanation of the same point.
- Let citations and source notes carry document identifiers, page arithmetic and procedural detail that readers do not need to follow the argument. Keep the full verification trail in the case file. Transparency should make verification possible without making the reader perform the investigation.
- Before handoff, summarize the story aloud in two sentences: what happened to whom, and why the reader should care. If that requires a new unsupported claim, report the gap or narrow the premise.

### What readers can do now

- Add frontmatter `actions` for every production investigation before publication. Each action needs a category, title, responsible organization, concise instruction, direct URL and `verifiedDate`.
- Include at least one official route for contacting the appropriate elected representative or responsible government body. Give the reader a specific, evidence-based question or request rather than a script for abuse or mass spam.
- Link an active petition only after checking its organizer, exact demand, intended recipient, closing date and whether it collects personal information. Clearly identify third-party campaigns. Listing one is not an endorsement.
- If no relevant active petition can be verified, link the jurisdiction's official petition process when useful or omit the petition. Never invent a campaign, imply that an expired petition is active or turn a general mailing-list form into a petition.
- Add other practical routes when they fit the evidence: a public meeting, consultation, records request, oversight complaint, audit tip line, election-information page or official submission process.
- Prefer first-party government, legislature, election-agency and oversight links. Record every action link and its last-check date in the case file, then recheck it immediately before publication.
- Keep action language lawful, non-partisan, specific and respectful. Do not direct readers to private addresses, personal accounts, uninvolved staff or people who are not responsible for the public decision.

Published, non-demonstration investigations fail schema validation unless they contain an action list with at least one official contact route. Fictional demonstrations are exempt from real-world civic-action links.

## Step-by-step reporting process

### 1. Frame a testable hypothesis

Write one neutral sentence describing what the records may establish. Also write the most serious conclusion the current evidence **does not** yet support.

Example:

> Testable: A department used litigation to challenge five lawful watchdog summonses, delaying an investigation.
>
> Not yet supported: The department litigated to conceal wrongdoing.

This boundary should control the search and the headline.

### 2. Check usefulness, current relevance and scope

- Search the site for earlier coverage and avoid duplicating a published file.
- Search current primary-source indexes for later decisions, corrections, appeals, responses or completed investigations.
- Review credible local reporting to identify facts and responses that need independent verification.
- Record what this article adds for Yukon readers. New evidence is valuable; a clearer account of a consequential existing record or an overdue check on a promise can also earn publication.

Do not claim a story is “undercovered” from intuition. Describe the evidence that has been overlooked or not assembled, or omit the coverage claim.

### 3. Create the source register and current-status plan

Use the source-register table in `docs/CASE_FILE_TEMPLATE.md`. Record issuer, version or date, retrieval time, pinpoint locators, authentication state, preservation location and evidentiary limits. A URL alone is not a source review.

Before relying on a historical condition, identify the authoritative place that could show whether it changed: a live docket, judgments index, registry, officeholder directory, policy page, current dataset, later decision or direct response. Record what was checked, when it was checked and what that check cannot establish. Schedule a fresh check close to publication.

### 3a. Begin direct reporting while gathering records

Map the questions a document cannot answer and who is positioned to answer them. Consider the responsible decision-maker, people affected, the records custodian and an independent specialist. Choose sources for knowledge and relevance, not a mechanical quota or partisan balance. An institutional spokesperson does not replace an affected person's account; one person's experience does not establish a population-wide effect.

Prepare proportionate requests early enough for replies to shape the thesis. Ask about present conditions, practical consequences, disputed facts, evidence of reform and the strongest alternative explanation. Seek records supporting answers. Use `docs/RESPONSE_REQUEST_TEMPLATE.md` for interviews and records inquiries as well as right of reply. Do not assume a request must wait until the article is drafted.

Agents own the preparation: verify the public contact and current role, check prior contact, write the exact message, choose a realistic deadline, include source links and create an addressed, unsent draft in `editor@urnotmadenough.ca`. Read it back to verify sender, recipient, subject, body, attachments and unsent state. Save the review packet and mailbox identifiers under `.unme-private/`; keep only a safe status summary in the tracked case file. If a connector is unavailable, finish the same packet locally and identify the missing access step rather than handing the user an outline to finish.

The user reviews all outreach and clicks Send. Agents must not send, schedule, resend, send a follow-up, submit a contact form or accept interview, embargo or background terms. Draft those next steps for review too. Publication authorization does not authorize contact. An explicit later user instruction may change this boundary; do not infer it from a general request to investigate.

Every investigation records what direct reporting was pursued and what it added or could not establish. Omitting direct reporting requires a specific rationale and editor-approved exception. Document availability alone is not a sufficient rationale. No-contact decisions for source safety or other concrete constraints must remain visible; historical launch exceptions are not standing exemptions.

### 4. Build the chronology before drafting

Create a dated table in the case file. Include:

- underlying events;
- requests, responses and decisions;
- procedural filings and interim rulings;
- final findings and remedies;
- response and appeal deadlines where known; and
- the date each live index or status page was checked.

Chronology catches conflated incidents, superseded rulings and impossible causal claims.

### 5. Build a claim ledger

For every claim likely to appear in the title, description, summary or key-finding boxes, record:

- exact proposed wording;
- evidence state;
- source and pinpoint locator;
- whether the source is a finding, party submission or reported statement;
- contrary evidence or a limiting fact; and
- safe wording if the proof is incomplete.

No headline claim should exist only in the prose draft.

Create a reader-action inventory beside the claim ledger. For each contact, petition or process, record the official or sponsoring organization, URL, purpose, geographic relevance, status or deadline, last-check date and any privacy or endorsement caveat.

### 6. Separate proceedings and people

When records concern similar events, explicitly test whether they involve the same requester, contract, incident, employee, time period and legal question. If the public record does not establish identity, say they are separate matters and do not imply otherwise.

Keep institutional and personal responsibility distinct. A department's position is not automatically the position or misconduct of every named employee.

### 7. Stress-test the thesis

Before writing, answer:

- What is the strongest lawful or innocent explanation?
- Did an interim ruling favour the criticized party?
- Did the final decision grant that party any technical or substantive point?
- Did the decision-maker expressly decline to rule on anything important?
- Is a recommendation non-binding?
- Can the finding be appealed or reviewed?
- Is the cited expense, delay or harm tied to this matter alone or to several matters?
- Is a number gross, net, authorized, spent, recoverable or merely estimated?

If the thesis survives only by omitting one of those answers, discard or narrow it.

Record the tests, searches, contrary records and effect on the thesis in the case file's disconfirming-evidence section. “No contrary evidence found” is not sufficient without a description of where and how it was sought.

### 8. Draft around the reader's questions

Use a flexible structure, not a mandatory sequence of boilerplate headings:

1. **Frontmatter and fast findings:** schema-valid metadata, 2–4 concise findings, verified civic actions, sources and an evidence-backed Ledger state. The layout renders summary and actions automatically.
2. **What happened, to whom and why it matters:** begin with the consequential finding and its concrete stakes. Include the central qualification before a reader can reasonably draw a false conclusion.
3. **How we know, and what the other account explains:** present the decisive evidence, useful chronology and strongest relevant response. Explain which facts support a criticism and which limit it. Give direct reporting its proper evidentiary weight.
4. **What happens next:** identify the responsible actor, answerable unresolved question, next decision or measurable commitment. End when the reader understands the stakes and the remaining uncertainty.
5. **Sources and reporting status:** make central documents easy to inspect and disclose material reporting limits, actual response status and update history. Put extended methods or calculations here only when readers benefit from them.

These are functions to satisfy, not five required headings. A Brief may meet them in a few paragraphs. Do not add a generic “what was not decided” section to every article; state the relevant limit where it changes the meaning. Do not repeat the findings box in successive introductory paragraphs.

Use `KeyFinding` sparingly for decisive propositions. Use `EvidenceBox` to make evidence state explicit. Frontmatter `sources` are rendered automatically, so body document links should be reserved for central records rather than every citation.

### 9. Write the title and description last

The title may be forceful, but each verb must be proved by the strongest source. Prefer precise actions such as “filed,” “withheld,” “rejected,” “dismissed” or “found” over motive words such as “hid,” “targeted” or “covered up.”

The description should contain the strongest finding and its most important qualification. Do not make the reader reach the final section to learn that the underlying allegation was never adjudicated.

### 10. Complete right of reply and track actual contact

Prepare each request and delivery log from `docs/RESPONSE_REQUEST_TEMPLATE.md`, storing completed working copies outside Git. Add only a publication-safe status summary to the tracked case file. Anyone facing material criticism should receive:

- the central factual proposition;
- the primary records supporting it;
- concise, answerable questions;
- a reasonable deadline stated with date, time and timezone; and
- an invitation to identify errors or provide supporting records.

Ask the institution to separate factual corrections, legal position and policy explanation. Ask whether an appeal or review has been filed. Request itemized costs when expense is relevant.

Verify the recipient and contact channel from an official source. Set a deadline that accounts for urgency, question complexity, working hours, holidays and timezone; ordinarily allow at least five full business days for a substantive non-urgent request. Record a send-by date and refresh the deadline if approval is delayed. Preserve the exact message, actual send/delivery evidence, follow-ups, full response and supporting records. Use the agent-prepared, human-send procedure in step 3a.

Use explicit states: **prepared locally**, **mailbox draft ready for review**, **sent by editor**, **delivery failed**, **awaiting response**, **response received**, **declined**, or **deadline passed without response**. A draft deadline does not start a response clock. Approval, a saved draft and a successful send are different events. Verify sending from mailbox evidence before changing the case-file status; distinguish successful transmission from confirmed delivery or reading.

For an already published story, say that it is published, link it, identify this as the first direct inquiry when applicable, invite corrections and ask about current status. Never describe later contact as prepublication right of reply. Preserve the original publication exception and dates. Add an article update or correction only when warranted and verified; preparing a draft is not a new substantive development.

Do not use `ResponseBox` until a request was actually sent. If delivery fails, do not describe the subject as having received an opportunity. If no response arrives, say when and how the request was made and that the deadline passed. Independently check corrective facts where possible and accurately include explanations that weaken or complicate the thesis.

### 11. Run the hostile read and make a readiness decision

Use the case-file checklist to review the complete package as:

- the criticized subject, looking for omitted context and unfair implication;
- a skeptical lawyer, looking for unsupported defamatory meaning, privacy harm, bans, sealed material and ambiguous attribution; and
- an ordinary reader, looking for a headline, summary, image, SEO description or action prompt that overstates the underlying evidence.

This review is an editorial risk control, not a substitute for qualified legal advice when the stakes require it. Record the issues found, changes made and whether specialist review was obtained or considered unnecessary.

Write the standardized readiness decision in the case file. “Ready” must state the current thesis, strongest complication, unresolved gaps, response status, current-status result, exceptions and named approval. Do not silently treat an unchecked box as inapplicable.

### 12. Pass the publication gates

Keep `draft: true` until all applicable gates are recorded in the case file:

- the case file follows `docs/CASE_FILE_TEMPLATE.md` and identifies its current stage;
- source-register entries identify version, retrieval, locators, authentication and limits;
- every title and findings-memo claim appears in the claim ledger;
- the 30-second summary contains 2–4 concise, ledgered findings and preserves the central limit;
- the opening explains who is affected and the concrete consequence without inventing an experience or harm; a reader can explain the point in two sentences;
- civic actions include an official representative or government contact route, are jurisdictionally relevant and have current verification dates;
- petition status, sponsorship, deadline and data-collection caveats were checked when a petition is listed;
- final versions of primary records were checked;
- allegations and party submissions are attributed;
- the strongest response is included fairly;
- direct reporting and its effect on the account are documented, or the editor approved a specific exception;
- a fresh right-of-reply opportunity was provided, or a documented editor approved an exception;
- appeal, review, publication-ban and correction status were checked;
- privacy and source-safety issues were reviewed;
- the legal, privacy and fairness hostile read was completed and recorded;
- direct links work;
- dates, names, figures, quotations and procedural descriptions received a second pass; and
- formatting, type checking and a production build pass.
- the initial Ledger status, public summary and checked date are supported by a current authoritative check.

Only then record the readiness decision, add matching `publicationReview` frontmatter and change `draft` to `false`. The build rejects a published production investigation without that approval metadata. Never invent a review status, approver, response event or exception. Publishing or pushing to a remote repository still requires the user's explicit direction.

## Court-reporting checklist

For a judgment-based investigation, record separately:

- court, style of cause, neutral citation, file number, judge and decision date;
- parties and which party made each argument;
- procedural posture: motion, interim ruling, trial, judicial review, appeal or costs decision;
- legal issue, legal test, material findings, remedy and disposition;
- concessions and points each side won;
- matters expressly not decided;
- publication bans, sealing orders or anonymization requirements;
- appeal route, publicly visible appeal status and the limits of that check; and
- any later correction, supplementary reasons or costs order.

“The court recorded” is not always equivalent to “the court found.” Read the paragraph in context and identify whether it is background, an agreed fact, a party's submission or the judge's analysis.

## Technical procedure for Codex

When directed to create an article:

1. Read `AGENTS.md`, this file, `src/content.config.ts`, the editorial component interfaces and one current production article.
2. Inspect the working tree and preserve unrelated changes.
3. Research current sources. Treat supplied claims as leads and verify them independently.
4. Copy or update `docs/CASE_FILE_TEMPLATE.md` first. Build the source register, chronology, claim ledger, current-status checks, disconfirming-evidence record and reader-action inventory there.
   Prepare direct-reporting questions and verified mailbox drafts while research continues. Give the editor the complete review packet; do not send the messages. Reconcile actual replies before the readiness decision.
5. Add one MDX file with `format`, the concise `summary`, verified `actions` and an evidence-backed initial `ledger` state. Ordinary Dossier or Brief publication should not require application-code changes.
6. Reuse existing components and schema fields. Do not add dependencies for article styling.
7. Run:

   ```sh
   npm run format
   npm run check
   npm run build
   npm run validate:build
   ```

8. Inspect the generated article, including its summary, civic-action links, source list, tables and narrow-screen behavior when layout changed.
9. Copy the standardized readiness/handoff fields from the case file into the final report. Do not claim publication unless the site was actually deployed and the live URL was verified.

## Publication and post-deployment verification

After every editorial gate is satisfied, publication still requires explicit user authorization. Then:

1. Fetch the remote branch and reconcile newer work without discarding unrelated changes.
2. Recheck sources whose status can change, all civic-action links and every time-sensitive statement.
3. Record the completed readiness decision and editor approval in the case file.
4. Add `publicationReview` frontmatter with the matching case-file path, approver, approval date, right-of-reply state, fairness-review state and final fact-check state.
5. Change `draft` to `false`, run formatting, diagnostics and a production build, and inspect the generated page at desktop and 320px mobile width.
6. Commit and push only the intended files, then monitor the configured deployment to completion.
7. Verify the live URL returns success and check its canonical URL, Dossier or Brief desk entry, Archive entry, Ledger entry, RSS entry, sitemap inclusion and critical source/action links.
8. Record the commit SHA, deployment run, live URL, verification time and any failure or rollback in the case file.

A successful local build is “ready to deploy,” not “published.” A successful deployment without a reachable, correct article URL is a deployment incident, not completed publication.

## Naming conventions

- Article: `src/content/investigations/<descriptive-kebab-case>.mdx`
- Case file: `docs/case-files/<same-slug>.md`
- Slug: durable subject, not a date or click-driven phrase
- Author: use the real byline if supplied; otherwise use `UNME Editorial Desk`
- Dates: ISO `YYYY-MM-DD` in frontmatter; spelled-out dates in prose

## Updating a published investigation

- Verify the new development against a primary source.
- Update the Ledger checked date, status and plain-language summary when the outcome changes, even if the article does not require substantial revision.
- Update `updatedDate`.
- Add an `UpdateNote` explaining the substantive addition.
- Use `CorrectionNote` for factual corrections and state what changed.
- Preserve the earlier record when context is necessary; never silently reverse a material claim.
- Re-run the claim ledger and publication gates for the changed sections.
- If a Brief has grown into a Dossier, change `format` only after the case file records the new scope and the expanded article passes the full gates.

## Amendment record

Material workflow changes are recorded in `docs/WORKFLOW_AMENDMENTS.md`.
