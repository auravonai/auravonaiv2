# /about On-Page SEO — Auravon AI

Target page: `https://auravonai.com/about`
Primary keyword: **AI Development Company**
Implemented in: `src/lib/about-seo.ts`, `src/pages/about.astro`, `src/components/about/About*.astro`

Everything in "Generated assets" is **live in the build and verified against
the rendered HTML** (`dist/client/about/index.html`). "Recommendations" is
work that is *not* done.

---

## 0. What this page is for, and what it deliberately is not

The homepage owns **AI Development Company** as a commercial term. `/services`
owns **AI Development Services**. This page owns **about-intent** and
**vetting-intent**: who Auravon AI is, how it works, what it commits to, and
how a buyer should evaluate any firm in this category — including this one.

That distinction drives every decision below. The primary keyword appears
where it is load-bearing (title, H1, opening paragraph, one H2) and nowhere
else for its own sake. A page that repeated it in every heading would become a
second landing page competing with the homepage for the same query, which is
the outcome the brief explicitly rules out.

**Support, made structural.** The "What we do" section exists to *route*:
`/services` for commercial detail, `/projects` for evidence, `/blog` for
practice. About-intent is absorbed here; commercial intent is handed onward.

**What was replaced.** The previous page positioned Auravon as "an AI
development agency … web apps, SaaS products, mobile apps, AI chatbots" — the
studio/agency framing from the Next.js reference, with no structured data, no
breadcrumb, no FAQ block, and a history that stopped at 2024. Content lived
inline in a single `AboutPageContent.astro`, which has been removed in favour
of the data-module pattern used by the homepage and `/services`.

---

## 1. Generated assets (live)

All metadata is defined once in `ABOUT_SEO` (`src/lib/about-seo.ts`) and passed
into `BaseLayout`. Edit it there, not in the page.

| Field | Value | Length |
|---|---|---|
| SEO / Meta Title | `About Us \| AI Development Company & Engineers \| Auravon AI` | 58 |
| Meta Description | `Auravon AI is an AI development company run by engineers, not account managers. How we scope, build, evaluate, and maintain production AI systems.` | 146 |
| Canonical URL | `https://auravonai.com/about` | — |
| URL | `/about` — unchanged, and correct | — |
| Robots | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` | — |
| OG Title | `About Auravon AI — The Engineering Team Behind the Build` | 56 |
| OG Description | `A small, senior team building production AI systems and the software around them. How we work, what we own, and what we will talk you out of before you spend a budget.` | 167 |
| Twitter Title | `About Auravon AI — AI Development Company` | 41 |
| Twitter Description | `Who we are, how we work, and what we say no to. The engineering team behind Auravon AI.` | 87 |

**Why the title leads with "About Us" and not the keyword.** The dominant
queries resolving to this URL are navigational and about-intent. The primary
keyword still sits in the title, mid-string, where it carries weight; spending
the first two words on a head term this page is not trying to win would cost
the click without winning the ranking. The brand closes so `BaseLayout`'s
"append brand unless already present" rule leaves the title alone — a title
not ending in `Auravon AI` renders as `… | Auravon AI | Auravon AI`.

**Why social copy differs from the meta description.** A SERP snippet is read
by someone already searching; a link preview is read by someone sent the link
cold. Same page, different job. All four social values are under the clip
points (LinkedIn/X truncate descriptions around 200 characters).

### Open Graph and Twitter tags emitted

Composed by `src/layouts/BaseLayout.astro`; only the four values above are
page-specific.

```html
<meta property="og:type"          content="website" />
<meta property="og:site_name"     content="Auravon AI" />
<meta property="og:locale"        content="en_US" />
<meta property="og:url"           content="https://auravonai.com/about" />
<meta property="og:title"         content="About Auravon AI — The Engineering Team Behind the Build" />
<meta property="og:description"   content="A small, senior team building production AI systems and the software around them. How we work, what we own, and what we will talk you out of before you spend a budget." />
<meta property="og:image"         content="https://auravonai.com/og-image.png" />
<meta property="og:image:width"   content="940" />
<meta property="og:image:height"  content="788" />
<meta property="og:image:alt"     content="Auravon AI — AI development company building custom AI software, AI agents, and automation systems" />

