# Homepage On-Page SEO — Auravon AI

Target page: `https://auravonai.com/`
Primary keyword: **AI Development Company**
Implemented in: `src/lib/seo.ts`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, `src/components/home/*`

Everything in the "Generated assets" section below is **live in the build**. The
"Recommendations" section is work that is *not* done and needs a decision.

---

## 1. Generated assets (live)

All metadata is defined once in `HOME_SEO` (`src/lib/seo.ts`) and passed into
`BaseLayout`. Edit it there, not in the page.

| Field | Value | Length |
|---|---|---|
| SEO / Meta Title | `AI Development Company \| AI Software & Agents \| Auravon AI` | 58 |
| Meta Description | `AI development company building custom AI software, AI agents, LLM apps, and automation for startups and enterprises. Talk to an engineer, free.` | 144 |
| Canonical URL | `https://auravonai.com/` | — |
| Robots | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` | — |
| OG Title | `Auravon AI — AI Development Company for Custom AI Software` | 57 |
| OG Description | `We design, build, and ship production AI systems: AI agents, RAG assistants, LLM integrations, automation, and the custom software around them. Direct access to the engineers doing the work.` | 186 |
| Twitter Title | `Auravon AI — AI Development Company` | 35 |
| Twitter Description | `Custom AI software, AI agents, LLM applications, and automation — engineered for production, not demos.` | 102 |

**Why social copy differs from the meta description.** A SERP snippet is read by
someone already searching for the service; a link preview is read by someone
who was sent the link cold. Same page, different job. Reusing one string for
both is the most common wasted opportunity on a homepage.

### Heading structure (verified in the built HTML)

One `h1`, ten `h2`, fifty-four `h3`. No level is skipped.

```
H1  AI Development Company Building Production AI
├── H2  An AI development company that ships, not pitches      → definitional, entity-setting
├── H2  AI Development Services We Design, Build, and Ship     → 8 × H3 service cards
├── H2  AI Systems and Software We've Built                    → 6 × H3 project cards
├── H2  Our AI Development Process, Step by Step               → 6 × H3 stages
├── H2  The AI and Engineering Stack We Build On
├── H2  Industries We Build AI Solutions For                   → 8 × H3 verticals
├── H2  Why Companies Choose Auravon AI as Their AI Partner    → 6 × H3 differentiators
├── H2  How to Start an AI Project With Us                     → 4 × H3 engagement models
├── H2  AI Development Company: Frequently Asked Questions     → 15 × H3 questions
└── H2  Ready to Build With AI? Let's Talk.
```

Visible word count: **~3,460**.

### Keyword placement

Primary keyword *AI Development Company* appears in the title, meta
description, H1, three H2s, the opening paragraph, and the FAQ block — all in
running sentences. Supporting terms are distributed one-per-section rather than
repeated: AI agent development and generative AI development in the services
grid, AI integration and AI automation services in their own cards, custom
software development and enterprise AI across the engagement and industries
sections, LLM development through the stack section.

There is no exact-match repetition beyond what a human writer would produce.
Density is not a ranking factor; placement in structural elements is.

### Structured data (13 JSON-LD blocks, all parse-verified)

Site-wide, emitted by `BaseLayout` on every route:

- **Organization + ProfessionalService** — `@id: /#organization`. Multi-typed
  into one node. The previous layout emitted these as two unlinked top-level
  nodes, which reads to a parser as two different companies sharing a name.
  Now carries `knowsAbout`, `areaServed`, `address`, and two `contactPoint`
  entries.
- **WebSite** — `@id: /#website`, `publisher → #organization`.

Homepage-specific, emitted by `src/pages/index.astro`:

- **WebPage** — `@id: /#webpage`, linked to `#website` and `#organization`.
- **BreadcrumbList** — `@id: /#breadcrumb`.
- **FAQPage** — `@id: /#faq`, 15 questions.
- **Service** × 8 — one per service card, each `provider → #organization`.

Every node is anchored by `@id`, so the graph describes one entity from
multiple angles instead of restating the company six times.

