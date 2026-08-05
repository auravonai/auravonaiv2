# Keyword strategy & SEO architecture

**Status: every keyword in this document is an ESTIMATE.**

Read the next section before using any of it.

---

## 0. The data problem, stated plainly

The Ahrefs MCP is connected to this workspace but the account **cannot return
keyword or SERP data**. Verified across four API families on 2026-08-05:

| Endpoint | Result |
|---|---|
| `keywords-explorer-overview` | `Insufficient plan` |
| `keywords-explorer-matching-terms` | `Insufficient plan` |
| `serp-overview` (top-10 competitor analysis) | `Insufficient plan` |
| `subscription-info-limits-and-usage` | `Insufficient plan` |
| `public-domain-rating-free` | **works** — `auravonai.com` = **DR 0.0** |

Only the free unauthenticated endpoint responds, and Ahrefs removes
unauthenticated access to it on **2026-08-10**.

**Consequences, which are not negotiable:**

- No search volume, keyword difficulty, traffic potential, parent topic, or
  CPC figure appears anywhere in this repository. Not in this document, not in
  a code comment, not in a content module.
- The FAQ questions on every page were written from buyer intent and from what
  the pages actually answer. They are **not** Ahrefs "Questions" or People
  Also Ask exports, and are not labelled as such anywhere.
- No competitor top-10 teardown was performed. The competitive positioning
  below is reasoning about the market, not measurement of it.

A fabricated volume figure is worse than a missing one, because it looks
exactly like a real one and a five-year content plan gets built on it. Where a
number would normally go, this document gives the **reasoning** instead — which
is falsifiable, and which you can check against real data the moment the API
works.

**What to do when Ahrefs access is restored**, in order:

1. Run `keywords-explorer-overview` over the primary keyword column in §2.
   Expect several picks to be wrong; the ones targeting "AI development" head
   terms are the most likely to be unwinnable at DR 0.
2. Run `serp-overview` for the top 10 on each primary keyword and check the
   DR of the pages actually ranking. Any keyword whose top 10 is uniformly
   DR 60+ should be deferred, not attacked.
3. Re-run the cannibalisation review in §5 against real SERP overlap rather
   than against intent judgement.

---

## 1. Architecture, and why it changed

### 1.1 The problem the site had

The domain sold two unrelated businesses from one URL namespace:

```
/services/ai-agent-development        ← AI engineering
/services/meesho-account-management   ← marketplace admin
```

Neither a crawler nor a buyer can tell what this domain is for. Worse, the
navigation was generated from the marketing dataset, so **all 75 pages** —
including every AI engineering page — rendered "Digital Marketing",
"Flipkart", and "Meesho" in their chrome. Navigation appears in the internal
link graph of every URL, so the whole domain read as a marketplace-services
agency regardless of what any single page said.

It also created ten near-duplicate pairs competing inside one namespace:
`website-development` vs `web-application-development`, `devops-deployment` vs
`cloud-devops`, and so on.

### 1.2 What it is now

You confirmed both business lines are active, so the resolution is **separate
namespaces**, not retiring one:

```
/                          homepage
├── /services              AI & software hub        15 spokes
├── /digital-marketing     marketing hub            33 pages
├── /industries            sector hub                6 pages
├── /blog                  publication
│   └── /blog/category/*   7 topic hubs → 16 posts
├── /projects  /about  /contact  /payment
└── /privacy  /terms  /refund
```

Each family now has its own hub, its own navigation branch, and its own
cluster. They stop averaging each other's topical signal, and the ten
near-duplicate pairs are no longer competing because they sit in different
sections answering different intents.

**Why not 301 the marketing pages into the AI spokes** (the other option):
because you sell both. Redirecting a live revenue line into an unrelated page
destroys the pages that serve it. Separation preserves both and costs only the
34 redirects in §6.

### 1.3 Scalability

The Step-13 targets are met structurally, not aspirationally:

| Target | Supported by | Cost of adding one |
|---|---|---|
| 100+ services | `src/lib/services/*.ts` | one record |
| 500+ blog posts | `articles.ts` + `blog.ts` taxonomy | one record |
| Industry pages | `industries.ts` | one record |
| Location pages | not built — see §7 | — |
| 200+ tools | not built — see §7 | — |
| 50+ products | not built — see §7 | — |

Adding a service, industry, or blog category produces the page, the hub card,
the sitemap row, the breadcrumb, and every JSON-LD node automatically. Nothing
is registered in two places, which is what makes the ceiling structural rather
than a matter of discipline.