<meta name="twitter:card"         content="summary_large_image" />
<meta name="twitter:site"         content="@auravonai" />
<meta name="twitter:creator"      content="@auravonai" />
<meta name="twitter:title"        content="About Auravon AI — AI Development Company" />
<meta name="twitter:description"  content="Who we are, how we work, and what we say no to. The engineering team behind Auravon AI." />
<meta name="twitter:image"        content="https://auravonai.com/og-image.png" />
<meta name="twitter:image:alt"    content="Auravon AI — AI development company building custom AI software, AI agents, and automation systems" />
```

`og:image` is 940×788, declared honestly. It is close to square and will be
centre-cropped by X and LinkedIn. Regenerating it at 1200×630 remains an
outstanding site-wide improvement (see `docs/homepage-seo.md`) — it is not
specific to this page.

---

## 2. Heading structure (as rendered)

One `h1`, eight `h2`, forty-two `h3`. No level is skipped.

```
h1  An AI Development Company Run by the Engineers Who Build It

h2  What we build as an AI development company
    h3  AI development
    h3  Custom software development
    h3  Delivered systems
    h3  Written practice

h2  How we work with the teams who hire us
    h3  You talk to the engineers
    h3  Scope is written before it is priced
    h3  Progress is something you can open
    h3  Accuracy is measured, not asserted
    h3  We flag problems while they are still small
    h3  Handover is part of delivery

h2  The engineering team behind the work
    h3  Applied AI engineering
    h3  Product and platform engineering
    h3  Infrastructure and operations
    h3  Interface and interaction design

h2  The engineering principles we actually work by
    h3  Maintainability first
    h3  Architecture before components
    h3  Build for the failure path
    h3  Design for growth, not for applause
    h3  Direct, unfiltered communication
    h3  Trade-offs stated out loud

h2  What you can hold us to
    h3  You own everything, by contract
    h3  Your data stays where you decide
    h3  Pricing follows a written scope
    h3  The discovery is yours either way
    h3  Things we will tell you before you hire us

h2  How Auravon AI got here
    h3  2019 — First delivered projects   … through …
    h3  2026 — Agentic systems in production

h2  Choosing an AI development company: common questions
    h3  (nine FAQ questions — see §6)

h2  Tell us what you are building and we will tell you what it takes
```

**H1 rationale.** The primary keyword leads; the qualifier that follows is the
page's actual thesis rather than a second keyword. "About" is carried by the
eyebrow, the visible breadcrumb, the title tag, and the URL — spending H1
characters on it would push the keyword out of the strongest position on the
page for no gain.

**Section order** follows how a person actually evaluates a company: who they
are → what they do → how they work → who does the work → what they believe →
what they commit to and refuse → how long they have been at it → objections →
conversion. A visitor who leaves at any point has seen everything above it in
the order that matters most for a trust decision.

**One whitespace trap, now fixed here.** Astro's `compressHTML` strips
template whitespace between a text node and an element, so a two-tone heading
written as

```astro
<h1>An AI Development Company
  <span class="text-mute">Run by the Engineers Who Build It</span></h1>
```

renders as `…CompanyRun by the Engineers…` — visibly, and in the extracted
heading text. Every two-tone heading on this page uses an explicit `{' '}`, and
the timeline headings use an `sr-only` dash so they extract as
`2019 — First delivered projects`. **This bug is live on `/services` right
now** (`AI Development ServicesBuilt for Production`) — see §7.

---

## 3. Structured data (live)

`Organization` and `WebSite` are emitted site-wide by `BaseLayout` and are
**not** repeated here — a second `Organization` node on one page reads to a
parser as a second company. This page adds three nodes, each anchored by `@id`
to the site-wide entities.

| Node | `@id` | Purpose |
|---|---|---|
| `AboutPage` | `/about#webpage` | The page, typed as the entity's own page |
| `BreadcrumbList` | `/about#breadcrumb` | Matches the visible trail |
| `FAQPage` | `/about#faq` | The nine rendered Q&As |