**Verified:** all 15 FAQ questions *and* all 15 answers appear in the rendered
page text, character-identical to the JSON-LD. This is a Google requirement,
not a nicety — marked-up answers that a visitor cannot read are a manual-action
risk. The FAQ array in `src/lib/seo.ts` feeds both the markup and the page, so
they cannot drift.

**Honest note on FAQ rich results:** Google restricted FAQ rich results to
government and health sites in August 2023. This markup will almost certainly
not produce an expanded SERP listing. It is still worth shipping — it feeds
question/answer extraction for AI Overviews and assistant surfaces, and Bing
still renders FAQ results — but the *visible* well-structured answers are what
earn featured snippets. The schema is a bonus, not the mechanism.

**Deliberately absent:** `aggregateRating` and `Review`. There is no verifiable
review corpus behind this site. Fabricated review markup is a structured-data
violation and the fastest available way to lose trust. Add it the day real,
attributable reviews exist on the page.

### FAQ answer format

Each answer opens with a complete, self-contained 40–55 word statement, because
that is the unit a featured snippet or AI Overview lifts. Supporting detail
follows. An answer that opens with "It depends" or with brand copy cannot be
extracted. Preserve that shape on edits.

Three answers give the honest rather than the flattering response — most
notably *"What company is leading AI development?"*, which names Anthropic,
OpenAI, and Google DeepMind as the model leaders and positions Auravon at the
implementation layer. Claiming the crown there would be transparently false to
any reader qualified to hire you, and E-E-A-T rewards the accurate answer.

---

## 2. Internal linking

### Live on the page

| From | To | Anchor |
|---|---|---|
| Hero CTA | `/contact` | Get a Free Project Scope |
| Services grid | `/blog/ai-agents-for-business-2026` | AI Agent Development |
| Services grid | `/blog/building-ai-powered-saas-2025` | Generative AI Development, SaaS & Web App Development |
| Services grid | `/blog/build-ai-chatbot-business-2026` | AI Chatbots & RAG Assistants |
| Services grid | `/blog/ai-automations-roi-business-2026` | AI Automation Services |
| Services grid | `/blog/react-native-vs-flutter-2025` | Mobile App Development |
| Services grid | `/services`, `/contact` | Custom Software Development, AI Integration Services |
| Projects | `/projects` | View All Projects |
| Industries | `/contact` | Tell us about your use case |
| FAQ | 4 × `/blog/*` | Related reading block |
| Engagement + CTA | `/contact` | Book Your Free Scoping Call |

Every internal link was verified against the built output — all resolve to a
real page. Anchor text is descriptive, never "click here", and no two links use
identical anchor text for different destinations.

### The problem with this table

Six service cards point at **blog posts** because no matching service page
exists. That is a workaround, not a design. See recommendation 1.

---

## 3. Image ALT text

The homepage is almost entirely icon-driven — there are exactly two `<img>`
elements (both the logo) and no content photography. Current state is correct:

- Logo: `alt=""` with `aria-label="Auravon AI — home"` on the wrapping link.
  Correct. A decorative image inside a labelled link must not repeat the label.
- Six icon clusters use `role="img"` with descriptive `aria-label`s.
- Every decorative Lucide icon carries `aria-hidden="true"`.

**ALT text to use when real imagery is added** — write these as descriptions of
what the image shows, not as keyword slots:

| Image | Suggested ALT |
|---|---|
| Team / office photo | `Auravon AI engineering team reviewing an AI agent architecture` |
| Case study screenshot | `AI CRM dashboard with GPT-generated call summaries and lead scoring` |
| RAG architecture diagram | `Retrieval-augmented generation pipeline: document ingestion, vector store, and grounded response` |
| Process illustration | `Six-stage AI development process from discovery through evaluation to launch` |
| Founder headshot | `<Full name>, <role> at Auravon AI` |
| Client logo | `<Client name> logo` |

Rule of thumb: if the ALT text reads oddly when spoken aloud, it is written for
a crawler and will be discounted as such.

---

## 4. Recommendations (not implemented — need your decision)

### 1. The site has two identities, and only one of them is now on the homepage

This is the single biggest constraint on ranking for *AI Development Company*.