---

## 2. Keyword map — one page, one primary keyword

**Every entry is ESTIMATED.** The "why" column is the actual deliverable here:
it is the reasoning you can check, and it survives even when a specific pick
turns out to be wrong.

### 2.1 Hubs

| URL | Primary keyword (est.) | Why this term |
|---|---|---|
| `/` | AI development company | Buyer-shaped: "company" is who-to-hire intent, which is the transaction. Contested and hard at DR 0, but the homepage is the only page that should carry it. |
| `/services` | AI development services | Catalog intent — what to buy, not who to hire. Distinct enough from the homepage that they are not competing. |
| `/digital-marketing` | digital marketing services | The head term all eight categories specialise. Deliberately **not** "digital marketing agency", which would collide with the homepage's who-to-hire intent. |
| `/industries` | AI development for industries | Weak as a query; this page exists mainly to parent the six sector pages and give them a crawlable index. Ranking is secondary and expected to be poor. |
| `/blog` | (none — navigational) | A publication index that targets a keyword competes with the category pages beneath it. It is deliberately unassigned. |

### 2.2 Service spokes (15)

Unchanged from the previous architecture and re-verified in this build.

| URL | Primary keyword (est.) |
|---|---|
| `/services/ai-development` | AI development |
| `/services/ai-software-development` | AI software development |
| `/services/ai-consulting` | AI consulting services |
| `/services/ai-agent-development` | AI agent development |
| `/services/generative-ai-development` | generative AI development |
| `/services/custom-ai-development` | custom AI development |
| `/services/custom-software-development` | custom software development |
| `/services/saas-development` | SaaS development |
| `/services/web-application-development` | web application development |
| `/services/mobile-application-development` | mobile app development |
| `/services/api-development` | API development |
| `/services/cloud-devops` | cloud and DevOps services |
| `/services/ui-ux-design` | UI/UX design services |
| `/services/product-discovery` | product discovery |
| `/services/maintenance-support` | software maintenance and support |

### 2.3 Industry pages (6)

| URL | Primary keyword (est.) | Why |
|---|---|---|
| `/industries/fintech` | AI for fintech | Sector + capability is the shape of a real buyer query and is far less contested than the head terms. |
| `/industries/healthcare` | AI for healthcare | Same shape. The page leads with the regulatory boundary, which is what this buyer is actually screening for. |
| `/industries/logistics` | AI for logistics | Thin-margin sector where optimisation has a clear payback, so intent is unusually commercial. |
| `/industries/ecommerce` | AI for ecommerce | Overlaps the marketing practice's ecommerce pages — see §5.3. |
| `/industries/edtech` | AI for education | — |
| `/industries/real-estate` | AI for real estate | Document extraction is the concrete hook; the page leads with it. |

**Why industry pages at all:** a service page answers *what do you build*; an
industry page answers *have you built it for someone like me*, which is the
question that decides the enquiry. It also multiplies the catalog — 15 services
× 6 sectors is 90 honest intersections from 21 pages, because each sector page
links only the four or five services that genuinely apply.

**The risk, named:** industry pages are the classic doorway-page pattern when
they are one template with the sector name swapped in. Google names that
pattern explicitly. Every field in `src/lib/industries.ts` is written per
sector, and sections with nothing specific to say were left out rather than
padded. **Keep it that way** — the moment a seventh sector is added by copying
the sixth, the whole set becomes a liability.

### 2.4 Blog categories (7)

These are the cluster middle tier, and the thing the blog was missing entirely.

| URL | Primary keyword (est.) | Supports services |
|---|---|---|
| `/blog/category/ai-solutions` | AI solutions for business | ai-development, ai-agent-development, generative-ai-development, ai-consulting |
| `/blog/category/automation` | business process automation | ai-development, api-development, custom-software-development |
| `/blog/category/saas` | SaaS product development | saas-development, web-application-development, cloud-devops |
| `/blog/category/web-development` | web application development ⚠️ | web-application-development, api-development, cloud-devops |
| `/blog/category/mobile-apps` | mobile app development ⚠️ | mobile-application-development, api-development, ui-ux-design |
| `/blog/category/startup-tech` | startup tech stack | product-discovery, custom-software-development, saas-development |
| `/blog/category/search-marketing` | SEO for AI search | *(none — see §5.4)* |

⚠️ Two of these duplicate a service spoke's primary keyword. That is a known,
deliberate, and temporary state — see §5.2.

---

## 3. Topic clusters