### Organization schema

Emitted on every page from `organizationSchema` in `src/lib/seo.ts`. Two
fields were **added as part of this work** and are marked below.

```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://auravonai.com/#organization",
  "name": "Auravon AI",
  "alternateName": "Auravon",
  "url": "https://auravonai.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://auravonai.com/logo.png",
    "caption": "Auravon AI logo"
  },
  "image": "https://auravonai.com/og-image.png",
  "description": "Auravon AI is an AI development company building custom AI software, AI agents, LLM applications, SaaS platforms, and automation systems for startups and enterprises worldwide.",
  "slogan": "Production AI, engineered end to end.",
  "mainEntityOfPage": { "@id": "https://auravonai.com/about#webpage" },   // ← added
  "email": "support@auravonai.com",
  "telephone": "+91 88140 12395",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "areaServed": "Worldwide",
  "knowsAbout": [
    "AI development",
    "Artificial intelligence software development",
    "AI agent development",
    "Generative AI development",
    "Large language model applications",
    "Retrieval-augmented generation",
    "AI integration",
    "Business process automation",
    "Custom software development",
    "SaaS product development",
    "Web application development",
    "Mobile app development"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "projects@auravonai.com",
      "telephone": "+91 88140 12395",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "Worldwide"
    },
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@auravonai.com",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "Worldwide"
    }
  ],
  "sameAs": [
    "https://x.com/auravonai",
    "https://www.linkedin.com/company/auravon-ai-tech/",
    "https://github.com/auravonai"
  ]
}
```

*(The `// ← added` markers are annotation for this document; the emitted JSON
is valid JSON with no comments.)*

**`mainEntityOfPage` is the important addition.** It pairs with `mainEntity`
on the `AboutPage` node below. Together they say "this URL and this company
are the same subject" rather than "this is one more document mentioning the
company" — which is the entire structural point of an About page in an entity
graph, and the thing the old page was missing.

**No `foundingDate`.** One was briefly added as `"2019"`, inferred from the
page's timeline rather than confirmed with the business, and removed. A
founding date is a machine-readable public claim about a real company — add it
only once someone has confirmed the actual date.

**Deliberately absent:** `aggregateRating`, `Review`, `numberOfEmployees`, and
`founder`. There is no verifiable review corpus, and no named-person data has
been supplied. Inventing any of them is both a Google structured-data
violation and the fastest way to lose a serious buyer. See §7 for the
`founder`/`employee` opportunity, which is the strongest single upgrade
available to this page.

### AboutPage schema

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://auravonai.com/about#webpage",
  "url": "https://auravonai.com/about",
  "name": "About Auravon AI",
  "description": "Auravon AI is an AI development company. We are a small, senior engineering team that designs, builds, evaluates, and maintains production AI systems — AI agents, generative AI applications, and the custom software they live inside — for startups and established businesses worldwide.",
  "isPartOf": { "@id": "https://auravonai.com/#website" },
  "about": { "@id": "https://auravonai.com/#organization" },
  "mainEntity": { "@id": "https://auravonai.com/#organization" },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://auravonai.com/og-image.png"
  },
  "inLanguage": "en",
  "breadcrumb": { "@id": "https://auravonai.com/about#breadcrumb" }
}
```

`description` quotes the hero's opening paragraph verbatim (`ABOUT_INTRO`),
not a paraphrase — a schema description appearing nowhere on the page is
exactly the drift the one-definition rule exists to prevent.

### Breadcrumb schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://auravonai.com/about#breadcrumb",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://auravonai.com/" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://auravonai.com/about" }
  ]
}
```

