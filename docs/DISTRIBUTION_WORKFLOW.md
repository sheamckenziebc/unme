# Distribution workflow

**Status:** Internal operating procedure. Distribution is separate from reporting, right of reply and publication approval.

Use this workflow to place a published investigation in front of people who are genuinely likely to report on it, use it or be affected by it. It is designed for small, evidence-first campaigns, not mass publicity.

## Non-negotiable rules

- Agents prepare verified recipients, complete messages and unsent mailbox drafts. The editor reviews the exact story, recipient, message and timing, then clicks Send. Agents do not send or schedule distribution, follow-ups or acknowledgements. The timing below guides preparation, not automatic sending.
- Do not distribute a production investigation while it is a draft. An explicitly approved embargoed preview is the only exception.
- Keep right-of-reply requests in the editorial workflow. A promotional pitch never substitutes for a fair opportunity to respond.
- Send one-to-one messages with a specific reason for contacting that recipient. Do not use purchased lists, guessed addresses, bulk BCC or generic blasts.
- State the strongest supported finding and its most important limitation together. Do not imply exclusivity, wrongdoing, endorsement or a response that does not exist.
- Link to the canonical investigation and primary evidence. Avoid attachments unless the recipient requests them.
- Never attach confidential material, restricted records, private contact information or unpublished legal advice.
- Do not use tracking pixels, link shorteners or hidden read receipts. The publication's no-tracking promise applies to outreach too.
- Honour an opt-out immediately and maintain a suppression record in `.unme-private/`.

## Prepare the story packet

Before researching recipients, assemble one compact packet:

1. Canonical URL and publication date.
2. A one-sentence finding written with the same certainty as the evidence.
3. A one-sentence limit, uncertainty or fair counterpoint.
4. Why the finding matters now and to this audience.
5. Three to five primary-source links, with the controlling source first.
6. Plain-text excerpts of roughly 50, 150 and 300 words.
7. A social card or approved image, alt text and an image-rights note.
8. The corrections link, author/byline and permissions route.
9. A named person who can answer methodology or source-register questions.

Copy `docs/DISTRIBUTION_CAMPAIGN_TEMPLATE.md` into an ignored campaign folder under `.unme-private/distribution/`. Keep contact details, correspondence and send logs there; keep the reusable process in tracked documentation.

## Classify every recipient

| Lane                              | Who belongs here                                                       | Appropriate ask                                                                                       |
| --------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| A — direct reporter               | A current reporter whose beat or prior work overlaps the exact records | Consider a follow-up, interview or independently reported story                                       |
| B — newsroom desk                 | A relevant local, regional, specialist or assignment desk              | Route the finding to the best editor or reporter                                                      |
| C — specialist or civic group     | A group with subject expertise or a public-education mandate           | Review or share if useful to its audience; offer the source packet                                    |
| D — affected community            | A government, Nation, community or constituency directly affected      | Informational courtesy; invite corrections or relevant public records, without asking for endorsement |
| E — named institution or watchdog | An official body that created, oversees or is discussed in the record  | Courtesy/corrections notice only; never present it as an amplifier                                    |
| F — republisher or collaborator   | An outlet with a genuine audience fit and editorial capacity           | Discuss excerpting, republication, translation or a future co-reporting arrangement                   |

Do not measure success by list size. Five well-matched recipients are usually more valuable than fifty weak matches.

## Verify leads

For each person or desk, record:

- current role, beat, outlet and location;
- the particular article, mandate or audience connection that makes the story relevant;
- a public professional address or official form, plus its source URL;
- the date checked, preferred language and recipient time zone;
- whether the page says not to send pitches or solicitations;
- any prior contact, correction, conflict or opt-out; and
- a fallback desk that does not duplicate the same newsroom on the same day.

Do not infer an address from a naming pattern. Recheck individual roles and addresses on the morning of a send; use the official desk when an individual's status is uncertain.

## Cadence

### T-1: approval and deliverability

- Complete the campaign record and fact-check the pitch against the published story.
- Open every story and source link in a private browser window.
- Confirm the page title, social image and excerpt rights.
- Confirm the sender name, signature, reply handling, SPF, DKIM and DMARC status.
- Approve each recipient and message individually.

### T0: direct reporters

- Send the best three to five one-to-one pitches before noon in each recipient's local time, unless the news cycle makes immediate delivery more useful.
- Keep the body under 200 words. Lead with beat relevance and the finding, not the publication's biography.
- Contact only one person per newsroom about the same story that day. If no individual is clearly current, use the desk.
- Do not send several unrelated investigations to one reporter on the same day. Assign the strongest fit and space other pitches by at least three business days.

