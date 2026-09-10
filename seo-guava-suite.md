# SEO Plan — Guava Product Suite (10 blog posts)

_Last updated: 2026-09-10 · Site: https://www.thewhiteguava.in · Stack: Next.js 16 (`agenai-clone/`)_

## 0. Status of work already applied in code

| Item | State |
|---|---|
| 10 posts live in `blogPostList` → routed, prerendered, in `sitemap.xml` | ✅ done |
| DataForSEO keyword pull (vol + KD, 131 kw) → `seo-dataforseo-keywords.md` / `.csv` | ✅ done |
| `metaTitle` + `tags` on all 10 posts re-targeted to the DataForSEO volume terms (`self-hosted <cat>` + top `<incumbent> alternative`) | ✅ done |
| `SoftwareApplication` + `Offer` JSON-LD node per product post (`productSchema` field → `softwareApplicationSchema()`) | ✅ done |
| `BlogPosting` + `BreadcrumbList` + `FAQPage` JSON-LD | ✅ already emitted by `blogPostGraph()` |
| Internal links: each post links 3–4 siblings + service pages; footer has a Guava Product Suite nav on every page; `/services/ai-software-development#product-suite` grid; homepage `#services` card | ✅ done |
| `sitemap.ts`: product posts `priority 0.8`, `changeFrequency weekly`; blog index + services `lastmod` bumped | ✅ done |
| `public/llms.txt` — curated suite + services index for AI answer engines | ✅ done |
| `/guava` pillar page — hub for all 10 spokes, targets `own your business software` / `stop renting SaaS`; `CollectionPage` + `ItemList` (10 `SoftwareApplication`) + `FAQPage` schema; in nav ("Products"), footer, homepage, sitemap (priority 0.9) | ✅ done |
| `metaDescription` on all 10 posts rewritten keyword-first (`self-hosted <cat> / <incumbent> alternative you own …`) | ✅ done |
| Per-post dynamic OG + Twitter image (`blog/[slug]/opengraph-image.tsx`) — title + category + "One-time setup · You own it"; `articleSchema.image` points to it | ✅ done |
| In-body contextual internal links — each post links the `/guava` pillar + 3 workflow-adjacent siblings mid-article (new `[text](/path)` markdown support in `BlogPost.tsx`) | ✅ done |
| RSS feed at `/blog/feed.xml` (force-static), linked from `/blog` `<head>` | ✅ done |
| Blog `<title>` opts out of the `%s \| WhiteGuava` template (keeps the keyword in the SERP-visible span) | ✅ done |
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

## 2. Connector data

- **Keyword volume + difficulty**: ✅ pulled via DataForSEO REST API (2026-09-10) — see `seo-dataforseo-keywords.md` / `.csv`. §3–§4 below are rebuilt on that data. Re-pull quarterly.
- **Backlink profile / competitor gap**: `/seo backlinks` (free tier: Moz + Bing + Common Crawl) once deployed — or DataForSEO `backlinks/*` endpoints with the same credentials.
- **AI visibility tracking**: DataForSEO `ai_optimization/llm_mentions` (same key) to track whether ChatGPT/Perplexity/AI Overviews cite these pages over time.
- **GSC performance data**: `/seo google gsc` after ~2–4 weeks of impressions.

## 3. Keyword strategy — what the DataForSEO data changed

The "you own / one-time payment / no per-user / stop renting" phrases we originally led with have **~0 exact US search volume**. They are the *angle*, not the *target* — keep them in body copy, H2s and FAQs for semantic + AI-answer coverage, but do not put them in the title tag.

**Where the volume actually is** (US, avg monthly searches / DataForSEO keyword difficulty 0–100):