Google requires `BreadcrumbList` to match a hierarchy the visitor can see. A
visible `Home › About` trail is rendered at the top of `AboutHero.astro`.
**If one is edited, edit the other.**

### FAQPage schema

Generated from `aboutFaqs` by `faqPageSchema()`. The same array renders the
visible accordion, so the marked-up answers and the readable answers cannot
drift. Verified: **9 of 9 answers appear verbatim in the rendered HTML.**

Realistic expectation: Google restricted FAQ *rich results* to well-known
authoritative government and health sites in 2023, then deprecated the feature
and removed its documentation. This will not draw an expanded SERP listing for
a commercial site, and no change of format fixes that — the feature is gone,
not the markup wrong. It is still worth emitting: it feeds question/answer
extraction for AI Overviews and assistant surfaces, and Bing still renders FAQ
results. The visible, well-written answers are what earn featured snippets.
The markup is a bonus, not the mechanism.

**Site-wide FAQ format.** All 38 pages carrying FAQs emit this same shape —
`@context`, `@type: FAQPage`, `mainEntity[]` of `Question` → `acceptedAnswer`
→ `Answer.text` — via `faqPageSchema()` in `src/lib/seo.ts`, except the 34
`/services/[slug]` pages, which build the identical structure inline from
`service.faq`. Audited across the build: 38 pages, 383 Q&A pairs, zero
malformed nodes, and every marked-up question and answer verified visible on
its page.

---

## 4. Internal linking (live)

Ten in-content internal links inside `<main>`, all with descriptive anchor
text and all resolving to pages that exist today.

| Destination | Count | Anchor text used |
|---|---|---|
| `/services` | 3 | "AI development services", "AI development services" (in prose), "Browse AI Development Services" |
| `/services#custom-software-development` | 1 | "Custom software development" |
| `/projects` | 2 | "See What We Have Built", "See our work" |
| `/blog` | 2 | "Read the engineering blog", "engineering blog" |
| `/contact` | 2 | "Talk to an Engineer", "Start a Conversation" |
| `/blog/ai-app-development-cost-guide` | 1 | "What AI app development really costs" |
| `/blog/mvp-cost-agency-overcharging-2026` | 1 | "What an MVP should cost — and where agencies overcharge" |
| `/blog/ai-agents-for-business-2026` | 1 | "AI agents for business, explained" |
| `/blog/ai-automations-roi-business-2026` | 1 | "Where AI automation actually pays back" |
| `/` | 1 | "Home" (breadcrumb) |

No "learn more" anchors: four of them tells a crawler nothing about what sits
at the other end. Link *direction* is deliberate — about → services, not the
reverse — because commercial intent should flow toward the commercial page.

### Inbound links to this page (already live elsewhere)

- `ServicesHubTrust.astro` links `/about` with the anchor "about Auravon AI".
- The navbar and footer both carry `/about` under Company.

### Recommended additional inbound links (not done)

These require edits to pages outside this brief:

1. **Homepage** — one contextual link from the trust or process section with
   anchor text like "the engineers who build it" → `/about`. The homepage
   currently links to `/about` only through the shared navbar and footer, so
   the page receives no in-content internal link from the site's strongest
   URL.
2. **Blog article footers** — an author/company line linking `/about` would
   pass topical relevance from fifteen articles and support E-E-A-T at the
   article level, where it currently has no author entity at all.
3. **`/contact`** — "not sure we are the right fit? read how we work" →
   `/about#faq`, catching the visitor who reaches the form still hesitating.

---

## 5. Image ALT text

**There are currently zero `<img>` elements inside `<main>` on this page.**
Verified against the rendered HTML. Every visual is a Lucide SVG icon,
correctly marked `aria-hidden="true"` — decorative icons beside a text label
must not be announced, and they should not carry ALT text.

So the live ALT surface is limited to two site-wide assets:

| Asset | Where | ALT / caption |
|---|---|---|
| `og-image.png` | `og:image:alt`, `twitter:image:alt` | `Auravon AI — AI development company building custom AI software, AI agents, and automation systems` |
| `logo.png` | Organization schema `logo.caption` | `Auravon AI logo` |