The cluster is only real if all three links exist. Before this work, the third
did not exist anywhere on the site.

```
        /services/ai-agent-development          (commercial spoke)
                    ▲
                    │ 3. category → service
                    │
   /blog/category/ai-solutions                  (topic hub)
        ▲                    │
        │ 2. post → category │ 1. category → posts
        │                    ▼
   /blog/ai-agents-for-business-2026            (informational)
```

**What was missing and is now built:**

1. **Category hubs** — nothing on the site was *about* a topic. Sixteen posts
   sat in one directory as sixteen unrelated documents.
2. **Post → category links** — each post's category badge is now a link, so
   the hub earns internal links from the content it is a hub for.
3. **Category → service links** — the commercial half. A reader who has just
   finished an article on agent architectures is one click from the page that
   sells building one. This is the step usually skipped, and it is the one
   that converts informational traffic.

**Crawlability note:** `/blog`'s category filter is a row of buttons driving a
client-side filter. It changes no URL and creates no links, so a crawler saw
one page and the categories got nothing. A separate crawlable "Browse by
topic" row of real anchors was added alongside it. The filter stays for UX.

Verified in the build: **24 pages** now link to category hubs; before, zero
existed to link to.

---

## 4. Structured data

Every node is emitted from the same array that renders the visible content, so
marked-up text a visitor cannot see is structurally impossible rather than a
review item.

| Page type | Nodes |
|---|---|
| site-wide (BaseLayout) | `Organization`, `WebSite` |
| `/services` | `CollectionPage`, `BreadcrumbList`, `Service` (umbrella), `ItemList`, `FAQPage` |
| service spoke | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| `/digital-marketing` | `CollectionPage`, `BreadcrumbList`, `Service` (umbrella), `ItemList`, `FAQPage` |
| marketing page | `Service`, `BreadcrumbList`, `FAQPage`, `LocalBusiness` |
| `/industries` | `CollectionPage`, `BreadcrumbList`, `ItemList` |
| industry page | `WebPage`, `BreadcrumbList`, `Service` (+`audience`), `FAQPage` |
| blog category | `CollectionPage`, `BreadcrumbList`, `Blog` |
| blog post | `BlogPosting`, `BreadcrumbList` |

**Build-verified: 479 JSON-LD blocks across 89 pages, zero malformed.**

Two modelling decisions worth keeping:

- **`Organization` and `WebSite` appear once, site-wide.** A second
  `Organization` node reads to a parser as a second company.
- **Industry pages emit `Service` with `audience`, referencing spoke nodes by
  `@id`** rather than restating them. Same service, different sector — that
  distinction is what stops a parser reading six sector pages as six duplicate
  offers.

`LocalBusiness` remains on the 33 marketing pages only. Those genuinely are
local-intent services; the AI spokes sell remote engineering worldwide, and a
city-level service area there would contradict
`organizationSchema.areaServed: 'Worldwide'`.

---

## 5. Cannibalisation

### 5.1 Resolved by the namespace split

Ten near-duplicate pairs previously competed inside `/services/*`:

| Was competing | Now |
|---|---|
| `website-development` vs `web-application-development` | different sections, different intent |
| `web-services` vs `web-application-development` | " |
| `ecommerce-development`, `custom-ecommerce-development` vs `web-application-development` | " |
| `devops-deployment`, `website-hosting` vs `cloud-devops` | " |
| `business-consulting`, `business-strategy` vs `product-discovery`, `ai-consulting` | " |
| `graphic-design`, `logo-design`, `brand-identity-design` vs `ui-ux-design` | " |

They are no longer duplicates competing for one query — they are a marketing
service and an engineering service that happen to share a word.

### 5.2 Open: two blog categories duplicate a service keyword

`/blog/category/web-development` and `/services/web-application-development`
carry the same estimated primary keyword, as do the mobile pair. This is
**deliberate and temporary**: with only two posts in each category, giving them
a distinct informational keyword would be inventing demand I cannot measure.

**Resolution, once Ahrefs works:** move each category to an informational
variant the service page should not target — for example
"web application architecture" and "cross-platform app development" — leaving
the commercial term to the spoke. Do not resolve this by guessing.

### 5.3 Open: `/industries/ecommerce` vs the marketing ecommerce pages

`/industries/ecommerce` (engineering for retail) and
`/digital-marketing/ecommerce-development` (building stores) are adjacent. The
intents differ — replatforming vs storefront build — but the SERPs likely
overlap. Watch in Search Console; do not pre-emptively merge.

