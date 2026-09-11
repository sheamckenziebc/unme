# Growth roadmap

The immediate priority is strong, readable Yukon reporting with direct inquiries and visible follow-through. The publisher's first-year financial aim is $200 a month. Supporting subscriptions will fund the journalism itself; no separate paid information product is required.

## Operating principles

- Keep findings, source links, corrections and substantive follow-ups public.
- Explain what decisions mean for people, then show the evidence.
- Cover consequential Yukon issues across government, politics, companies, institutions and societal norms. Apply the same evidentiary standard to all.
- Prepare all outreach through complete, verified mailbox drafts; the publisher reviews and clicks Send.
- Preserve independence from subscribers, donors, sponsors and covered interests.
- Keep the publisher publicly low-profile while maintaining accurate private provider and business records.

## 1. Move production hosting to Cloudflare Pages

**Done:** Production is hosted by Cloudflare Pages with validation before deployment.

- [x] Keep Astro static output, MDX as the source of truth and strict build validation.
- [x] Run formatting, content/type checks, the static build and generated-site validation in the cloud build command.
- [x] Pin the runtime and connect the existing repository to the Pages project.
- [x] Use production branch `main`, command `npm run deploy:build` and output directory `dist`.
- [x] Validate the temporary `pages.dev` address and review DNS, mail and verification records.
- [x] Attach and verify the apex and `www` custom domains over HTTPS.
- [x] Check canonical URLs, assets, reporting routes, RSS, sitemap, robots and 404 handling.
- [x] Convert GitHub Actions to validation-only CI and document deployment and rollback.

## 2. Define supporting subscriptions

**Decision adopted September 11, 2026:** Readers support independent Yukon journalism because they value its quality and want it to continue.

> Support independent Yukon reporting that explains what happened, who it affects and what the evidence can prove.

- [x] Define the promise and public reporting boundary in [the product definition](PAID_PRODUCT_DEFINITION.md).
- [x] Replace the earlier paid Eagle Gold watch proposal with a [subscription implementation handoff](PAID_PRODUCT_HANDOFF.md).
- [x] Preserve the $200 monthly aim while distinguishing gross receipts from money remaining after costs.
- [x] State that support buys no editorial influence or protection from scrutiny.
- [ ] Confirm price, currency and the gross/net target when building checkout. CAD $5 monthly is a proposal, not an approved charge.

The old source map and fictional member-email specimen are inactive. Three paid pilot issues, a special weekly briefing promise and exclusive benefits are no longer launch prerequisites.

## 3. Strengthen the reporting before adding complexity

**Done when:** Future investigations use direct reporting, explain concrete consequences and meet the existing evidence and fairness gates.

- [x] Amend the workflow, templates and agent instructions for early direct reporting and human Send.
- [x] Prepare postpublication inquiries for the two published Yukon investigations.
- [ ] Publisher reviews and sends the prepared inquiries; agents verify actual sending and incorporate replies through the reporting workflow.
- [x] Require the opening to explain what happened, who is affected and why it matters.
- [x] Permit meaningful local failures and policy questions without requiring an extraordinary scandal or a criminal finding.
- [x] Adopt Yukon as the current geographic focus; withdraw the Waltham/Portage-du-Fort article from public routes at the publisher's direction.
- [ ] Use these standards in the next Yukon investigation and in substantive updates to existing work.

Government and corporate reporting share the same standard. Add typed entities, new schema fields or monitoring infrastructure only when an actual reporting need justifies them. They do not block supporting subscriptions.

## 4. Add the minimum subscription path when requested

**Done when:** A reader can understand the support offer, pay, receive a receipt, cancel and obtain help through a tested path.

- [ ] Verify current Canadian provider fees, available accounts, privacy practices and exports.
- [ ] Confirm the publisher account, price, currency, recurring interval and terms.
- [ ] Build one static support page with a hosted checkout and restrained links from the site.
- [ ] Publish accurate funding-independence, privacy, refund and cancellation information.
- [ ] Test payment success/failure, receipts, renewal settings, cancellation, refunds and data export.
- [ ] Obtain launch direction, deploy and verify the actual public path.
- [ ] Keep payment and supporter data outside the repository.

The publisher intends to build this soon. This roadmap does not itself activate payments, purchase services or authorize solicitations.

## 5. Maintain a reporting queue and follow-through

- [ ] Prioritize public records, unresolved questions, reader tips and decisions with tangible Yukon consequences.
- [ ] Preserve source provenance and current-status checks.
- [ ] Track actual inquiries, promised replies and unresolved gaps privately.
- [ ] Draft useful follow-ups for the publisher to send; never automatically contact sources.
- [ ] Use the Ledger for verified changes, with no manufactured update quota.
- [ ] Add monitoring only when the source and review process are defined.

## 6. Ask readers to support the work after checkout is ready

- [ ] Publish a plain support invitation linked to work readers can evaluate.
- [ ] Prepare any personal invitations as complete drafts for publisher review and Send.
- [ ] Ask readers what reporting they value and what remains unclear or underexamined.
- [ ] Track aggregate receipts, costs, cancellations, referrals and voluntary feedback without surveillance.

A 25-member group could be useful for learning, but it is not a required product-validation gate or proof of the $200 target. Do not promise reporting volume the newsroom cannot sustain.

## 7. Decide what earns expansion

Review reporting quality, practical usefulness, repeat support and actual costs. Improve coverage and reliability before adding paid tiers, organizational plans, jurisdictions or technology. Keep reporting decisions independent of who pays.

## Current focus

Prepare and complete direct reporting on the two Yukon investigations, apply the clearer writing standard, and keep the public publication focused on Yukon. The next commercial build is a simple supporting subscription when the publisher requests it.