| Term type | Examples with real volume |
|---|---|
| `<incumbent> alternative` | freshdesk alternative **880 / KD 0** · power bi alternative **590 / KD 0** · monday.com alternative **480 / KD 0** · odoo alternative **210 / KD 0** · framer alternative **140 / KD 0** · zoho crm alternative **110 / KD 0** · looker / intercom / bamboohr alternative **90 / KD 0** · basecamp / budibase alternative **40 / KD 0** · outsystems / talentlms alternative **30 / KD 0** |
| `self-hosted <category>` | self-hosted crm **170 / KD 40** · self-hosted project management **140 / KD 62** · self-hosted lms **110 / KD 10** · self-hosted ticketing system **90 / KD 24** · self-hosted website builder **70 / KD 58** · self-hosted helpdesk **30 / KD 15** |
| category / TCO | **loan servicing software 390 / KD 8** (best pure opportunity) · one-time payment software 10 · self-hosted business software 10 · self-hosted payroll software 10 |

The `alternative` terms show KD 0 because few pages are *exact-match optimized* for them — but the live SERPs are listicle-heavy (G2, Capterra, vendor "alternatives" blogs), so real difficulty is moderate. A focused comparison page **with the live cost calculator + table** is a genuinely different result type and can rank, especially for the mid-volume ones.

**So each post now targets:** `self-hosted <category>` + the single highest-volume `<incumbent> alternative`, in the title, H1-adjacent copy, and one H2. "you own / one-time payment" stays as the differentiator throughout.

## 4. Per-post keyword map

> Primary = the term the page should be _the_ answer for. Secondary = supporting H2/body. Questions = FAQ / PAA targets (already partly covered by each post's `faqs`).

Full per-keyword volume/KD/CPC tables are in **`seo-dataforseo-keywords.md`**. Summary per post (primary = title target; the "angle" terms carry ~0 volume and live in body/H2/FAQ):

| Post | Title target (primary) | Supporting (H2 / body) | Angle terms (body / FAQ only) | Deployed `metaTitle` |
|---|---|---|---|---|
| **GuavaCRM** `/blog/one-time-payment-crm` | self-hosted crm (170/KD40) · zoho crm alternative (110/KD0) | salesforce alternative self-hosted · self hosted crm with ai | crm you own · one-time payment crm · crm without per-user pricing · crm total cost of ownership | `Self-Hosted CRM You Own: GuavaCRM (Zoho & Salesforce Alternative)` |
| **GuavaERP** `/blog/one-time-payment-erp` | odoo alternative (210/KD0) · self-hosted erp (20) | sap business one alternative (10/KD19) · dynamics 365 business central alternative · netsuite alternative self-hosted | erp you own · one-time payment erp · erp total cost of ownership (10) | `Self-Hosted ERP & Odoo Alternative You Own: GuavaERP` |
| **GuavaHR** `/blog/one-time-payment-hr-software` | bamboohr alternative (90/KD0) · self-hosted hr software | self-hosted payroll software (10) · flat fee hr software · workday alternative small business | hr software you own · hr software without per-employee pricing | `Self-Hosted HR Software & BambooHR Alternative You Own: GuavaHR` |
| **GuavaLearn** `/blog/one-time-payment-lms` | self-hosted lms (110/KD10) · talentlms alternative (30/KD0) | docebo alternative self-hosted · lms unlimited learners | lms you own · one-time payment lms · lms without per-learner pricing · corporate lms no per user cost | `Self-Hosted LMS You Own: GuavaLearn (Docebo & TalentLMS Alternative)` |
| **GuavaInsights** `/blog/one-time-payment-bi-dashboards` | power bi alternative (590/KD0) · self hosted business intelligence (10) | tableau alternative self-hosted · looker alternative (90/KD0) | bi tool you own · self-hosted dashboard tool · bi without per-seat pricing · one-time payment bi | `Self-Hosted Power BI Alternative You Own: GuavaInsights` |
| **GuavaDesk** `/blog/one-time-payment-helpdesk` | freshdesk alternative (880/KD0) · self-hosted helpdesk (30/KD15) | self-hosted ticketing system (90/KD24) · zendesk alternative self-hosted (10/KD48) · intercom alternative (90/KD0) | helpdesk you own · helpdesk without per-agent pricing · one-time payment helpdesk | `Self-Hosted Helpdesk & Freshdesk Alternative You Own: GuavaDesk` |
| **GuavaBuilder** `/blog/one-time-payment-website-builder` | framer alternative (140/KD0) · self-hosted website builder (70/KD58) | webflow alternative self-hosted · wix studio alternative (10) | website builder you own · website builder unlimited sites · export your website code · one-time payment website builder | `Self-Hosted Website Builder & Framer Alternative You Own: GuavaBuilder` |
| **GuavaLend** `/blog/one-time-payment-loan-management` | **loan servicing software (390/KD8)** — best pure opportunity in the set | self-hosted loan management software · loan origination software self-hosted · turnkey lender / loanpro alternative | loan management software you own · one-time payment loan software · nbfc loan software | `Loan Servicing Software You Own: GuavaLend (Self-Hosted)` |
| **GuavaPlan** `/blog/one-time-payment-project-management` | monday.com alternative (480/KD0) · self-hosted project management (140/KD62) | asana alternative self-hosted (10) · basecamp alternative (40/KD0) | project management tool you own · project management without per-seat pricing · own your project data | `Self-Hosted Project Management & monday.com Alternative: GuavaPlan` |
| **GuavaFramework** `/blog/one-time-payment-app-platform` | self-hosted low-code platform (10) · retool alternative self-hosted · budibase alternative (40/KD0) | outsystems alternative (30/KD0) · mendix alternative (10) · internal tools platform | low-code platform you own · one-time payment low-code platform | `Self-Hosted Low-Code Platform You Own: GuavaFramework (Retool Alternative)` |
| **Pillar** `/guava` | self-hosted business software (10) · one-time payment software (10) | own your business software · stop renting saas · saas alternative you own · buy software once (all ~0 vol — brand/AI-answer play) | — | (page `<title>`: _Guava Product Suite — Business Software You Own_) |

**Priority order by opportunity** (volume × achievability): 1) GuavaDesk (freshdesk alternative 880), 2) GuavaInsights (power bi alternative 590), 3) GuavaPlan (monday.com alternative 480), 4) GuavaLend (loan servicing software 390/KD8), 5) GuavaERP (odoo alternative 210), 6) GuavaCRM (self-hosted crm 170), 7) GuavaLearn (self-hosted lms 110), 8) GuavaHR (bamboohr alternative 90), 9) GuavaBuilder (framer alternative 140 but KD58 on self-hosted), 10) GuavaFramework (thin volume — leans on the AI-answer / brand play).

