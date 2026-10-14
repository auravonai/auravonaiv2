/**
 * Portfolio — the eight live builds shown on /work.
 *
 * These are concept builds: complete, working products made for fictional
 * businesses to show what Auravon delivers. The pages say so plainly (see
 * `CONCEPT_NOTE`). Calling them client work would be the fastest way to lose a
 * buyer who checks, and a working demo they can click through is stronger
 * proof than an anonymous testimonial anyway.
 *
 * Media lives in `public/media/work/<slug>/` and is produced from real
 * screen captures of each live demo:
 *   walkthrough.mp4   silent walkthrough, 1280×600, H.264
 *   poster.webp       first frame, used as the video poster and card image
 *   shot-N(.sm).webp  gallery stills at 1280w and 640w
 *
 * Each record's `service` points at the pricing + booking flow, so "Want one
 * like this?" pre-selects the right service on /start.
 */

export interface WorkFeature {
  title: string;
  description: string;
}

export interface WorkShot {
  /** 1-based index into shot-N.webp. */
  n: number;
  alt: string;
  caption: string;
}

export interface WorkProject {
  slug: string;
  name: string;
  /** Card eyebrow, e.g. "Healthcare · Website + booking engine". */
  kind: string;
  industry: string;
  /** `platform` = multi-sided product with admin; `website` = business site. */
  category: 'platform' | 'website';
  /** One line for cards. */
  tagline: string;
  /** Opening paragraph of the detail page, 45–70 words. */
  summary: string;
  liveUrl: string;
  /** Path to try first, shown under the live button. */
  tryThis: string;
  /** Headline numbers that are true of the build itself, never invented traction. */
  facts: { label: string; value: string }[];
  features: WorkFeature[];
  /** Platforms only: what the operator sees. */
  adminFeatures?: string[];
  stack: string[];
  shots: WorkShot[];
  /** Service slug (pricing.ts) this build maps to. */
  service: string;
  /** Starting price for a build like this one, INR. */
  priceFrom: number;
  /** Seconds — rendered into the page so buyers know what they are pressing play on. */
  videoSeconds: number;
  seo: {
    title: string;
    description: string;
  };
}

export const CONCEPT_NOTE =
  'Concept build by Auravon AI for a fictional brand. Business names, people, reviews and figures inside the demo are illustrative.';