### 5.4 Accepted: `/blog/category/search-marketing` has no related services

The one category with an empty `relatedServices`. Its subject is served by the
marketing practice, not the engineering spokes, and pointing it at an
engineering page would be a false connection. Left empty deliberately; the
component omits the section rather than rendering an empty heading.

### 5.5 Watch: `/services` vs `/services/ai-development`

Catalog intent vs definitional intent, overlapping SERPs. Inherited from the
previous architecture. If Google consistently picks one, fold the other's
angle into it rather than maintaining both.

---

## 6. Technical SEO

### 6.1 Redirects — read this before deploying

The 34 marketing URLs moved. Redirects are emitted **twice, on purpose**:

| Mechanism | Produces | Works where |
|---|---|---|
| `redirects` in `astro.config.mjs` | adapter-handled redirect | Node server, `astro preview` |
| `dist/client/_redirects` (generated) | true **301** | Netlify, Cloudflare Pages |

Both come from one source of truth, `marketingRedirects()` in
`src/lib/marketing.ts`.

> ⚠️ **Deployment gap.** Because an adapter is installed, Astro emits *no HTML
> file* for the old URLs — the build log says `response body was empty` for
> each. On a host that reads `_redirects`, that is correct and you get a real
> 301. **On a plain static host that ignores `_redirects`, all 34 old URLs
> will 404.** On Vercel, port `_redirects` to `vercel.json` with
> `"permanent": true`. On nginx, `return 301`. Confirm this before cutting DNS.

`/services/digital-marketing` → `/digital-marketing` is included: that category
page was absorbed by the hub, because a category named "Digital Marketing"
inside a section named "Digital Marketing" is one entity described twice, and
it would have produced the URL `/digital-marketing/digital-marketing`.

### 6.2 Sitemap

89 URLs, matching 89 built pages exactly. Priority encodes the positioning:

| Band | Pages |
|---|---|
| 1.00 | homepage |
| 0.95 | `/services` |
| 0.90 | 15 service spokes, `/projects` |
| 0.85 | `/industries` + 6 sector pages, `/contact` |
| 0.80 | `/digital-marketing`, `/about`, `/blog` |
| 0.70 | 33 marketing pages, 7 blog categories, `/payment` |
| 0.60 | 16 blog posts |
| 0.30 | legal |

Redirected URLs are **absent** by design — a sitemap listing a redirect asks
Google to crawl a URL that only points elsewhere.

### 6.3 Other

- **`robots.txt`** — `/api/` disallowed with a comment explaining why (two
  POST-only Razorpay endpoints; nothing to index, wasted crawl budget).
- **RSS** — new at `/rss.xml`, 16 items, valid XML, autodiscovery `<link>`
  site-wide in `BaseLayout`. Carries excerpts, not full posts: a feed that
  republishes the body gives no reason to visit and duplicates the content.
- **Canonicals** — self-referencing on every page, path-based, resolved
  against `Astro.site`.
- **Core Web Vitals** — inherited and unchanged: static prerendering,
  self-hosted preloaded fonts (no external requests, no layout shift), lazy
  images with explicit dimensions, near-zero client JS. Not re-measured in this
  pass; no regression introduced.

---

## 7. What is NOT done

Stated plainly so it is not mistaken for finished work.

### 7.1 Approved but not built

- **Case studies** (`/case-studies/*`) — architecture not built. `projects.ts`
  holds 8 project records with problem/solution/tech/duration, but those facts
  are **inherited from the old site and unconfirmed**. Publishing them at
  dedicated case-study URLs amplifies claims nobody has verified, and a case
  study is precisely where a buyer checks. Needs your confirmation of the
  underlying facts first.
- **Tools** (`/tools/*`) — not built. The highest-value item for a DR 0 domain
  (link earning) and the heaviest engineering lift. Deferred, not dismissed.

### 7.2 Known issues found during verification

- **`/payment` is orphaned** — it is in the sitemap at priority 0.70 but has
  **zero inbound internal links**. Either it is reached only from invoices, in
  which case it should be `noindex` and out of the sitemap, or it needs a link.
  Currently it is asking to be indexed while being unreachable by crawl.
- **`LocalBusiness` on the 33 marketing pages asserts an unverified address** —
  `Vadodara, Gujarat, 390001` plus geo coordinates `22.3072, 73.1812`.
  Inherited. Given that a previous session shipped invented company facts to
  `/about`, **confirm the postal code and coordinates or remove them.** A wrong
  address in structured data is a bad local signal, not a cosmetic error.
