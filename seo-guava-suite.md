# SEO Plan — Guava Product Suite (10 blog posts)

_Last updated: 2026-09-10 · Site: https://www.thewhiteguava.in · Stack: Next.js 16 (`agenai-clone/`)_

## 0. Status of work already applied in code

| Item | State |
|---|---|
| 10 posts live in `blogPostList` → routed, prerendered, in `sitemap.xml` | ✅ done |
| `metaTitle` trimmed to ≤ 60 chars, keyword-front-loaded ("… You Own: Guava… vs …") | ✅ done |
| `SoftwareApplication` + `Offer` JSON-LD node per product post (`productSchema` field → `softwareApplicationSchema()`) | ✅ done |
| `BlogPosting` + `BreadcrumbList` + `FAQPage` JSON-LD | ✅ already emitted by `blogPostGraph()` |
| Internal links: each post links 3–4 siblings + service pages; footer has a Guava Product Suite nav on every page; `/services/ai-software-development#product-suite` grid; homepage `#services` card | ✅ done |
| `sitemap.ts`: product posts `priority 0.8`, `changeFrequency weekly`; blog index + services `lastmod` bumped | ✅ done |
| `public/llms.txt` — curated suite + services index for AI answer engines | ✅ done |
| `/guava` pillar page — hub for all 10 spokes, targets `own your business software` / `stop renting SaaS`; `CollectionPage` + `ItemList` (10 `SoftwareApplication`) + `FAQPage` schema; in nav ("Products"), footer, homepage, sitemap (priority 0.9) | ✅ done |
| No "Frappe" / "ERPNext" anywhere (brand rule) | ✅ verified |

## 1. What still needs a LIVE deploy (cannot be checked locally)

Run these once the 9 new posts are deployed to `thewhiteguava.in`:

