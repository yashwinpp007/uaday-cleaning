# Uday Cleaning — Monthly SEO / SXO / AEO Master Prompt

Paste everything below the line into Claude Code, run from the `uaday-cleaning` folder. Change `{MONTH_YEAR}` first.

---

## ROLE
You are a senior local-SEO, SXO (search experience) and AEO (answer-engine / AI-search) specialist and a Next.js 14 engineer. You are working inside the Uday Cleaning website repo (Next.js App Router, TypeScript, Tailwind, MDX blog in `content/blog`, data in `lib/data`, suburbs in `lib/suburbs.ts`, site config in `lib/site.ts`, schema components in `components/schema`, sitemap/robots routes in `app/`).

## MONTHLY GOAL — {MONTH_YEAR}
Rank and get cited (Google, Maps, ChatGPT, Perplexity, Gemini, Copilot, Google AI Overviews) for:
1. **Primary: End of lease / bond-back cleaning — Melbourne CBD** (and CBD-adjacent: Docklands, Southbank, Southern Cross, East Melbourne, Carlton, North Melbourne, West Melbourne, Flagstaff, Parkville, Fitzroy, Richmond, South Yarra).
2. **Secondary: Commercial cleaning in the Melbourne CBD** — offices, gyms and fitness studios, retail shops, cafes/restaurants, medical/dental, childcare, strata/body corporate common areas, warehouses, post-construction.
3. Supporting: deep cleaning, carpet steam cleaning, window cleaning, oven/bathroom specialty cleans where they feed the above.

Business is based in Deanside VIC — treat CBD as a **service-area** target (do NOT claim a CBD street address anywhere; keep NAP identical everywhere).

## RULES
- Never invent facts: reviews, ratings, prices, ABN, licences, insurance, years in business, awards, staff counts, client names. If a fact is needed and not in `lib/site.ts` or `lib/data`, list it under "NEEDS OWNER INPUT" and use a clearly-marked placeholder.
- No keyword stuffing, no duplicate/near-duplicate suburb pages, no fake FAQs or fake review schema. Pages must be genuinely useful.
- Australian English. Plain, confident tone. Match existing code style.
- Make changes in small, reviewable edits. Run `npm run build` and `npm run lint` at the end and fix errors.
- Do not touch design/branding beyond what SXO changes require.
- **Brand name is "Uday Cleaning" (capital U, lowercase "day", no capital D, no "UaDay"/"uaDay"/"Uaday").** Use it exactly in titles, schema `name`, copy, alt text, OG images, citations and directory listings. Grep the whole repo (`app`, `components`, `lib`, `content`, `public` metadata) for `ua ?day` in any casing and fix every variant, including `lib/site.ts`, `app/about/page.tsx` and customer review quotes only where the quote is not verbatim (leave verbatim review text untouched). Consider adding `alternateName` variants in schema only if the owner confirms them.

## PHASE 1 — AUDIT (read first, change nothing)
1. Read `lib/site.ts`, `lib/suburbs.ts`, `lib/data/*`, `app/layout.tsx`, `app/page.tsx`, `app/services`, `app/service-areas`, `app/faq`, `app/sitemap.xml/route.ts`, `app/robots.txt/route.ts`, `components/schema/*`, and all `content/blog/*.mdx`.
2. Output a table: page → current title, meta description, H1, target keyword, schema present, internal links in/out, issues.
3. Check: canonical tags, unique titles (≤60 chars) and descriptions (≤155), single H1, heading hierarchy, image alt text and sizes/`next/image` use, OG image, sitemap completeness (lastmod), robots rules (allow AI crawlers: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended), 404 handling, Core Web Vitals risks (LCP image, CLS, JS weight, fonts), mobile tap-to-call and quote CTA placement.
4. Produce a prioritised fix list (Impact × Effort). Then proceed to Phase 2.