export const workProjects: WorkProject[] = [
  {
    slug: 'vyra-short-drama-platform',
    name: 'VYRA',
    kind: 'Entertainment · Streaming platform',
    industry: 'Media & OTT',
    category: 'platform',
    tagline: 'A vertical short-drama streaming app with coins, memberships and a full admin studio.',
    summary:
      'VYRA is a short-drama streaming platform in the style of ReelShort and Kuku TV: vertical episodes, a swipeable shorts feed, coin-based episode unlocks, premium memberships and a complete admin studio for managing dramas, users, payments and moderation. It shows the full product a streaming founder needs to pitch, test with users or hand to investors.',
    liveUrl: 'https://vyra-shortdrama-demo.vercel.app/',
    tryThis: 'Open a drama, play episode 1, then click Admin in the top bar.',
    facts: [
      { label: 'Admin modules', value: '13' },
      { label: 'Demo dramas', value: '24' },
      { label: 'Monetisation', value: 'Coins + plans' },
    ],
    features: [
      { title: 'Vertical episode player', description: 'Full-screen 9:16 player with an episode grid, free and locked episodes, likes, share and save.' },
      { title: 'Coin economy', description: 'Wallet balance, coin packs and per-episode unlocks — the monetisation model short-drama apps run on.' },
      { title: 'Memberships', description: 'Free, Premium and VIP plans with monthly/yearly toggle and plan benefits.' },
      { title: 'Shorts feed', description: 'A swipeable feed of clips that funnels viewers into full episodes.' },
      { title: 'Discovery', description: 'Featured carousel, continue watching, trending, categories, search and watch history.' },
      { title: 'Notifications & watchlist', description: 'Bell notifications, a watchlist and resume-where-you-left-off on every drama.' },
    ],
    adminFeatures: [
      'Dashboard with users, revenue, coins and subscription KPIs',
      'Drama and episode management with publish / unpublish',
      'Users, coins, transactions and refunds',
      'Subscriptions, comments moderation and abuse reports',
      'Push notifications, analytics and platform settings',
    ],
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Hash-routed SPA', 'Custom SVG charts', 'localStorage state'],
    shots: [
      { n: 1, alt: 'VYRA home page with featured drama carousel', caption: 'Home — featured carousel and phone preview' },
      { n: 2, alt: 'VYRA drama detail page with episode list', caption: 'Drama page with free and coin-locked episodes' },
      { n: 3, alt: 'VYRA vertical video player with episode grid', caption: 'Vertical player and episode grid' },
      { n: 4, alt: 'VYRA premium membership plans', caption: 'Membership plans' },
      { n: 5, alt: 'VYRA admin dashboard with KPIs and charts', caption: 'Admin studio — platform dashboard' },
      { n: 6, alt: 'VYRA admin drama management table', caption: 'Admin — drama management' },
      { n: 7, alt: 'VYRA admin payments and refunds table', caption: 'Admin — payments and refunds' },
    ],
    service: 'saas-development',
    priceFrom: 99999,
    videoSeconds: 28,
    seo: {
      title: 'Short Drama App Development — VYRA Case Study | Auravon AI',
      description:
        'VYRA: a vertical short-drama streaming platform with coin unlocks, memberships, shorts feed and a 13-module admin studio. Live demo, video walkthrough and pricing.',
    },
  },
  {
    slug: 'anvaya-matrimony-platform',
    name: 'Anvaya',
    kind: 'Matrimony · Matchmaking platform',
    industry: 'Matrimony & dating',
    category: 'platform',
    tagline: 'A compatibility-led matrimony platform with verification, chat and an admin console.',
    summary:
      'Anvaya is a premium matrimonial platform built around compatibility rather than paid placement. Members create a profile in eight steps, get ID-verified, discover matches with a compatibility score, express interest, chat and start video calls. Operators run everything from an admin console covering moderation, KYC review, subscriptions, payments and safety reports.',
    liveUrl: 'https://anvaya-matrimony-demo.vercel.app/#/',
    tryThis: 'Open Ananya Sharma’s profile, press Express Interest, then visit the Admin console.',
    facts: [
      { label: 'Profile steps', value: '8' },
      { label: 'Admin modules', value: '14' },
      { label: 'Plans', value: '3 tiers' },
    ],
    features: [
      { title: 'Compatibility scoring', description: 'Every match shows a percentage and a “why you match” breakdown — values, lifestyle and career.' },
      { title: 'Verified-first profiles', description: 'Phone, email and ID verification with a selfie match, shown as badges on each profile.' },
      { title: 'Discover with filters', description: 'Age, height, location, community, education and profession filters with saved searches.' },
      { title: 'Interests & private chat', description: 'Express interest, accept or decline, then message and start a video call once connected.' },
      { title: 'OTP sign-in', description: 'Mobile or email one-time-code login, no passwords to remember.' },
      { title: 'Memberships', description: 'Essential, Premium and Elite plans with monthly, 3-month and 6-month billing.' },
    ],
    adminFeatures: [
      'Dashboard with registrations, matches, interests and revenue',
      'Profile moderation and ID verification queue with selfie match',
      'Abuse reports and safety review',
      'Subscriptions, payments and refunds',
      'Notifications, content management and analytics',
    ],
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Hash-routed SPA', 'Custom SVG charts', 'localStorage state'],
    shots: [
      { n: 1, alt: 'Anvaya matrimony home page', caption: 'Home — compatibility-led matchmaking' },
      { n: 2, alt: 'Anvaya discover page with filters and match scores', caption: 'Discover with filters and match scores' },
      { n: 3, alt: 'Anvaya member profile with 92% compatibility', caption: 'Profile with verification and compatibility' },
      { n: 4, alt: 'Anvaya private messaging screen', caption: 'Private messaging with video call' },
      { n: 5, alt: 'Anvaya membership plans', caption: 'Membership plans' },
      { n: 6, alt: 'Anvaya admin dashboard', caption: 'Admin console — dashboard' },
      { n: 7, alt: 'Anvaya admin ID verification queue', caption: 'Admin — ID verification queue' },
    ],
    service: 'saas-development',
    priceFrom: 89999,
    videoSeconds: 25,
    seo: {
      title: 'Matrimony App Development — Anvaya Case Study | Auravon AI',
      description:
        'Anvaya: a matrimony platform with compatibility scores, ID verification, chat, video calls, memberships and a full admin console. Live demo, video and pricing.',
    },
  },
  {
    slug: 'neelami-auction-platform',
    name: 'Neelami',
    kind: 'Marketplace · Online auctions',
    industry: 'Automotive & real estate',
    category: 'platform',
    tagline: 'A live auction marketplace for vehicles and bank-auction properties, with KYC and EMD.',
    summary:
      'Neelami is a digital auction marketplace for bank-repossessed vehicles and SARFAESI property auctions. Bidders browse live and upcoming lots, complete KYC, pay the earnest money deposit, place bids or set an auto-bid, and pay for won lots online. An operations console handles auctions, KYC approvals, payments, documents, inspections and reports.',
    liveUrl: 'https://neelami-auction-demo.vercel.app/#/',
    tryThis: 'Open the BMW X5, press Place Bid, then use the Demo Mode menu to simulate a rival outbid.',
    facts: [
      { label: 'Lot types', value: 'Vehicles + property' },
      { label: 'Admin modules', value: '14' },
      { label: 'Bid modes', value: 'Manual + auto' },
    ],
    features: [
      { title: 'Live bidding', description: 'Countdown timers, reserve progress, minimum next bid, bid increments and live bid activity.' },
      { title: 'Auto-bid', description: 'Bidders set a maximum and the system responds to rival bids for them — with outbid alerts.' },
      { title: 'KYC & EMD', description: 'Document upload, verification status and earnest-money deposit before bidding opens.' },
      { title: 'Property auctions', description: 'Bank-auction listings with sale notices, inspection scheduling and enquiries.' },
      { title: 'Bidder dashboard', description: 'My bids, won auctions, watchlist, payments, invoices, documents and notifications.' },
      { title: 'Search & filters', description: 'Filter by status, location, make, fuel, budget and category, with sort by ending soonest.' },
    ],
    adminFeatures: [
      'Marketplace dashboard with live auctions, bids and auction value',
      'Create, pause and close auctions; add vehicles and properties',
      'KYC review, payments and document management',
      'Enquiries, inspections and broadcast notifications',
      'Reports with CSV export',
    ],
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Hash-routed SPA', 'Lucide icons', 'localStorage state'],
    shots: [
      { n: 1, alt: 'Neelami auction home page with live bid activity', caption: 'Home — live bid activity' },
      { n: 2, alt: 'Neelami vehicle auction listing with filters', caption: 'Vehicle auctions with filters' },
      { n: 3, alt: 'Neelami live auction page for a BMW X5', caption: 'Live auction — countdown, reserve and EMD' },
      { n: 4, alt: 'Neelami bank auction property page', caption: 'Bank-auction property listing' },
      { n: 5, alt: 'Neelami bidder KYC workflow', caption: 'Bidder KYC workflow' },
      { n: 6, alt: 'Neelami admin dashboard', caption: 'Admin console — dashboard' },
      { n: 7, alt: 'Neelami admin KYC management', caption: 'Admin — KYC review' },
    ],
    service: 'saas-development',
    priceFrom: 99999,
    videoSeconds: 22,
    seo: {
      title: 'Online Auction Platform Development — Neelami | Auravon AI',
      description:
        'Neelami: a live auction marketplace for vehicles and bank-auction property with auto-bid, KYC, EMD and an operations console. Live demo, video and pricing.',
    },
  },
  {
    slug: 'pearlcraft-dental',
    name: 'Pearlcraft Dental Studio',
    kind: 'Healthcare · Website + booking engine',
    industry: 'Healthcare & clinics',
    category: 'website',
    tagline: 'A dental clinic website with online booking, a patient portal and a clinic dashboard.',
    summary:
      'Pearlcraft is a premium dental clinic website with a real booking engine behind it. Patients pick a treatment, a doctor and a live slot, verify by OTP and book in about a minute. A patient portal handles reschedules and invoices, and the clinic runs its day from a role-based dashboard with schedules, patient records, billing and automated reminders.',
    liveUrl: 'https://pearlcraft-dental.vercel.app/',
    tryThis: 'Press Book Appointment and walk through the booking flow.',
    facts: [
      { label: 'Treatment pages', value: '15' },
      { label: 'Staff roles', value: '3' },
      { label: 'Backend', value: 'Supabase' },
    ],
    features: [
      { title: 'Online booking engine', description: 'Treatment → doctor → live calendar → details → OTP → confirmation, with double-booking protection.' },
      { title: 'Patient portal', description: 'OTP login, upcoming and past visits, reschedule or cancel, treatment progress and invoices.' },
      { title: 'Clinic dashboard', description: 'Admin, doctor and receptionist roles with a drag-to-reschedule day view and walk-ins.' },
      { title: 'Billing & invoices', description: 'Treatment plans, GST-aware billing, UPI/card/cash and PDF invoices.' },
      { title: 'Automations', description: 'Reminders, feedback requests, recalls and birthday messages on a schedule.' },
      { title: 'SEO-ready content', description: '15 treatment pages, doctor profiles, before/after gallery, transparent pricing and a blog.' },
    ],
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Supabase (Postgres, Auth, Edge Functions)', 'React Hook Form + Zod'],
    shots: [
      { n: 1, alt: 'Pearlcraft dental clinic home page hero', caption: 'Home with instant availability check' },
      { n: 2, alt: 'Pearlcraft treatments with transparent starting prices', caption: 'Treatments with transparent pricing' },
      { n: 3, alt: 'Pearlcraft why choose us section', caption: 'Why-us section' },
      { n: 4, alt: 'Pearlcraft doctor profiles with next available slot', caption: 'Doctors with next available slot' },
      { n: 5, alt: 'Pearlcraft before and after smile gallery', caption: 'Before/after smile gallery' },
    ],
    service: 'web-application-development',
    priceFrom: 14999,
    videoSeconds: 18,
    seo: {
      title: 'Dental Clinic Website with Online Booking — Pearlcraft | Auravon AI',
      description:
        'Pearlcraft: a dental clinic website with online appointment booking, patient portal, clinic dashboard and billing. See the live demo, video and starting price.',
    },
  },
  {
    slug: 'saffron-and-smoke',
    name: 'Saffron & Smoke',
    kind: 'Hospitality · Restaurant website + reservations',
    industry: 'Restaurants & hospitality',
    category: 'website',
    tagline: 'A fine-dining restaurant website with live table booking and a staff dashboard.',
    summary:
      'Saffron & Smoke is a restaurant website for a modern Indian grill and bar, with a working table-reservation engine. Guests choose a date, party size and slot and get an instant confirmation; staff see bookings arrive live, assign tables and manage the menu from a dashboard. Reminder and thank-you emails go out automatically.',
    liveUrl: 'https://saffron-and-smoke-delta.vercel.app/',
    tryThis: 'Press Reserve a Table and pick a dinner slot.',
    facts: [
      { label: 'Menu items', value: '63' },
      { label: 'Tables managed', value: '18' },
      { label: 'Backend', value: 'Supabase' },
    ],
    features: [
      { title: 'Table reservations', description: 'Live slots for lunch and dinner, party size, seating preference and instant confirmation.' },
      { title: 'Smart table assignment', description: 'Smallest suitable table first, private dining for larger parties, no double-booking.' },
      { title: 'Staff dashboard', description: 'Real-time booking alerts, table plan, guest notes, menu management and reports.' },
      { title: 'Automated emails', description: 'Branded confirmation, reminder and thank-you emails with a review link.' },
      { title: 'Menu & story', description: 'Signature dishes, full menu, experiences, private dining and the chef’s story.' },
      { title: 'Atmosphere-first design', description: 'Dark, cinematic layout with smooth scrolling that sells the evening, not just the food.' },
    ],
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'Supabase (Postgres, Edge Functions)'],
    shots: [
      { n: 1, alt: 'Saffron and Smoke restaurant hero', caption: 'Hero with live open/closed status' },
      { n: 2, alt: 'Saffron and Smoke chef story section', caption: 'Chef story' },
      { n: 3, alt: 'Saffron and Smoke signature dishes carousel', caption: 'Signature dishes carousel' },
      { n: 4, alt: 'Saffron and Smoke experiences and guest stories', caption: 'Experiences and guest stories' },
      { n: 5, alt: 'Saffron and Smoke Instagram feed section', caption: 'Social feed' },
    ],
    service: 'web-application-development',
    priceFrom: 14999,
    videoSeconds: 18,
    seo: {
      title: 'Restaurant Website with Table Booking — Saffron & Smoke | Auravon AI',
      description:
        'Saffron & Smoke: a restaurant website with live table reservations, smart table assignment, staff dashboard and automated emails. Live demo, video and pricing.',
    },
  },
  {
    slug: 'dailynest',
    name: 'DailyNest',
    kind: 'E-commerce · D2C storefront + admin',
    industry: 'Retail & e-commerce',
    category: 'website',
    tagline: 'A household-essentials online store with checkout, accounts and a full admin panel.',
    summary:
      'DailyNest is a complete e-commerce store for personal-care and household essentials. Shoppers search and filter the catalogue, use coupons, check delivery by pincode and pay by UPI, card or cash on delivery through a four-step checkout. Store staff manage orders, products, inventory, coupons and reviews from an admin panel, and every change appears on the storefront immediately.',
    liveUrl: 'https://dailynest-six.vercel.app/',
    tryThis: 'Add two products to the cart, apply a coupon and go through checkout.',
    facts: [
      { label: 'Storefront pages', value: '9' },
      { label: 'Admin sections', value: '11' },
      { label: 'Payment options', value: 'UPI · Card · COD' },
    ],
    features: [
      { title: 'Shop & filters', description: 'Search plus category, price, brand, rating and availability filters with shareable URLs.' },
      { title: 'Product pages', description: 'Image gallery with zoom, pack-size variants, pincode checker, offers and reviews.' },
      { title: 'Cart & coupons', description: 'Cart drawer, undo remove, move to wishlist, coupons and a free-delivery progress bar.' },
      { title: '4-step checkout', description: 'Address with pincode autofill, delivery speed, UPI / card / COD and order review.' },
      { title: 'Customer accounts', description: 'Order history, cancel and buy again, saved addresses and a wishlist.' },
      { title: 'Merchandising', description: 'Deal of the day with countdown, shop-the-room, bundles and seasonal sale banners.' },
    ],
    adminFeatures: [
      'Dashboard with revenue, orders, top products and low stock',
      'Orders by status, products with photo upload and CSV',
      'Categories, customers, inventory and restock',
      'Coupons, review moderation, analytics and settings',
    ],
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'No build step', 'Self-hosted WebP imagery'],
    shots: [
      { n: 1, alt: 'DailyNest e-commerce home page', caption: 'Home with search and live order toasts' },
      { n: 2, alt: 'DailyNest shop by category', caption: 'Trust strip, brands and categories' },
      { n: 3, alt: 'DailyNest deal of the day with countdown', caption: 'Deal of the day with countdown' },
      { n: 4, alt: 'DailyNest featured product grid', caption: 'Product grid with offers and quick view' },
      { n: 5, alt: 'DailyNest shop the room feature', caption: 'Shop-the-room bundles' },
    ],
    service: 'custom-ecommerce-development',
    priceFrom: 29999,
    videoSeconds: 18,
    seo: {
      title: 'E-commerce Website Development — DailyNest Case Study | Auravon AI',
      description:
        'DailyNest: an online store with filters, cart, coupons, UPI/card/COD checkout, customer accounts and an 11-section admin panel. Live demo, video and pricing.',
    },
  },
  {
    slug: 'nexora-polymers',
    name: 'Nexora Polymers',
    kind: 'Manufacturing · B2B catalogue + RFQ',
    industry: 'Manufacturing & industrial',
    category: 'website',
    tagline: 'A B2B manufacturer website with a 56-product catalogue, datasheets and quote requests.',
    summary:
      'Nexora Polymers is a website for an industrial component manufacturer that sells to engineering and purchase teams. Buyers browse eight product families, configure colour and size, download datasheets and send a three-step request for quote with drawings attached. Every product render and technical drawing is generated in code, so the catalogue grows without a photo shoot.',
    liveUrl: 'https://nexora-polymers.vercel.app/',
    tryThis: 'Open Products → Thread Protection Cap, change the colour, then Request a Quote.',
    facts: [
      { label: 'Products', value: '56' },
      { label: 'Product families', value: '8' },
      { label: 'RFQ flow', value: '3 steps' },
    ],
    features: [
      { title: 'Product catalogue', description: '56 products in 8 families with filters and search that sync to the URL.' },
      { title: 'Generated product renders', description: 'Studio views, colour variants and technical drawings drawn as SVG — no photography needed.' },
      { title: 'Request for quote', description: 'A 3-step RFQ with quantity, specs and file upload, issuing a reference number.' },
      { title: 'Datasheets & resources', description: 'Downloadable datasheets, catalogue and documentation for engineers.' },
      { title: 'Industries & capabilities', description: 'Sector pages, process pages and a 7-stage manufacturing journey.' },
      { title: 'Mega menu & sales chat', description: 'Product mega menu, global search and a chat-with-sales widget.' },
    ],
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Hash-routed SPA', 'Generated SVG product art', 'Lucide icons'],
    shots: [
      { n: 1, alt: 'Nexora Polymers manufacturer home page', caption: 'Home with featured component' },
      { n: 2, alt: 'Nexora product families grid', caption: 'Eight product families' },
      { n: 3, alt: 'Nexora catalogue products with request quote', caption: 'Catalogue with MOQ and quote buttons' },
      { n: 4, alt: 'Nexora in-house capabilities', caption: 'In-house capabilities' },
      { n: 5, alt: 'Nexora seven-stage manufacturing journey', caption: 'Seven-stage manufacturing journey' },
    ],
    service: 'web-application-development',
    priceFrom: 19999,
    videoSeconds: 18,
    seo: {
      title: 'B2B Manufacturer Website with RFQ — Nexora Polymers | Auravon AI',
      description:
        'Nexora Polymers: a B2B manufacturing website with a 56-product catalogue, generated product renders, datasheets and a 3-step RFQ. Live demo, video and pricing.',
    },
  },
  {
    slug: 'makeready-studio',
    name: 'MAKEREADY',
    kind: 'Apparel · Brand website + studio console',
    industry: 'Apparel & merchandise',
    category: 'website',
    tagline: 'A bold apparel and print studio website with a garment builder and studio console.',
    summary:
      'MAKEREADY is a website for a custom apparel, merchandise and print studio. It sells with an editorial, poster-style design, a pinned case-study scroller and a build-your-apparel tool that previews prints on a garment mockup. Quote requests land in a studio console where the team manages orders, enquiries, products, portfolio and site content with draft-and-publish.',
    liveUrl: 'https://makeready-studio-pi.vercel.app/',
    tryThis: 'Open Build, design a tee, then Start a Project.',
    facts: [
      { label: 'Case studies', value: '7' },
      { label: 'Print methods', value: '5' },
      { label: 'Console', value: 'Orders + CMS' },
    ],
    features: [
      { title: 'Build your apparel', description: 'Pick a garment, colour and print method and preview the result on a live SVG mockup.' },
      { title: 'Case-study scroller', description: 'A pinned horizontal scroller of selected work with per-project pages.' },
      { title: 'Quote requests', description: 'Start-a-project and product enquiries flow straight into the studio console.' },
      { title: 'Studio console', description: 'Orders, enquiries, products, portfolio, testimonials and FAQs in one admin.' },
      { title: 'Content publishing', description: 'Draft → preview → publish for site content, plus brand-colour settings.' },
      { title: 'Editorial design', description: 'Oversized type, image-in-text headlines and motion that make the brand memorable.' },
    ],
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'SVG mockup engine', 'Hash-routed SPA'],
    shots: [
      { n: 1, alt: 'MAKEREADY apparel studio hero', caption: 'Full-bleed hero' },
      { n: 2, alt: 'MAKEREADY studio introduction', caption: 'Editorial studio introduction' },
      { n: 3, alt: 'MAKEREADY selected work scroller', caption: 'Selected-work scroller' },
      { n: 4, alt: 'MAKEREADY services list', caption: 'Services index' },
    ],
    service: 'web-application-development',
    priceFrom: 14999,
    videoSeconds: 13,
    seo: {
      title: 'Apparel Brand Website Design — MAKEREADY Case Study | Auravon AI',
      description:
        'MAKEREADY: an apparel and print studio website with a garment builder, case-study scroller, quote requests and a studio console. Live demo, video and pricing.',
    },
  },
];

export const workPath = (slug?: string) => (slug ? `/work/${slug}` : '/work');

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((p) => p.slug === slug);
}

export const media = (slug: string, file: string) => `/media/work/${slug}/${file}`;