### ALT text for the images this page should have (not done)

An About page with no photography is a real E-E-A-T weakness — it is the page
where a buyer is looking for evidence that people exist. When those images are
added, use these. Each describes the image content and its context, and none
is keyword-stuffed:

| Image to add | Recommended ALT |
|---|---|
| Team / founder photograph | `The Auravon AI engineering team at work in the Vadodara studio` |
| Individual engineer headshot | `[Full name], [role] at Auravon AI` |
| Architecture diagram of a shipped system | `Architecture diagram of an AI agent with scoped tool permissions, a human approval gate, and an audit log` |
| Evaluation dashboard screenshot | `Evaluation dashboard showing accuracy scores for an AI assistant measured against an agreed pass threshold` |
| Workspace / process photo | `Auravon AI engineers reviewing a build increment on a real environment` |

Rules that apply to all of them: describe the image, not the keyword; leave
`alt=""` on anything purely decorative; never begin with "image of" or
"picture of".

---

## 6. FAQs (live)

Nine questions, rendered as `h3` inside native `<details>`/`<summary>`
disclosures and mirrored into `FAQPage` JSON-LD. Two groups:

**Vetting questions** — how to choose and verify an AI development company.
These belong on the About page specifically because the honest answer to each
is a set of criteria the reader can apply to *us*, on the page where they are
already deciding whether to trust us.

1. How to choose an AI development company?
2. How to choose the right AI development company?
3. How to find a trusted custom AI development company?
4. What is an AI app development company?
5. How to choose an AI agent development company?

**Brand questions** — about-intent, unique to this page.

6. Who is Auravon AI?
7. Who will I actually work with on my project?
8. Do I own the code and the AI models you build for me?
9. Does Auravon AI work with startups as well as larger companies?

**Comparison questions were excluded as briefed** — no "what is the best AI
development company" or equivalents. (Note that `homeFaqs` still carries two:
"What is the best AI software development company?" and "What company is
leading AI development?".)

**Answer shape**, consistent with the homepage and `/services`: the opening
sentence is a complete, self-contained 40–55 word answer, because that is the
unit a featured snippet or an AI Overview lifts. Supporting detail follows.
Total 85–130 words. An answer that opens with "It depends" or with brand copy
cannot be extracted.

**Sentence case, not Title Case.** The brief listed these as "How to choose an
AI Development Company?". Mid-sentence Title Case on a keyword is a
keyword-stuffing tell to a quality rater and looks wrong beside the rest of
the site's copy. The query is matched on the words, not their casing.

---

## 7. Recommendations (NOT done)

Ordered by impact.

### 7.1 The homepage FAQ duplicates all five vetting questions — decide who owns them

`homeFaqs` in `src/lib/seo.ts` already answers every one of the five vetting
intents now on this page:

| Intent | Homepage question | This page |
|---|---|---|
| choose an AI dev company | "How to choose an AI development company?" | same question |
| choose the *right* one | "How to choose the right AI development company for your project?" | "How to choose the right AI development company?" |
| find a trusted custom one | "How to find a trusted custom AI development company?" | same question |
| what is an AI app dev company | "What is an AI app development company?" | same question |
| choose an agent dev company | "How to choose an AI agent development company?" | same question |

**Mitigated, not solved.** Every answer on this page was rewritten from a
different angle and shares no sentence with its homepage counterpart — the
About versions are framed as questions to ask, fit criteria, evidence to
gather, and blast radius, where the homepage versions are checklists and
definitions. But two `FAQPage` nodes on one site targeting the same query
still split the signal, and Google will pick one of the two URLs itself.

**Recommended resolution:** remove those five entries from `homeFaqs` and let
`/about` own vetting intent, leaving the homepage its ten definitional, ROI,
and industry questions. That is a one-array edit in `src/lib/seo.ts` with no
component changes, because `FAQSection.astro` renders whatever the array
holds.