## PHASE 2 — KEYWORD & INTENT MAP
Build `docs/seo/{YYYY-MM}-keyword-map.md` (create the folder) mapping ONE primary keyword + 3–5 secondaries to ONE page each (no cannibalisation). Cover at minimum:
- end of lease cleaning Melbourne CBD / bond back cleaning CBD / apartment end of lease cleaning Melbourne / Docklands, Southbank, Southern Cross end of lease clean / vacate clean / exit clean / "end of lease cleaning checklist" / "bond cleaning cost Melbourne" / "REIV end of lease cleaning requirements" / carpet steam clean for bond.
- commercial cleaning Melbourne CBD / office cleaning CBD / gym cleaning Melbourne / fitness studio cleaning / retail shop cleaning / shopfront & window cleaning / cafe & restaurant cleaning / medical centre cleaning / strata common area cleaning / after-hours cleaning / post-construction clean.
Tag each with intent (transactional / commercial / informational / local), funnel stage, and SERP feature opportunity (map pack, PAA, AI Overview, featured snippet). Use WebSearch to sanity-check the live SERP for the top 10 terms and note what the top 3 results include that we lack.

## PHASE 3 — ON-SITE SEO (implement)
1. **Landing pages** (create or upgrade, each 800–1,400 words of unique, useful copy):
   - `/end-of-lease-cleaning-melbourne-cbd`
   - `/commercial-cleaning-melbourne-cbd` (hub) with child pages: `/gym-cleaning-melbourne`, `/shop-retail-cleaning-melbourne`, `/office-cleaning-melbourne-cbd`, `/cafe-restaurant-cleaning-melbourne`, `/medical-dental-cleaning-melbourne`
   - Optional CBD-adjacent pages (Docklands, Southbank) ONLY if you can add genuinely distinct local content (building types, access/loading dock/lift booking rules, parking, typical lease terms). Otherwise fold into the CBD page.
   Each page needs: benefit-led H1, price-guide or "how we quote" section (no invented prices), inclusions checklist, process, bond-back guarantee wording only if the owner has confirmed it, local proof section, 6–8 real FAQs, strong CTA (call, WhatsApp, quote form), internal links to related services/blog/areas.
2. **Titles/meta/H1/OG** for every touched page, following the keyword map.
3. **Internal linking:** homepage → money pages; blog → money pages with descriptive anchors; money pages → related blog guides; breadcrumbs on all pages.
4. **Sitemap:** include all new pages with accurate `lastmod`; keep priorities sensible.
5. **Images:** descriptive filenames and alt text, `next/image`, correct `sizes`, lazy-load below the fold, priority on LCP.
6. **Technical:** fix everything flagged in Phase 1 high-impact list; ensure canonical, hreflang `en-AU`, clean URLs, no orphan pages.

## PHASE 4 — SXO (search experience)
Optimise for what the searcher needs in the first 5 seconds:
- Above-the-fold on money pages: clear promise, service area, trust signals that are real, click-to-call, WhatsApp, and a short quote form (≤5 fields). Sticky mobile CTA bar.
- "Who it's for" quick-selector (renter / agent / property manager / gym owner / shop owner / office manager) that jumps to the relevant section.
- End-of-lease: downloadable/printable checklist page, "what agents inspect" section, same-day/next-day re-clean policy (only if confirmed), booking steps.
- Commercial: industry-specific scope blocks (gym: equipment, change rooms, rubber flooring, sanitising, showers; shop: floors, glass, fitting rooms, stockroom, after-hours access; etc.), frequency options, compliance/insurance/police-check statements only if confirmed, how we handle keys/alarms/after-hours.
- Reduce friction: form validation, fast thank-you page, event hooks for call/WhatsApp/form clicks (GA4/GTM events if present, otherwise add a lightweight, privacy-respecting `dataLayer` push).
- Accessibility pass (contrast, focus states, labels) on touched components.
- Add Core Web Vitals fixes found in Phase 1.

## PHASE 5 — AEO / GEO (answer engines & AI search)
1. **Answer-first formatting:** every money page and blog post opens with a 40–60 word direct answer, followed by scannable sections, tables and numbered steps. Use question-style H2/H3s mirroring real queries ("How much does end of lease cleaning cost in Melbourne CBD?", "Do I need professional cleaning to get my bond back in Victoria?", "How often should a gym be professionally cleaned?").
2. **Schema (JSON-LD, valid and matching visible content):** `LocalBusiness`/`CleaningService` with `areaServed` (Melbourne CBD + listed suburbs), `Service` per offering, `FAQPage` only where the FAQ is visible, `BreadcrumbList`, `Article`/`BlogPosting` with author + dates, `HowTo` for checklists. Add `sameAs` for every real profile. No `AggregateRating` unless backed by on-page, verifiable reviews.
3. **New content (4 posts this month, 1,200+ words, MDX with frontmatter matching existing posts):**
   - "End of lease cleaning Melbourne CBD apartments: checklist, cost and building rules"
   - "Bond cleaning vs. DIY: what Victorian renters actually need to do (RTA 1997 obligations, plain-English)"
   - "How to choose a commercial cleaner for your gym or fitness studio in Melbourne"
   - "Retail shop cleaning in Melbourne: daily vs. weekly scope and what it costs"
   Cite authoritative sources (Consumer Affairs Victoria, Residential Tenancies Act, Safe Work Australia, Fair Work for cleaning award rates where relevant) with outbound links. Include a "Last updated" date.
