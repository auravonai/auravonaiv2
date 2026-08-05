# Services: hub-and-spoke architecture

Hub: `https://auravonai.com/services`
Spokes: 15 pages at `https://auravonai.com/services/<slug>`
Implemented in: `src/lib/services/`, `src/components/services/`, `src/pages/services/`

Everything under "What shipped" is **live in the build and verified against
the rendered HTML**. "Open decisions" is work that is *not* done.

---

## 1. What changed

`/services` was a ~6,000-word page rendering fifteen full service sections,
navigated by an in-page table of contents. It read as documentation. Each
service now owns a page, and the hub's only job is to route.

| | Before | After |
|---|---|---|
| `/services` `<main>` word count | ~6,000 | **1,727** |
| Service detail | 15 `#anchor` sections on one page | 15 URLs |
| Hub `h2` count | 15 services + sections | 7 |
| Spoke `<main>` word count | — | **1,115 average** (16,725 total) |
| Pages in build | 60 | **75** |
| Primary keywords targeted | 1 | **16** |

**Removed:** `ServicesHubIntro.astro`, `ServicesHubCatalog.astro`,
`ServicesHubProcess.astro`, and the `serviceOfferings` / `serviceGroups` /
`deliveryProcess` / `engagementModels` exports from `services-seo.ts`. The
process content moved into each spoke, where it is specific to the service
rather than generic across all fifteen.

**Hub sections now:** Hero → Service categories with cards → Why Choose
Auravon AI → FAQ → CTA. Exactly the brief.

---

## 2. The data layer

```
src/lib/services/
  types.ts        the ServicePage shape, with editing rules
  index.ts        registry, categories, lookups, build-time guards
  ai.ts           6 services
  engineering.ts  5 services
  platform.ts     2 services
  product.ts      2 services
```

One `ServicePage` record feeds **both** the hub card and the spoke page, so a
service's name and description cannot differ between the card and the page it
links to. Adding a service is one entry in one content module — the hub card,
the route, the sitemap entry, and all four JSON-LD nodes follow automatically.

**Build-time guards** (`index.ts` and `[slug].astro`) throw rather than ship:

- a duplicate slug within the spokes;
- a `relatedServices` entry pointing at a slug that does not exist;
- a service listing itself as related;
- **a slug collision between the 15 spokes and the 34 marketing pages** — both
  would render at one URL, and the second would silently shadow the first.

That last guard matters because both families share `/services/[slug]`. Astro
allows one `[slug].astro` per directory, so the route file is now a dispatcher:

```
/services/<slug>  →  AiServiceRoute        (src/lib/services/)        15 pages
                  →  MarketingServiceRoute (digital-agency-data.ts)   34 pages
```

`MarketingServiceRoute.astro` is the old route body moved verbatim. The 34
marketing pages render identical markup and identical structured data to
before, including their `LocalBusiness` node.

---

## 3. Keyword map

One page, one primary keyword, no two pages sharing.

| URL | Primary keyword |
|---|---|
| `/services` | AI development services *(catalog intent)* |
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

Verified across the build: **all 15 titles 44–60 characters, all 15 meta
descriptions 146–158 characters, exactly one `h1` per page**, canonical
correct on every one.

Each spoke renders 9 `h2` sections and ~20 `h3` items: hero → introduction →
problems → process → benefits → technologies → industries → FAQ → related
services → CTA.

---

## 4. Structured data

Hub-and-spoke changed the modelling. Previously the hub emitted fifteen
`Service` nodes because it rendered fifteen service sections. Now:

- **the spoke owns its `Service` node**, at `<spoke-url>#service`
- **the hub emits one umbrella `Service`** whose `hasOfferCatalog` references
  those nodes by `@id`, plus an `ItemList` enumerating all fifteen URLs

One node per entity, defined on the page that describes it, referenced from
the page that lists it.

