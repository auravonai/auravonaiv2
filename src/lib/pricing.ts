/**
 * Starting prices — the one place a price is written down.
 *
 * Every "Starting from" on the site reads from here: the service spokes, the
 * marketing pages, the /services hub cards, /pricing, the portfolio pages and
 * the booking form. Change a number here and it changes everywhere, including
 * the `priceSpecification` in each page's Service schema.
 *
 * All amounts are INR, GST extra. They are entry points for the smallest
 * sensible version of each service in the Indian market, deliberately set low
 * to start conversations — the written quote after the scoping call is what a
 * client actually signs. Foreign-currency figures are never stored: the
 * converter in `components/pricing/PriceTag.astro` derives them in the browser.
 */

export type PriceUnit = 'project' | 'month' | 'year' | 'article';

export interface StartingPrice {
  /** INR, whole rupees, excluding GST. */
  inr: number;
  unit: PriceUnit;
  /** One line on what the starting tier actually includes. */
  includes: string;
}

/** Refundable booking amount collected before a scoping meeting. */
export const BOOKING_FEE_INR = 1000;

export const UNIT_SUFFIX: Record<PriceUnit, string> = {
  project: '',
  month: '/month',
  year: '/year',
  article: '/article',
};

/** `/services/<slug>` — the 15 engineering spokes. */
export const servicePrices: Record<string, StartingPrice> = {
  'ai-development': { inr: 49999, unit: 'project', includes: 'One focused AI feature — a chatbot, classifier or document workflow — integrated into your product.' },
  'ai-software-development': { inr: 59999, unit: 'project', includes: 'A small AI-powered web app: auth, one core AI workflow, admin view and deployment.' },
  'ai-consulting': { inr: 9999, unit: 'project', includes: 'A readiness review and a ranked list of AI use cases with rough costs.' },
  'ai-agent-development': { inr: 29999, unit: 'project', includes: 'One agent with 2–3 tool integrations (CRM, email, sheets or WhatsApp) and run logs.' },
  'generative-ai-development': { inr: 39999, unit: 'project', includes: 'A generative feature — content, image or document generation — with guardrails.' },
  'custom-ai-development': { inr: 49999, unit: 'project', includes: 'A custom model or RAG pipeline on your data, with an evaluation set.' },
  'custom-software-development': { inr: 39999, unit: 'project', includes: 'An internal tool or MVP with up to 5 screens, login, database and admin panel.' },
  'saas-development': { inr: 79999, unit: 'project', includes: 'A SaaS MVP: multi-user accounts, subscriptions, core workflow and admin.' },
  'web-application-development': { inr: 24999, unit: 'project', includes: 'A web app with up to 5 screens, auth, database and deployment.' },
  'mobile-application-development': { inr: 49999, unit: 'project', includes: 'A cross-platform (Android + iOS) app with up to 6 screens and a backend.' },
  'api-development': { inr: 14999, unit: 'project', includes: 'A documented REST API or one third-party integration, deployed.' },
  'cloud-devops': { inr: 9999, unit: 'project', includes: 'Hosting setup, CI/CD pipeline, SSL, backups and monitoring for one app.' },
  'maintenance-support': { inr: 2999, unit: 'month', includes: 'Monitoring, security updates, backups and small fixes for one site or app.' },
  'ui-ux-design': { inr: 9999, unit: 'project', includes: 'Up to 5 designed screens in Figma with a clickable prototype.' },
  'product-discovery': { inr: 7999, unit: 'project', includes: 'A 1-week scoping sprint: feature list, user flows, estimate and roadmap.' },
};