- **Six `/about` timeline entries (2019–2024) remain unconfirmed.** Inherited;
  flagged previously in `docs/about-seo.md` §7.5. Still unresolved.
- **No service spoke links back to an industry page.** The industry → service
  direction is built; the reverse is not. Cheap to add in `ServiceSpoke.astro`
  using `getIndustriesForService()`, which already exists for this purpose.
- **Spoke and industry pages have no images.** Every page is text-only. One
  architecture diagram per page would help both users and image search.

### 7.3 Not attempted

Programmatic SEO, location pages, and products. The architecture supports them
— `industries.ts` is the template to copy — but none is built, and location
pages in particular should wait until `areaServed: 'Worldwide'` versus the
marketing practice's Gujarat focus is deliberately reconciled.

---

## 7A. Ranking in the US, UK, and Australia

The goal is worldwide ranking with emphasis on the US, UK (London), New York,
and Australia. Here is what was blocking it, what was fixed, and what is left.

### What was actively working against it

**33 pages asserted an Indian `LocalBusiness`.** Every marketing page carried a
`LocalBusiness` node with a Vadodara address and a Gujarat service area, while
`organizationSchema` said `areaServed: 'Worldwide'`. A crawler deciding
"global software studio or Indian local agency" was handed 33 votes for the
latter. That is the single strongest geographic signal a site can emit, and it
was contradicting the positioning on every other page.

**Fixed:** `LocalBusiness` is now scoped to `gmb-optimization` and
`google-map-listing` — the two services that genuinely cannot be delivered
remotely. Down from 33 pages to 2. Everything else (Shopify builds, Meta Ads,
marketplace management, and all 15 engineering spokes) now carries no local
claim at all.

**No `hreflang` existed.** Added `x-default` and `en`, both self-referencing,
on all 90 pages. That is the correct signal for one English site serving every
market: it tells Google there is no region-specific variant to prefer.

> Do **not** add `en-us` / `en-gb` / `en-au` variants pointing at these same
> URLs. hreflang describes alternates that actually exist; four locales for one
> page is self-contradictory and Google discards the whole set.

### What will actually decide this

Technical signals only remove obstacles. Three things decide geographic
ranking, in descending order of weight:

1. **Links from the target market.** A UK-hosted, UK-linked competitor outranks
   a technically perfect page with no UK links. This is the binding constraint
   at **DR 0**, and no amount of schema changes it.
2. **Currency, spelling, and examples in the copy.** Pages that price in ₹, use
   Indian examples, or say "lakh" read as India-targeted regardless of markup.
   Worth auditing the 33 marketing pages for this.
3. **Server location and TLD.** `.com` is neutral and correct. Serve from a CDN
   with US/EU/AU edges rather than a single Indian origin.

### On city pages (New York, London, Sydney)

The obvious move is `/locations/ai-development-company-new-york` and similar.
**Do not build these yet, and never build them with a fabricated address.**

- Local-intent SERPs for "<service> company <city>" are dominated by the map
  pack and by businesses with a verifiable local presence. A page claiming a
  New York office you do not have is both ineffective and a
  misrepresentation — and the map pack requires verification you would fail.
- Thin city pages that differ only by a swapped city name are the doorway-page
  pattern Google names explicitly.

**The honest version that does work:** pages framed as *markets served* rather
than *offices held* — "Working with US startups from a remote team", covering
timezone overlap, contracting, invoicing currency, and IP assignment under US
law. That answers what an American buyer hiring offshore actually worries
about, has no local-presence claim to defend, and is genuinely differentiated
per market. That is a content project, not a template loop.

---

## 8. Honest expectations

The domain is **DR 0.0** with essentially no organic presence.

Architecture is necessary and it is not sufficient. Everything in this document
makes the site *capable* of ranking; none of it makes the site *rank*. At DR 0,
head terms like "AI development company" are unwinnable for a long time
regardless of how good the page is, because the top 10 is held by domains with
years of links.

The realistic sequence:

1. **Long-tail and sector queries first** — `/industries/*` and the blog
   categories are the pages with a genuine chance in the near term, because
   their SERPs are less consolidated.
2. **Links, which this architecture does not provide.** The single highest-
   leverage remaining item is `/tools/*` (§7.1) — free utilities are the most
   reliable way a DR 0 B2B domain earns links without a budget.
3. **Head terms last**, once there is authority to spend.

Anyone promising rankings on "AI development company" in the near term at DR 0
is selling something. The work here is the foundation that makes the attempt
possible in year two and three.