1. **Google Search Console** — URL Inspection → Request indexing for each of the 10 URLs (list in §6), or just resubmit `sitemap.xml`.
2. **PageSpeed Insights / CrUX** — check LCP, INP, CLS on the heaviest posts (ERP, Lend — most embeds). The 7 interactive widgets per page are `'use client'` + framer-motion; watch INP and hydration cost. Consider `next/dynamic` with `loading` skeletons for below-the-fold embeds (architecture diagram, module explorer, lifecycle) so they don't block hydration.
3. **`/seo technical <url>`** and **`/seo page <url>`** per post — crawlability, render, meta, headings, links.
4. **`/seo audit https://www.thewhiteguava.in`** — full site health score with the new content included.
5. **`/seo geo <url>`** — AI-crawler access + passage citability for each post.
6. **`npm run indexnow`** (from `agenai-clone/`) — submits to Bing/IndexNow; only works against the deployed domain. Confirm `scripts/submit-indexnow.mjs` reads from the sitemap/`blogPostList` (it should pick the new URLs up automatically).
7. **Rich Results Test** (search.google.com/test/rich-results) on one product URL — confirm `SoftwareApplication`, `BreadcrumbList`, `BlogPosting` parse. (`FAQPage` no longer yields a SERP feature since May 2026 — keep it for entity/LLM context, don't expect rich results.)

## 2. What needs a paid / authed connector (not installed in this session)

- **Keyword volume + difficulty**: install the DataForSEO or Ahrefs extension, or authorize Keyword Tool Pro, then run `/seo dataforseo keywords` / `/seo ahrefs` against the keyword lists in §4 to get real MSV/KD and re-rank targets.
- **Backlink profile / competitor gap**: `/seo backlinks` (free tier: Moz + Bing + Common Crawl) once deployed.
- **AI visibility tracking**: `/seo seranking` or `/seo profound` to track whether ChatGPT/Perplexity/AI Overviews cite these pages over time.
- **GSC performance data**: `/seo google gsc` after ~2–4 weeks of impressions.

## 3. Keyword strategy — the pattern

Every category's commercial SERP is dominated by **listicles** ("N best X alternatives", "N open-source X"). WhiteGuava is not going to outrank G2/Capterra/vendor blogs for the head term `X software`. The winnable space is the **problem-aware long tail**, where intent is "I want to stop renting":

- `<category> you own` · `own your <category>`
- `one-time payment <category>` · `<category> one time cost` · `lifetime <category>`
- `self-hosted <category>` · `<category> on your own server` · `on-premise <category>`
- `<category> without per-user pricing` · `flat fee <category>` · `<category> no per seat`
- `<incumbent> alternative self-hosted` · `stop paying <incumbent>` · `<incumbent> too expensive`
- `<category> total cost of ownership` · `<incumbent> 5 year cost`

Secondary: `<category> AI` where AI is bundled not upsold.
The interactive cost calculator + comparison table are the ranking asset here — they answer the TCO query directly and are highly citable by AI engines.

## 4. Per-post keyword map

> Primary = the term the page should be _the_ answer for. Secondary = supporting H2/body. Questions = FAQ / PAA targets (already partly covered by each post's `faqs`).

### GuavaCRM — `/blog/one-time-payment-crm`
- **Primary:** one-time payment CRM · CRM you own
- **Secondary:** self-hosted CRM · CRM without per-user pricing · Salesforce alternative self-hosted · Zoho CRM alternative · CRM total cost of ownership
- **Long-tail:** CRM you buy once · CRM no monthly fee · own your CRM data · CRM flat fee unlimited users
- **Questions:** Is there a CRM you pay once for? · How much does Salesforce cost over 5 years? · Can I self-host a CRM with AI?
- **Competing pages:** Grow CRM, Perfex CRM, Sheetify, BottleCRM, "20 best open-source CRM" listicles.

### GuavaERP — `/blog/one-time-payment-erp`
- **Primary:** self-hosted ERP you own · one-time payment ERP
- **Secondary:** NetSuite alternative self-hosted · SAP Business One alternative · Dynamics 365 Business Central alternative · Odoo alternative · ERP without per-user pricing · ERP total cost of ownership
- **Long-tail:** ERP you buy once · own your ERP · ERP on your own server · NetSuite 5 year cost · ERP no per user fee
- **Questions:** What is the cheapest ERP alternative to NetSuite? · Can I own my ERP instead of subscribing? · How much does NetSuite cost for 10 users?
- **Competing pages:** ERPNext, Odoo Community, ERPClaw, WP ERP, "best NetSuite alternatives" listicles.

### GuavaHR — `/blog/one-time-payment-hr-software`
- **Primary:** HR software you own · HR software without per-employee pricing
- **Secondary:** self-hosted HRMS · BambooHR alternative · Workday alternative small business · flat fee HR software · HRMS total cost of ownership
- **Long-tail:** HR software one-time payment · HR system you buy once · self-hosted payroll software · HR software no per employee fee · own your employee data
- **Questions:** Is there flat-fee HR software for unlimited employees? · What is the best BambooHR alternative without per-employee pricing? · Can HR software be self-hosted?
- **Competing pages:** IceHRM, HR Cloud, HarmonyHR, Gusto's BambooHR-competitors guide, alternativeto lists.

### GuavaLearn — `/blog/one-time-payment-lms`
- **Primary:** self-hosted LMS you own · LMS without per-learner pricing
- **Secondary:** Docebo alternative self-hosted · TalentLMS alternative · LMS unlimited learners · one-time payment LMS · sell courses no transaction fee
- **Long-tail:** LMS you buy once · own your course platform · LMS on your own server · LMS flat fee unlimited users · corporate LMS no per user cost
- **Questions:** Is there an LMS with unlimited learners for a flat fee? · What is a self-hosted Docebo alternative? · Can I sell courses without a per-sale fee?
- **Competing pages:** Moodle, Forma LMS, Chamilo, OpenOLAT, TalentLMS/Docebo "alternatives" blogs.

### GuavaInsights — `/blog/one-time-payment-bi-dashboards`
- **Primary:** BI tool you own · self-hosted BI without per-seat pricing
- **Secondary:** Tableau alternative self-hosted · Power BI alternative · Looker alternative · BI with unlimited viewers · embedded analytics no per-view fee
- **Long-tail:** BI dashboards you buy once · own your analytics platform · self-hosted dashboard tool · BI no viewer licence · Tableau 5 year cost
- **Questions:** Is there a BI tool that doesn't charge per viewer? · What is a self-hosted Tableau alternative? · How much does Tableau cost per year?
- **Competing pages:** Metabase, Apache Superset, Redash, "Tableau alternatives" listicles.

### GuavaDesk — `/blog/one-time-payment-helpdesk`
- **Primary:** helpdesk you own · self-hosted helpdesk without per-agent pricing
- **Secondary:** Zendesk alternative self-hosted · Freshdesk alternative · Intercom alternative · helpdesk with AI included · helpdesk flat fee
- **Long-tail:** helpdesk you buy once · own your support data · self-hosted ticketing system · helpdesk no per agent fee · Zendesk too expensive
- **Questions:** Is there a helpdesk without per-agent pricing? · What is a self-hosted Zendesk alternative with AI? · How much does Zendesk cost with the AI add-on?
- **Competing pages:** FreeScout, osTicket, Zammad, UVdesk, "Zendesk alternatives" listicles.

### GuavaBuilder — `/blog/one-time-payment-website-builder`
- **Primary:** website builder you own · self-hosted website builder
- **Secondary:** Webflow alternative self-hosted · Wix Studio alternative · Framer alternative · website builder unlimited sites · export your website code
- **Long-tail:** visual website builder you host yourself · own your website builder · website builder no per-site plan · Webflow without seat pricing · CMS you own
- **Questions:** Is there a self-hosted Webflow alternative? · Can I own the code from a visual website builder? · Website builder with unlimited sites flat fee?
- **Competing pages:** Webstudio, Silex, WordPress+block editors, "Webflow alternatives" listicles.

### GuavaLend — `/blog/one-time-payment-loan-management`
- **Primary:** loan management software you own · loan servicing software no per-loan fee
- **Secondary:** TurnKey Lender alternative · LoanPro alternative · self-hosted loan origination software · lending software total cost of ownership · NBFC loan software India
- **Long-tail:** loan management software one-time cost · own your loan book data · self-hosted lending platform · loan software no per active loan charge
- **Questions:** Is there loan management software without a per-loan fee? · What is a self-hosted TurnKey Lender alternative? · Loan software for an NBFC that you own?
- **Competing pages:** Mifos/Fineract, "best loan management software" listicles, LoanPro's own alternatives blog.

### GuavaPlan — `/blog/one-time-payment-project-management`
- **Primary:** project management tool you own · project management without per-seat pricing
- **Secondary:** Asana alternative self-hosted · monday.com alternative · Basecamp alternative · project tool unlimited users flat fee · self-hosted project management
- **Long-tail:** project management you buy once · own your project data · project tool no per user cost · Asana too expensive for large team
- **Questions:** Is there a project management tool without per-seat pricing? · What is a self-hosted Asana alternative? · Project tool with unlimited users and a flat fee?
- **Competing pages:** OpenProject, Plane, Vikunja, Leantime, Taiga, "self-hosted project management" listicles.

### GuavaFramework — `/blog/one-time-payment-app-platform`
- **Primary:** low-code platform you own · self-hosted low-code platform
- **Secondary:** OutSystems alternative · Mendix alternative · Retool alternative self-hosted · low-code without per-user pricing · internal tools platform you host
- **Long-tail:** low-code platform one-time cost · own your app platform · self-hosted internal tools builder · low-code no per builder fee · app platform unlimited users
- **Questions:** Is there a self-hosted Retool alternative? · Low-code platform without per-user pricing? · Can I own the platform my internal apps run on?
- **Competing pages:** Budibase, Appsmith, ToolJet, NocoBase, "Retool alternatives self-hosted" listicles.

## 5. Internal-link matrix (target state)

Hub: create/keep a pillar. Options — (a) make `/services/ai-software-development#product-suite` the hub (done, links out to all 10), or (b) a dedicated `/guava` or `/blog/guava-product-suite` pillar post that ranks for `own your business software` / `stop renting SaaS`. **Recommended: build the dedicated pillar** — it captures the category-level query the 10 spokes can't.

Each spoke post should link:
- ↑ to the pillar (once built) with anchor "Guava Product Suite"
- → 3–4 sibling posts (done) — prefer the _adjacent workflow_ (ERP↔CRM↔Desk, HR↔Learn, Insights↔ERP, Builder↔CRM, Lend↔ERP, Plan↔Desk, Framework↔all)
- → the most relevant `/services/*` page (done)
- ← from the matching service page's `related` block (partly done — extend `services.ts` `related` where natural)

Also: link the original `/blog/one-time-payment-crm` (already indexed, most authority) **out** to the 3 highest-value new spokes (ERP, HR, Helpdesk) — done — so it passes equity to the new URLs.

## 6. URLs to submit for indexing

```
https://www.thewhiteguava.in/guava                                 (new — pillar)
https://www.thewhiteguava.in/blog                                  (updated)
https://www.thewhiteguava.in/blog/one-time-payment-crm             (updated)
https://www.thewhiteguava.in/blog/one-time-payment-erp             (new)
https://www.thewhiteguava.in/blog/one-time-payment-hr-software     (new)
https://www.thewhiteguava.in/blog/one-time-payment-lms             (new)
https://www.thewhiteguava.in/blog/one-time-payment-bi-dashboards   (new)
https://www.thewhiteguava.in/blog/one-time-payment-helpdesk        (new)
https://www.thewhiteguava.in/blog/one-time-payment-website-builder (new)
https://www.thewhiteguava.in/blog/one-time-payment-loan-management (new)
https://www.thewhiteguava.in/blog/one-time-payment-project-management (new)
https://www.thewhiteguava.in/blog/one-time-payment-app-platform    (new)
https://www.thewhiteguava.in/services/ai-software-development       (updated)
```

## 7. GEO / AI-answer-engine checklist (per post)

- [x] Comparison table with concrete list prices + "vs Guava" multiplier — the most citable asset
- [x] "What renting X is really charging you for" section — extractable claim block
- [x] FAQ block with direct-answer format
- [x] `SoftwareApplication` + `Organization` provider in JSON-LD
- [x] `llms.txt` entry
- [x] **"In short"** summary block immediately after the intro on all 10 posts (5-year rented cost vs one-time + server) — high value for AI Overviews + featured snippets
- [x] `robots.ts` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended

## 8. Suggested next actions, in order

1. Deploy the 9 new posts + the `/guava` pillar.
2. Submit §6 URLs (now including `/guava`) to GSC + run `npm run indexnow`.
4. Run `/seo page` + `/seo geo` per post, `/seo audit` site-wide.
5. Install DataForSEO or Ahrefs → validate the §4 keyword lists with real volume/KD, drop/keep targets.
6. Lazy-load below-the-fold embeds if INP regresses.
7. After 3–4 weeks: `/seo google gsc` to see which queries actually landed, then iterate H2s/FAQs toward the winners.
