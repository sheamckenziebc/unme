# Investigation case file template

Copy this file to `docs/case-files/<article-slug>.md` when a lead becomes a production investigation. Complete it as reporting progresses. Empty fields are visible work, not permission to invent an answer.

This tracked dossier is public by default. Use opaque source IDs and publication-safe summaries. Never place confidential identities, private contact details, unpublished legal advice, credentials, embargoed material or restricted records here. Keep sensitive working material under `.unme-private/<article-slug>/` or another approved secure location and reference it only generically.

## File control

**Working title:**

**Article slug:**

**Editor/reporting owner:**

**Case-file status:** Intake / Reporting / Right of reply / Final review / Ready / Published / Updating

**Opened:**

**Last evidence check:**

**Target publication date, if any:**

**Sensitivity notes:** Personal information, source safety, publication ban, sealed record, legal deadline or none identified.

## Intake and hypothesis

**Lead as received:**

**Public-interest reason to investigate:**

**Testable hypothesis:** One neutral sentence describing what records may establish.

**Defeat condition:** The fact or record that would materially weaken or disprove the hypothesis.

**Most serious conclusion not currently supported:**

**Jurisdiction, affected community and responsible decision-makers:**

## Scope and novelty

**Questions this investigation will answer:**

1.

**Questions outside scope:**

1.

**Earlier UNME coverage checked:**

**Relevant outside reporting checked:**

**What is genuinely new:**

## Source register

Assign an ID to every material source before drafting. Mark a source `lead`, `obtained`, `reviewed`, `superseded`, `unavailable` or `authentication pending`. If publication of the record or its location would create a legal, privacy or source-safety risk, use an opaque description and keep the record outside Git.

| ID  | Record and URL | Issuer / author | Primary or secondary | Date / version | Retrieved | Pinpoint locators | Preservation / archive | Status and limits |
| --- | -------------- | --------------- | -------------------- | -------------- | --------- | ----------------- | ---------------------- | ----------------- |
| S1  |                |                 |                      |                |           |                   |                        |                   |

## Current-status checks

Historical evidence does not establish present conditions. List the authoritative live indexes, dockets, registries, policy pages, officeholders, datasets or later records checked close to publication.

| Question | Authoritative place checked | Checked at | Result | What the check cannot establish | Recheck due |
| -------- | --------------------------- | ---------- | ------ | ------------------------------- | ----------- |
|          |                             |            |        |                                 |             |

## Chronology

Keep event dates distinct from filing, decision, release, retrieval and publication dates.

| Date and timezone if material | Event | Source ID and locator | Evidence state | Qualification |
| ----------------------------- | ----- | --------------------- | -------------- | ------------- |
|                               |       |                       |                |               |

## Claim ledger

Every title, description, fast-summary and key-finding claim must appear here. Add consequential body claims when the proof or wording could reasonably be disputed.

| Proposed wording | Intended placement | Evidence state | Source and locator | Finding, submission or statement? | Contrary evidence / limit | Approved wording |
| ---------------- | ------------------ | -------------- | ------------------ | --------------------------------- | ------------------------- | ---------------- |
|                  |                    |                |                    |                                   |                           |                  |

## Disconfirming-evidence record

Actively try to defeat the hypothesis. Record the strongest lawful or innocent explanation, contrary records, favourable rulings, alternative causes and failed searches. A blank section means the red-team pass is incomplete.

| Test or search | Evidence sought | Result / source | Effect on thesis or wording | Follow-up |
| -------------- | --------------- | --------------- | --------------------------- | --------- |
|                |                 |                 |                             |           |

**Strongest fair account of the criticized party's position:**

**What the criticized party won, reasonably argued or corrected:**

**What no competent authority found:**

## Reader action inventory

Use official and first-party links where possible. Do not imply that an outside petition or campaign is endorsed.

| ID  | Action and URL | Category | Responsible organization / sponsor | Geographic relevance | Status / deadline | Privacy or endorsement caveat | Checked at |
| --- | -------------- | -------- | ---------------------------------- | -------------------- | ----------------- | ----------------------------- | ---------- |
| A1  |                | Contact  |                                    |                      |                   |                               |            |