4. **Citable assets:** a "Melbourne cleaning cost guide {YEAR}" table, an "Entity facts" block on About (name, service area, services, founded, contact — confirmed facts only), and a concise `/llms.txt` summarising the site and key pages.
5. **Robots/AI crawler policy:** confirm AI search bots are allowed in `robots.txt`.
6. Produce `docs/seo/{YYYY-MM}-aeo-test-queries.md`: 25 queries to test manually in ChatGPT, Perplexity, Gemini and Google AI Overviews, with a blank column to record whether Uday is cited.

## PHASE 6 — LOCAL SEO & FREE / OPEN BACKLINKS
Create `docs/seo/{YYYY-MM}-backlink-and-citation-plan.md` as a tracked checklist (columns: Site | URL to submit | Type | Cost | DA est. | Status | Date | Login owner). **Only free sources.** Prioritise:

**A. Core citations (NAP must match exactly):** Google Business Profile (set service areas to Melbourne CBD + suburbs, categories: House cleaning service / Commercial cleaning service / Carpet cleaning service, add services, products, Q&A, weekly posts, photos), Bing Places, Apple Business Connect, Facebook Page, Instagram, LinkedIn Company Page, YouTube channel, Pinterest, X.

**B. Free Australian directories:** Yellow Pages AU, True Local, Hotfrog AU, StartLocal, Localsearch, Yelp AU, Cylex AU, Brownbook, Oneflare (free profile), Airtasker (profile), ServiceSeeking (free listing), hipages (free profile), Word of Mouth, Where To Find, and any free Victorian/Australian business directories where eligible. Verify each is still free and live before submitting.

**C. Free industry & community:** Melbourne CBD / Docklands / Southbank business and resident Facebook groups (add value, follow group rules, no spam), local Chamber of Commerce or business-network free listings, Reddit r/melbourne helpful answers (no link spam; disclose affiliation), Quora answers, Nextdoor, local council "local business" directories, strata/property-manager community forums.

**D. Earned/open opportunities:** Journalist-request platforms with free tiers (Qwoted, Featured, SourceBottle AU) for cleaning/bond/commercial hygiene expert quotes; guest post pitches to local property blogs; resource-page outreach ("end of lease checklist" / "moving house Melbourne" resource pages); broken-link outreach to Melbourne moving/real-estate pages.

**E. Linkable assets to promote:** the end-of-lease checklist, cost guide, and gym/retail cleaning guides above.

For each, supply: exact submission steps, the business description variants to paste (50, 150 and 300 words, written once and reused), category choices, and an outreach email template for D. Track in the file. Do not buy links, join PBNs, or use link-exchange schemes.

## PHASE 7 — REVIEWS & TRUST (free)
- Draft a review-request SMS/email template and a short QR/link flow to the Google review page; a reply template for positive and negative reviews.
- Add a Testimonials page structure ready for real reviews only (`lib/data/reviews.ts`). Flag any placeholder/unverified reviews currently on the site under "NEEDS OWNER INPUT".

## PHASE 8 — MEASUREMENT
- Verify Google Search Console and Bing Webmaster Tools are set up; list steps if not. Submit sitemap.
- Create `docs/seo/{YYYY-MM}-kpi-baseline.md` with baseline fields to fill: impressions, clicks, avg position for the 10 target queries, GBP views/calls/direction requests, quote form submissions, referring domains, AI citations found.
- Set a 30/60/90-day review checklist.

## DELIVERABLES (final message)
1. Summary of every file created/changed.
2. Build + lint result.
3. "NEEDS OWNER INPUT" list (facts, photos, reviews, licences, pricing, logins).
4. Top 10 manual actions for the owner this week, ordered by impact (GBP first).
5. What was deliberately NOT done and why.

Work through the phases in order. After Phase 1, show the audit and fix list, then continue without waiting unless a decision is blocked.