**Applied in code:** `metaTitle` + `tags` on all 10 posts rewritten to lead with the volume terms above (was leading with the ~0-volume "you own" phrasing).

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
- [x] Per-post OG/Twitter image (title + category) for AI-engine + social preview
- [x] RSS feed at `/blog/feed.xml` for aggregators / Discover ingestion
- [x] In-body contextual internal links (pillar + siblings) so crawlers/LLMs see the topic cluster

## 8. What's left — and it all needs the live site

The on-page / schema / internal-linking / GEO / feed work is **done in code**. Everything remaining requires the site deployed:

1. **Deploy** the 9 new posts + `/guava`.
2. **Index**: submit §6 URLs to GSC (or resubmit `sitemap.xml`); `npm run indexnow` for Bing.
3. **Verify**: Rich Results Test on one post URL (SoftwareApplication + BlogPosting + Breadcrumb); check the per-post OG image renders in a social debugger.
4. **Technical**: `/seo technical <url>`, `/seo page <url>` per post, `/seo audit` site-wide.
5. **Performance**: PageSpeed / CrUX — the heavy posts (ERP, Lend) have 7 client widgets; if **INP** regresses, wrap the below-the-fold embeds (`productArchitecture`, `productModuleExplorer`, `productLifecycle`) in `next/dynamic`.
6. **GEO**: `/seo geo <url>` per post; DataForSEO `ai_optimization/llm_mentions` (same key) for a citation baseline.
7. **E-E-A-T** (optional, needs your input): add a named author with a bio to the posts + `articleSchema.author` as `Person` — currently attributed to the Organization.
8. **After 3–4 weeks**: `/seo google gsc` → which queries actually landed → iterate H2s/FAQs toward the winners. Re-pull DataForSEO volumes quarterly.