The homepage now says AI development company. `/services` and all 34 service
pages beneath it are a **digital marketing agency** catalog: SEO, Google Ads,
Meta Ads, Shopify, Amazon/Flipkart/Meesho seller management, social media,
graphic design. `/services` still titles itself *"Digital Marketing & Web
Services in Vadodara, Gujarat"*. The navbar mega menu is built from that same
catalog.

Google evaluates a homepage partly through what it links to and what links to
it. A homepage claiming AI development authority, supported by 34 pages about
Amazon seller accounts, sends a diluted signal — and a visitor who clicks
"Explore services" lands somewhere that contradicts the page they just read.

Three ways forward, in order of my preference:

1. **Build the AI service page cluster.** Add `/services/ai-agent-development`,
   `/services/generative-ai-development`, `/services/ai-integration`,
   `/services/ai-automation`, `/services/llm-development`,
   `/services/custom-software-development`. Point the homepage service cards at
   these instead of at blog posts, and each page links back to the homepage.
   This is what actually builds topical authority, and the homepage is
   currently written to anchor it.
2. **Split the brands.** Keep the marketing catalog on a subdomain or separate
   site. Cleanest signal, most work.
3. **Reposition `/services`** as an AI-and-software services hub with the
   marketing services demoted to a sub-section.

Doing none of these will cap what this page can rank for regardless of how
good the on-page work is.

### 2. Regenerate the OG image at 1200 × 630

`public/og-image.png` is **940 × 788** — near-square. X and LinkedIn will
centre-crop it, cutting the top and bottom. The `og:image:width` / `height`
tags declare the real dimensions (declaring 1200×630 for a 940×788 file just
makes the crawler distrust both numbers). Regenerate the asset, then update
`OG_IMAGE` in `src/lib/seo.ts`.

### 3. Fill in the E-E-A-T gaps

The page is honest, which is the hard part. What is missing is *verifiable*:

- **Named people.** No author, founder, or engineer is identified anywhere. The
  "E" in E-E-A-T is hard to earn anonymously for a services business. Add a
  team section or link the About page to real profiles, then add `Person` nodes
  with `sameAs` to LinkedIn.
- **Real case studies.** The project cards describe real work but name no
  client and link to no detail page. One written case study with a named client
  and a verifiable outcome is worth more than six anonymous cards.
- **Real testimonials.** Once collected, add them as visible quotes with
  attribution *and* `Review` markup. Not before.
- **Verify the "50+ projects" and "Projects Shipped" figures** before leaving
  them on the page. They were carried over from the reference site.

I removed the hero's previous `+342% Organic Traffic` and `3.8x ROAS` claims —
nothing on the site substantiated either, and unverifiable performance numbers
on a homepage are a direct E-E-A-T liability.

### 4. Smaller items

- `sitemap.xml` sets `lastmod` to the build timestamp for every URL, so every
  build tells Google all 61 pages changed. Derive it per-page from content
  instead, or drop the field.
- `Testimonials.astro` is no longer rendered on the homepage — its six
  "delivery principles" restated `WhyChooseUs`, and two near-identical card
  grids on one page is thin content. The file is left in place for reuse.
- Consider a `/blog` → homepage internal link pass: the sixteen articles are
  strongly AI-focused and are the natural authority feeders for this page.
- Add `Article` schema `mentions`/`about` pointing at `#organization` from the
  blog posts to tighten the entity graph.

---

## 5. Where to edit what

| Change | File |
|---|---|
| Title, description, social copy | `HOME_SEO` in `src/lib/seo.ts` |
| FAQ questions and answers | `homeFaqs` in `src/lib/seo.ts` — feeds both page and schema |
| Service card copy | `homeServices` in `src/lib/seo.ts` — feeds both page and schema |
| Company entity, `knowsAbout`, contact points | `organizationSchema` in `src/lib/seo.ts` |
| OG image dimensions | `OG_IMAGE` in `src/lib/seo.ts` |
| Per-page social overrides, `noindex` | props on `BaseLayout` |

Never hand-write a second copy of the FAQ or service arrays inside a
`<script type="application/ld+json">`. The single-source arrays are what
guarantee the markup keeps describing what is actually on the page.
