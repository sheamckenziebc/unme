# Production investigation workflow

This is the operating procedure for creating or substantially updating a real UR NOT MAD ENOUGH investigation. It is written for both human editors and Codex. Read it together with `AGENTS.md` and the public methodology page.

The purpose is repeatability: a new article should be produced from a documented chain of evidence, not from the confidence or memory of the writer.

## The completion contract

For a new investigation, produce these three things:

1. A case file in `docs/case-files/` containing the chronology, claim ledger, source links, contrary evidence, reader-action inventory, response questions and open checks.
2. A production MDX draft in `src/content/investigations/` that follows the site's schema and editorial components, including the 30-second findings summary and verified civic actions.
3. A short handoff stating what was verified, what remains unresolved, whether comment was sought, whether an appeal or review is possible, and the results of `npm run format`, `npm run check` and `npm run build`.

Do not publish merely because the prose is finished. Keep `draft: true` until the publication gates in this document are satisfied or the editor explicitly accepts a documented exception.

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

### 2. Check novelty and scope

- Search the site for earlier coverage and avoid duplicating a published file.
- Search current primary-source indexes for later decisions, corrections, appeals, responses or completed investigations.
- Review credible local reporting to identify facts and responses that need independent verification.
- Note what is genuinely new: a finding, a document connection, a quantified pattern or an unanswered question exposed by the primary record.

Do not claim a story is “undercovered” from intuition. Describe the evidence that has been overlooked or not assembled, or omit the coverage claim.

### 3. Build the chronology before drafting

Create a dated table in the case file. Include:

- underlying events;
- requests, responses and decisions;
- procedural filings and interim rulings;
- final findings and remedies;
- response and appeal deadlines where known; and
- the date each live index or status page was checked.

Chronology catches conflated incidents, superseded rulings and impossible causal claims.

### 4. Build a claim ledger

For every claim likely to appear in the title, description, summary or key-finding boxes, record:

- exact proposed wording;
- evidence state;
- source and pinpoint locator;
- whether the source is a finding, party submission or reported statement;
- contrary evidence or a limiting fact; and
- safe wording if the proof is incomplete.

No headline claim should exist only in the prose draft.

Create a reader-action inventory beside the claim ledger. For each contact, petition or process, record the official or sponsoring organization, URL, purpose, geographic relevance, status or deadline, last-check date and any privacy or endorsement caveat.

### 5. Separate proceedings and people

When records concern similar events, explicitly test whether they involve the same requester, contract, incident, employee, time period and legal question. If the public record does not establish identity, say they are separate matters and do not imply otherwise.

Keep institutional and personal responsibility distinct. A department's position is not automatically the position or misconduct of every named employee.

### 6. Stress-test the thesis

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

### 7. Draft in the standard article anatomy

Use this order unless the evidence requires a clearer alternative:

1. **Frontmatter:** accurate title, plain-language description, date, authors, jurisdiction, topics, organizations, publication state, 30-second findings summary, civic actions, source metadata and SEO copy.
2. **Fast findings:** 2–4 plain-language points that state the result, consequence, contrary fact and central limit as applicable.
3. **What readers can do now:** verified official contact, petition and other relevant public-process links, rendered automatically from `actions`.
4. **Lead:** the most consequential confirmed fact, followed immediately by the central limit.
5. **Key finding:** one sentence a reader can verify in a primary record.
6. **What the records establish:** define the confirmed core and identify the decision-maker.
7. **Chronology or comparison:** show how the documents connect.
8. **The criticized party's case:** present its strongest argument before rebuttal.
9. **The finding or outcome:** distinguish reasons, order, remedy and any point the other side won.
10. **What was not decided:** bad faith, illegality, motive, damages, individual fault, appeal status or any other live limit.
11. **Broader context:** include patterns only when directly documented; label official but untested claims as alleged.
12. **Why it matters:** explain the public consequence without inflating the finding.
13. **Unresolved questions and next records:** convert outrage into answerable reporting tasks.
14. **Primary documents:** use `DocumentLink` for the records readers most need to inspect.
15. **Reporting status:** disclose source boundaries, response status and checks still required while the file remains a draft.

Use `KeyFinding` sparingly for decisive propositions. Use `EvidenceBox` to make evidence state explicit. Frontmatter `sources` are rendered automatically, so body document links should be reserved for central records rather than every citation.

### 8. Write the title and description last

The title may be forceful, but each verb must be proved by the strongest source. Prefer precise actions such as “filed,” “withheld,” “rejected,” “dismissed” or “found” over motive words such as “hid,” “targeted” or “covered up.”

The description should contain the strongest finding and its most important qualification. Do not make the reader reach the final section to learn that the underlying allegation was never adjudicated.

### 9. Request a response

Anyone facing material criticism should receive:

- the central factual proposition;
- the primary records supporting it;
- concise, answerable questions;
- a reasonable deadline stated with date, time and timezone; and
- an invitation to identify errors or provide supporting records.

Ask the institution to separate factual corrections, legal position and policy explanation. Ask whether an appeal or review has been filed. Request itemized costs when expense is relevant.

Do not use `ResponseBox` until a request was actually sent. If no response arrives, say when and how the request was made and that the deadline passed. Accurately include explanations that weaken or complicate the thesis.

### 10. Pass the publication gates

Keep `draft: true` until all applicable gates are recorded in the case file:

- every title and findings-memo claim appears in the claim ledger;
- the 30-second summary contains 2–4 concise, ledgered findings and preserves the central limit;
- civic actions include an official representative or government contact route, are jurisdictionally relevant and have current verification dates;
- petition status, sponsorship, deadline and data-collection caveats were checked when a petition is listed;
- final versions of primary records were checked;
- allegations and party submissions are attributed;
- the strongest response is included fairly;
- a fresh right-of-reply opportunity was provided, or a documented editor approved an exception;
- appeal, review, publication-ban and correction status were checked;
- privacy and source-safety issues were reviewed;
- direct links work;
- dates, names, figures, quotations and procedural descriptions received a second pass; and
- formatting, type checking and a production build pass.

Only then change `draft` to `false`. Publishing or pushing to a remote repository still requires the user's explicit direction.

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
4. Create or update the case file first, including the reader-action inventory.
5. Add one MDX file with the concise `summary` and verified `actions`. Ordinary article publication should not require application-code changes.
6. Reuse existing components and schema fields. Do not add dependencies for article styling.
7. Run:

   ```sh
   npm run format
   npm run check
   npm run build
   ```

8. Inspect the generated article, including its summary, civic-action links, source list, tables and narrow-screen behavior when layout changed.
9. Report the article path, publication state, material caveats, response status and check results. Do not claim publication unless the site was actually deployed.

## Naming conventions

- Article: `src/content/investigations/<descriptive-kebab-case>.mdx`
- Case file: `docs/case-files/<same-slug>.md`
- Slug: durable subject, not a date or click-driven phrase
- Author: use the real byline if supplied; otherwise use `UNME Editorial Desk`
- Dates: ISO `YYYY-MM-DD` in frontmatter; spelled-out dates in prose

## Updating a published investigation

- Verify the new development against a primary source.
- Update `updatedDate`.
- Add an `UpdateNote` explaining the substantive addition.
- Use `CorrectionNote` for factual corrections and state what changed.
- Preserve the earlier record when context is necessary; never silently reverse a material claim.
- Re-run the claim ledger and publication gates for the changed sections.

## Amendment record

Material workflow changes are recorded in `docs/WORKFLOW_AMENDMENTS.md`.