### T+1 to T+3 business days: useful secondary routes

- Approach the most relevant specialist outlets, civic groups and affected communities.
- Tailor the ask to the recipient's role. A watchdog receives a source-led informational note; a community receives a respectful courtesy; neither receives a pseudo-press-release blast.
- Offer the excerpt or republication terms only where the outlet has a plausible audience and editorial use.

### T+3 to T+7 business days: one follow-up

- Follow up once, in the original thread.
- Add value: a newly available record, a sharper local connection, an updated status check or an easier source packet.
- If there is no new value, send no more than a two-sentence reminder.
- Stop after that unless the recipient replies or a material development changes the story.

### T+14: close and learn

- Mark the campaign closed, deferred or converted into an ongoing relationship.
- Record coverage, corrections, source inquiries, backlinks, republication requests and substantive civic use.
- Note which subject lines and relevance signals produced useful replies. Do not treat opens as a metric.

The 2026 Muck Rack survey supports this deliberately small approach: respondents preferred one-to-one email, short pitches and delivery before noon; irrelevant, promotional and mass-email pitches were common reasons for rejection. Its respondent pool is not Canada-only, so use it as directional evidence rather than a universal rule. See the [State of Journalism 2026 report](https://media.muckrack.com/documents/State_of_Journalism_2026_1.pdf).

## Message standard

Every pitch should answer, in this order:

1. Why this recipient?
2. What did the records establish?
3. What did they not establish?
4. Why is it timely for this audience?
5. Where can the recipient inspect the evidence?
6. What modest next step is being offered?

Use `docs/OUTREACH_TEMPLATES.md` as a starting point, then rewrite the first two sentences for the actual recipient. Plain text is preferred.

## Sole inbox routing

Until the publication adds role aliases, all editorial mail uses `editor@urnotmadenough.ca`. Begin new inbound and outbound subjects with a purpose label so one mailbox can be triaged reliably:

- `Tip —` for ordinary reporting leads;
- `Correction —` for factual challenges or correction requests;
- `Permission —` for excerpts, republication and translation; and
- a story-specific subject for reporter outreach.

Keep unlike matters in separate threads. Labels and filters may identify priority mail, but they must not auto-archive corrections, replies or permission requests. Ordinary email is not a secure or anonymous source channel.

## Replies and corrections

- A factual challenge or correction outranks campaign activity. Pause related outreach, preserve the message and follow `docs/EDITORIAL_WORKFLOW.md`.
- If a reporter requests unpublished records, confirm that redistribution is lawful and safe before sending them.
- Treat “off the record,” embargoes and background terms as unagreed until both sides explicitly accept them.
- Log promises and deadlines. Do not promise access to a source, interview or document that has not been secured.
- If a recipient asks not to be contacted, acknowledge once if appropriate, record the opt-out and stop.

## Canadian email baseline

Whether a particular journalism pitch is a commercial electronic message is fact-specific. Use the conservative baseline anyway:

- identify the publication and sender accurately;
- provide a functioning reply route and mailing/contact information appropriate to the organization;
- include a simple way to decline future pitches;
- document why any publicly posted work address is relevant to the person's role; and
- retain the source and date for any claimed consent or role-based basis.

The CRTC says commercial electronic messages generally require consent, sender identification and an unsubscribe mechanism. A conspicuously published address may support implied consent only when there is no statement against unsolicited messages and the message is relevant to the recipient's role. See the [CRTC FAQ](https://crtc.gc.ca/eng/com500/faq500.htm) and [implied-consent guidance](https://crtc.gc.ca/eng/com500/guide.htm). This workflow is operational guidance, not legal advice.

## Measurement without surveillance

Track outcomes manually:

- useful replies and continuing reporter relationships;
- independently published coverage and accurate citations;
- high-quality backlinks and republication requests;
- new public records, corrections or tips produced by the work;
- use by communities, hearings, legislatures, watchdogs or professional groups; and
- reader support attributable to a campaign when the reader volunteers that information.

Do not add visitor-level analytics merely to measure a campaign. Search-engine webmaster tools, aggregate server data and a manual impact log can answer the important questions without tracking readers across the web.

## Repeatable closeout

At the end of every campaign:

1. Update stale lead records and the suppression list.
2. Save only professional correspondence needed for accountability; remove needless personal data.
3. Add new republishing partners and their exact terms to the rights log.
4. Capture unresolved questions as future reporting leads, not promotional claims.
5. Schedule one later status check only when a record, decision or deadline makes it useful.
6. Record what should change in this workflow before the next investigation.
