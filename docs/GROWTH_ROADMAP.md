# Growth roadmap

This is the working execution list for turning UR NOT MAD ENOUGH into a durable, profitable accountability publication. The immediate target is a 25-member paid pilot that covers operating costs without putting core evidence behind a paywall.

## Operating principles

- Keep source documents, findings and corrections public.
- Sell saved time and sustained vigilance: monitoring, concise alerts, watchlists and useful synthesis.
- Preserve editorial independence from subscribers, donors, sponsors and covered interests.
- Expand from government oversight into corporate accountability without lowering the evidence standard.
- Keep the publisher publicly low-profile while maintaining the private identity, payment, tax and legal records required by service providers and law.

## 1. Move production hosting to Cloudflare Pages

**Done when:** both `urnotmadenough.ca` and `www.urnotmadenough.ca` serve a validated Cloudflare Pages deployment over HTTPS, and GitHub Pages is no longer the production host.

- [x] Keep Astro static output, MDX as the source of truth and the existing strict build validation.
- [x] Add one Cloudflare build command that runs formatting, content/type checks, the static build and generated-site validation.
- [x] Pin a supported Node.js version for reproducible cloud builds.
- [x] Connect the GitHub repository to a Cloudflare Pages project.
- [x] Configure the production branch as `main`, build command as `npm run deploy:build` and output directory as `dist`.
- [x] Deploy and validate the temporary `pages.dev` address before touching DNS.
- [x] Import and review every existing DNS record, including mail and verification records.
- [x] Delegate the domain to Cloudflare only after the DNS review passes.
- [x] Attach and verify the apex and `www` custom domains with HTTPS.
- [x] Confirm canonical URLs, assets, investigations, RSS, sitemap, robots and the 404 page on production.
- [x] Convert the GitHub Actions workflow from Pages deployment to validation-only CI.
- [x] Update deployment documentation and record a rollback path.

## 2. Define the first paid product

**Done when:** a prospective member can understand the promise in one sentence and three pilot issues demonstrate it.

- [ ] Choose one narrow launch watch where government and corporate conduct intersect.
- [ ] Define the free/public layer: evidence archive, dossiers, methodology, corrections and selected findings.
- [ ] Define the paid layer: timely alerts, watchlist changes, concise briefings and decision-useful synthesis.
- [ ] Set founding pricing at CAD $5 monthly and test a simple annual option.
- [ ] Produce three sample member briefings before asking anyone to pay.
- [ ] State what membership does not buy: influence, favorable coverage, suppressed findings or access to confidential material.

## 3. Extend the editorial model to corporate accountability

**Done when:** the content model and written policy can cover companies, subsidiaries, executives, regulators, contracts and ownership relationships without ad hoc code changes.

- [ ] Add typed entities and stable claim/source identifiers to the investigation schema.
- [ ] Support multiple sectors and jurisdictions per investigation.
- [ ] Generalize civic-action language into verified accountability actions appropriate to government and corporate subjects.
- [ ] Add a conflicts, holdings and no-trading policy for covered companies and sectors.
- [ ] Add funding, sponsor and subscriber-independence disclosures to the public site.
- [ ] Define correction, response and update procedures for corporate subjects.
- [ ] Test the expanded model with one evidence-backed corporate accountability brief before changing production dossiers.

## 4. Add the minimum viable revenue stack

**Done when:** a reader can subscribe, pay, receive the promised product, cancel and get support through a fully tested path.

- [ ] Select an email publication service and payment processor after checking Canadian pricing, tax handling, privacy and exportability.
- [ ] Create a plain-language membership page and checkout path.
- [ ] Publish terms, privacy, refund/cancellation and funding-independence disclosures.
- [ ] Configure double opt-in, welcome, receipt, failed-payment and cancellation messages.
- [ ] Complete test subscriptions, renewals, cancellations and subscriber-data exports.
- [ ] Keep subscriber and payment data out of the static-site repository.

## 5. Build the monitoring and evidence pipeline

**Done when:** recurring source changes reliably become reviewable leads with preserved provenance, without auto-publishing claims.

- [ ] Inventory the first watch's primary sources and update frequency.
- [ ] Add change monitoring for high-value public pages, filings, agendas and procurement sources.
- [ ] Establish durable source capture and citation practices for changing web records.
- [ ] Create a repeatable intake queue for tips, records and detected changes.
- [ ] Define the human review gate from detected change to alert or investigation.
- [ ] Add static full-text search only when the archive is large enough to justify it.

## 6. Recruit and run the 25-member pilot

**Done when:** 25 paying members have received at least four issues and there is evidence about retention and willingness to recommend.

- [ ] Build a list of 50 well-matched prospects: reporters, political actors, public-interest organizations and invested industry stakeholders.
- [ ] Invite an initial group personally with a sample briefing and a specific feedback request.
- [ ] Publish a public founding-member offer without scarcity or impact claims that cannot be substantiated.
- [ ] Send four consistent pilot issues on a declared schedule.
- [ ] Interview at least 10 members and non-buyers about usefulness, timing and missing coverage.
- [ ] Track conversion, paid retention, cancellations, opens, replies and referrals without invasive surveillance.

## 7. Decide what earns expansion

**Done when:** the next investment follows observed demand rather than feature speculation.

- [ ] Review pilot economics, including service fees, research time and revenue per issue.
- [ ] Identify which alerts or briefings changed a decision, saved time or triggered follow-up reporting.
- [ ] Continue, narrow, reprice or stop the first watch based on the evidence.
- [ ] Add organizational plans only after multiple organizations ask for team delivery, archives or procurement support.
- [ ] Expand to a second watch only after the first has a repeatable source map and production cadence.

## Current focus

Complete section 1, then choose the first launch watch in section 2. Do not buy or integrate the revenue and monitoring stack until that product decision makes the requirements concrete.