Not applied here: it changes a page outside this brief, and the homepage FAQ
is a live ranking asset. **This needs a decision before either page is
re-crawled.**

### 7.2 Named people — the biggest E-E-A-T gap on the site

This page currently asserts expertise institutionally ("a small, senior
engineering team") and never names anyone. Author-level identity is the
strongest signal an About page can carry, and it is the one thing that cannot
be written without the people's consent and details.

What to add, in order of value:

1. Two to four named engineers with role, a one-paragraph background, and a
   link to a public profile (GitHub, LinkedIn, conference talk, published
   writing).
2. `founder` and `employee` properties on `organizationSchema`, each a
   `Person` node with `name`, `jobTitle`, `sameAs`.
3. Author bylines on blog articles resolving to those same `Person` `@id`s,
   which converts fifteen orphaned articles into evidence for the entity.

### 7.3 Case studies with named outcomes

`/projects` shows systems; nothing on the site shows a *client* saying what
changed. One written case study — problem, constraint, approach, measured
result, attributable quote — would do more for conversion than any further
metadata work on this page. It would also unlock legitimate `Review` markup,
which is currently and correctly absent.

### 7.4 Fix the `/services` H1 whitespace bug

Live on the site right now: `src/components/services/ServicesHubHero.astro`
renders its H1 as **"AI Development ServicesBuilt for Production"** because
`compressHTML` strips the whitespace before the `<span>` (see §2). Same defect
class as the one fixed on this page. The fix is one expression:

```astro
AI Development Services{' '}
<span class="text-mute">Built for Production</span>
```

Not applied — it is another page's file. Worth doing before the next deploy;
it is a visible defect in the site's most commercially important heading.

### 7.5 Verify the remaining dates in the timeline — REQUIRED

**Unverified claims were shipped on this page once and had to be removed.**
What was removed:

- a hero facts strip reading *"Building software since 2019 / Registered in
  Vadodara, Gujarat, India / Clients: Remote, worldwide / Team shape: Small
  and senior"* — inferred, not confirmed, and at least one value was wrong;
- `organizationSchema.foundingDate: "2019"`;
- the phrase *"registered in Vadodara, Gujarat, India, and delivering software
  since 2019"* from the "Who is Auravon AI?" FAQ answer;
- invented 2025 and 2026 timeline milestones.

**Still outstanding:** the six remaining timeline entries (2019–2024) came
from the previous About page and were only reworded during this rewrite.
Nobody has confirmed them either. Someone at the company needs to read that
section and either confirm each entry or correct it.

The general rule for this page: it is where a buyer verifies claims, so
nothing goes on it that has not been checked. Plausible is not the same as
true, and a wrong fact here costs more than a missing one.

### 7.6 Sitemap priority

`/about` sits at `0.8` in `src/pages/sitemap.xml.ts`, below `/contact` (0.85)
and `/projects` (0.9). Now that it is the entity's `mainEntityOfPage`, 0.85 is
more defensible. Low impact — Google largely ignores the field — but it is a
one-line edit and it costs nothing to be consistent.

---

## 8. Where to edit what

| To change | Edit |
|---|---|
| Title, meta description, OG/Twitter copy | `ABOUT_SEO` in `src/lib/about-seo.ts` |
| Hero paragraphs (and the AboutPage `description`) | `ABOUT_INTRO`, `ABOUT_LEDE` in the same file |
| Any section's content | its exported array in `src/lib/about-seo.ts` |
| FAQ questions and answers | `aboutFaqs` — updates the page and the schema together |
| Company-wide schema fields | `organizationSchema` in `src/lib/seo.ts` |
| Which JSON-LD nodes are emitted | `src/pages/about.astro` |

The one rule that keeps this page compliant: **never hand-write a second copy
of a content array inside a `<script type="application/ld+json">`.** Structured
data is only valid when it describes what a visitor can actually see, and the
single-definition pattern is what guarantees that.