## Right-of-reply plan and delivery log

Prepare each request with `docs/RESPONSE_REQUEST_TEMPLATE.md`. Do not mark a request sent until delivery actually occurred.

| Recipient and role | Why response is required | Contact source verified | Authorized to send by | Sent at / channel | Deadline and timezone | Follow-up | Delivery evidence | Status |
| ------------------ | ------------------------ | ----------------------- | --------------------- | ----------------- | --------------------- | --------- | ----------------- | ------ |
|                    |                          |                         |                       |                   |                       |           |                   | Draft  |

## Response incorporation log

| Response received at | Respondent | Material correction or explanation | Supporting record | Article change | Verification result | Unresolved dispute |
| -------------------- | ---------- | ---------------------------------- | ----------------- | -------------- | ------------------- | ------------------ |
|                      |            |                                    |                   |                |                     |                    |

## Legal, privacy and fairness hostile read

This is an editorial risk review, not a claim of legal advice. Read the title, summary, action prompts and full article as a skeptical subject, lawyer and ordinary reader would.

- [ ] Each damaging factual implication is supported and appears in the claim ledger.
- [ ] Findings, allegations, submissions and the publication's own inferences are distinguishable.
- [ ] The strongest contrary evidence and response are prominent enough to be understood.
- [ ] The article avoids unsupported motive, guilt by association and collective blame.
- [ ] Names and personal details are necessary to the public-interest account.
- [ ] Publication bans, sealing orders, confidentiality duties and source-safety risks were checked.
- [ ] Quotations are accurate, contextual and no longer than needed.
- [ ] Headline, SEO copy, captions and fast-summary points do not overstate the body.
- [ ] Civic actions point to responsible public actors and do not invite harassment, threats or exposure of private information.
- [ ] A second reader checked dates, names, figures, links and procedural descriptions.

**Issues found and changes made:**

**Specialist legal review obtained or reason it was not required:**

## Publication gates

- [ ] Scope, hypothesis and defeat condition are recorded.
- [ ] Source register is complete and material sources are authenticated.
- [ ] Chronology is reconciled against primary records.
- [ ] Title, description, summary and key findings are approved in the claim ledger.
- [ ] Disconfirming-evidence pass is recorded and the thesis was narrowed or abandoned where necessary.
- [ ] Historical claims received a current-status check close to publication.
- [ ] Strongest contrary evidence and response are represented fairly.
- [ ] Fresh right of reply is complete, not applicable or covered by an approved exception.
- [ ] Appeal, review, correction, publication-ban and sealing status were checked where applicable.
- [ ] Reader actions and officeholder, petition or process links were rechecked.
- [ ] Legal, privacy and fairness hostile read is complete.
- [ ] Final fact check and copy edit are complete.
- [ ] `npm run format`, `npm run check`, `npm run build` and `npm run validate:build` pass on the final copy.
- [ ] Editor explicitly approves publication and the article contains matching `publicationReview` metadata.

## Exceptions

Do not erase an unmet gate. Record an exception here and point to it from the readiness decision.

| Gate | Reason publication should proceed | Risk and mitigation | Approved by | Date and timezone |
| ---- | --------------------------------- | ------------------- | ----------- | ----------------- |
|      |                                   |                     |             |                   |

## Final readiness decision and handoff

**Decision:** Not ready / Ready with no exceptions / Ready with documented exceptions

**Current thesis in one sentence:**

**Strongest complication:**

**Material unresolved questions:**

**Right-of-reply status:**

**Appeal, review and current-status result:**

**Exceptions relied on:**

**Approved by and date:**

**Final check results:**

## Publication and deployment record

Complete only after explicit authorization and actual deployment.

**Article changed to `draft: false` by:**

**Commit SHA:**

**Deployment run:**

**Live URL and first successful check time:**

**Canonical, index, RSS and sitemap checks:**

**Post-deploy link check:**

## Corrections and updates

| Date | New evidence or reported error | Verification | Correction / update made | Editor | Deployment |
| ---- | ------------------------------ | ------------ | ------------------------ | ------ | ---------- |
|      |                                |              |                          |        |            |