/** `/digital-marketing/<slug>` — category and sub-service pages. */
export const marketingPrices: Record<string, StartingPrice> = {
  'digital-marketing': { inr: 7999, unit: 'month', includes: 'SEO or ads management for one channel with a monthly report.' },
  seo: { inr: 6999, unit: 'month', includes: 'On-page SEO for 10 pages, technical fixes, 4 backlinks and a monthly report.' },
  'google-ads': { inr: 5999, unit: 'month', includes: 'Campaign setup and management. Ad spend is paid directly to Google.' },
  'meta-ads': { inr: 5999, unit: 'month', includes: 'Facebook + Instagram campaign management. Ad spend is paid to Meta.' },
  'gmb-optimization': { inr: 2999, unit: 'project', includes: 'Full Google Business Profile setup or clean-up, photos, categories and posts.' },
  'google-map-listing': { inr: 1499, unit: 'project', includes: 'A verified Google Maps listing with correct NAP details.' },
  'web-services': { inr: 7999, unit: 'project', includes: 'A responsive business website with up to 5 pages.' },
  'website-development': { inr: 7999, unit: 'project', includes: 'A responsive 5-page business website with contact form and basic SEO.' },
  'website-hosting': { inr: 2499, unit: 'year', includes: 'Fast managed hosting with SSL, backups and uptime monitoring.' },
  'devops-deployment': { inr: 4999, unit: 'project', includes: 'Deployment pipeline, domain, SSL and monitoring for one site.' },
  'ecommerce-development': { inr: 19999, unit: 'project', includes: 'An online store with up to 50 products, payments and order emails.' },
  'shopify-development': { inr: 14999, unit: 'project', includes: 'A Shopify store set up and themed, with up to 50 products and payments.' },
  'woocommerce-development': { inr: 12999, unit: 'project', includes: 'A WooCommerce store with up to 50 products, payments and shipping rules.' },
  'custom-ecommerce-development': { inr: 39999, unit: 'project', includes: 'A custom storefront with cart, checkout, payments and an admin panel.' },
  'ecommerce-account-management': { inr: 4999, unit: 'month', includes: 'Marketplace listings, pricing and order handling for one marketplace.' },
  'amazon-account-management': { inr: 4999, unit: 'month', includes: 'Amazon Seller Central management for up to 50 listings.' },
  'flipkart-account-management': { inr: 4999, unit: 'month', includes: 'Flipkart Seller Hub management for up to 50 listings.' },
  'meesho-account-management': { inr: 3999, unit: 'month', includes: 'Meesho catalogue and order management for up to 50 listings.' },
  'social-media-handling': { inr: 4999, unit: 'month', includes: '12 posts a month on one platform with captions and scheduling.' },
  'instagram-management': { inr: 4999, unit: 'month', includes: '12 posts and 4 reels a month, captions, hashtags and scheduling.' },
  'facebook-management': { inr: 3999, unit: 'month', includes: '12 posts a month with captions and page management.' },
  'social-media-ad-campaigns': { inr: 5999, unit: 'month', includes: 'Paid social campaign management. Ad spend is billed separately.' },
  'content-marketing': { inr: 3999, unit: 'month', includes: '4 SEO blog posts a month with keyword research.' },
  'seo-blog-writing': { inr: 999, unit: 'article', includes: 'One 1,000–1,200 word SEO article with keyword research.' },
  'website-content-writing': { inr: 2999, unit: 'project', includes: 'Copy for up to 5 website pages.' },
  'keyword-research': { inr: 2499, unit: 'project', includes: '100+ keyword research with search intent and page mapping.' },
  'graphic-design': { inr: 1999, unit: 'project', includes: 'A logo or a set of social creatives with 2 revision rounds.' },
  'brand-identity-design': { inr: 9999, unit: 'project', includes: 'Logo, colours, typography and a one-page brand guide.' },
  'logo-design': { inr: 1999, unit: 'project', includes: '3 logo concepts, 2 revisions and all source files.' },
  'social-media-creatives': { inr: 2999, unit: 'month', includes: '15 branded post designs a month.' },
  'business-consulting': { inr: 4999, unit: 'project', includes: 'A 2-hour strategy session with a written action plan.' },
  'business-strategy': { inr: 7999, unit: 'project', includes: 'A growth strategy document with 90-day priorities.' },
  'digital-growth-planning': { inr: 5999, unit: 'project', includes: 'A digital channel plan with budget split and KPIs.' },
  'market-research': { inr: 9999, unit: 'project', includes: 'Competitor and market report for one product or region.' },
};

export function servicePrice(slug: string): StartingPrice | undefined {
  return servicePrices[slug];
}

export function marketingPrice(slug: string): StartingPrice | undefined {
  return marketingPrices[slug];
}

/** `₹49,999` — Indian digit grouping, no decimals. */
export function formatInr(inr: number): string {
  return `₹${inr.toLocaleString('en-IN')}`;
}

/**
 * Schema.org `offers` node for a Service. `minPrice` on a
 * `PriceSpecification` is the documented way to say "from".
 */
export function offerSchema(price: StartingPrice, url: string) {
  return {
    '@type': 'Offer',
    url,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': price.unit === 'project' || price.unit === 'article'
        ? 'PriceSpecification'
        : 'UnitPriceSpecification',
      priceCurrency: 'INR',
      minPrice: price.inr,
      valueAddedTaxIncluded: false,
      ...(price.unit === 'month' ? { unitCode: 'MON' } : {}),
      ...(price.unit === 'year' ? { unitCode: 'ANN' } : {}),
    },
  };
}