| Page | Nodes emitted |
|---|---|
| `/services` | `CollectionPage`, `BreadcrumbList`, `Service` (umbrella), `ItemList` (15), `FAQPage` (7) |
| each spoke | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` (4–7) |

`Organization` and `WebSite` come from `BaseLayout` site-wide and are not
repeated — a second `Organization` node reads to a parser as a second company.

**Deliberately absent on the spokes:** the `LocalBusiness` node with its
Vadodara / Ahmedabad / Surat city list that the 34 marketing pages carry.
Those pages sell local services; these sell remote engineering worldwide, and
a city-level service area would contradict
`organizationSchema.areaServed: 'Worldwide'`.

Audited across the whole build: **75 pages, 53 with FAQPage, 441 Q&A pairs,
zero malformed nodes**, and every marked-up question and answer verified
visible in the rendered HTML.

---

## 5. FAQ relocation (done)

The hub's FAQ was 1,699 of its 2,536 words, and six of its fourteen questions
were service-specific — competing with the spokes that now own those keywords.
Moved:

| Question | Moved to |
|---|---|
| What are custom software development services? | `/services/custom-software-development` |
| What are AI consulting services? | `/services/ai-consulting` |
| What services do AI consulting companies offer? | `/services/ai-consulting` |
| How much do AI consulting services cost? | `/services/ai-consulting` |
| What are custom AI development services? | `/services/custom-ai-development` |

Two were dropped rather than moved, as near-duplicates of content the spoke
already carries: *"Who should hire AI consulting services?"* (the spoke asks
"Who should hire AI consulting, and who should skip it?") and *"Why should
businesses use AI consulting services?"* (its answer is the spoke's
introduction, near-verbatim).

The hub keeps seven catalog-level questions: what these services are, who
provides them, how to choose and find a provider, and what they cost across
the range.

---

## 6. Open decisions (NOT done)

### 6.1 Four marketing pages now overlap the spokes

No slug collides, so nothing is broken — but these pairs target adjacent
queries from two URLs, and Google will pick one:

| Marketing page (existing) | Overlapping spoke (new) |
|---|---|
| `/services/website-development` | `/services/web-application-development` |
| `/services/web-services` | `/services/web-application-development` |
| `/services/ecommerce-development`, `/services/custom-ecommerce-development` | `/services/web-application-development` |
| `/services/devops-deployment`, `/services/website-hosting` | `/services/cloud-devops` |
| `/services/business-consulting`, `/services/business-strategy` | `/services/product-discovery`, `/services/ai-consulting` |
| `/services/graphic-design`, `/services/logo-design`, `/services/brand-identity-design` | `/services/ui-ux-design` *(partial — visual identity vs product design)* |

**Recommended resolution:** 301 the marketing page to the spoke where the
spoke is genuinely the better page, and keep the marketing page only where it
serves a distinct local-intent query. This needs a business decision about
whether the digital-marketing line is still being sold — not an engineering
one, which is why it is not applied here.

### 6.2 `/services` vs `/services/ai-development`

The hub targets "AI development services" and the spoke targets "AI
development". The intents differ (catalog vs. definitional) but the SERPs
overlap. This is the one pair worth watching in Search Console after launch.
If Google consistently picks one, fold the other's angle into it rather than
maintaining both.

### 6.3 The navbar mega menu still lists only marketing services

It is built from `digital-agency-data.ts`, so all 75 routes render "Digital
Marketing", "Flipkart", and "Meesho" in their chrome while the site's actual
positioning is AI engineering. **This is now the single largest remaining
inconsistency on the site** — the hub, the spokes, the homepage, and `/about`
all say one thing and the navigation says another. Rebuilding it from
`servicePages` is roughly a one-file change.

### 6.4 Spoke pages have no images

Same gap as `/about`. Each spoke would benefit from one architecture diagram
or screenshot of real delivered work. When adding, describe the image content
rather than the keyword.

---

## 7. Where to edit what

| To change | Edit |
|---|---|
| A service's card, page content, or FAQ | its record in `src/lib/services/{ai,engineering,platform,product}.ts` |
| Add or remove a service | one record in the same files — everything else follows |
| Category names, order, blurbs | `serviceCategories` in `src/lib/services/index.ts` |
| Spoke page layout | `src/components/services/ServiceSpoke.astro` |
| Hub metadata, intro, why-choose-us, FAQ | `src/lib/services-seo.ts` |
| Hub card grid layout | `src/components/services/ServicesGrid.astro` |
| Which JSON-LD a spoke emits | `src/components/services/AiServiceRoute.astro` |

Two rules keep this compliant:

1. **Never hand-write a second copy of a content array inside a
   `<script type="application/ld+json">`.** Schema is only valid when it
   describes what a visitor can see.
2. **Never add a service-specific FAQ back to the hub.** Two `FAQPage` nodes
   answering one query at two URLs is the split signal this redesign removed.
