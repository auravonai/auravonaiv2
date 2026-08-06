/**
 * Site-wide constants.
 *
 * These values were repeated inline across the Next.js reference (the
 * WhatsApp deep link alone appeared in four components). Centralising them
 * means a phone number or address change is a one-line edit.
 */

export const SITE_NAME = 'Auravon AI';
export const SITE_URL = 'https://auravonai.com';

export const WHATSAPP_NUMBER = '918814012395';
export const WHATSAPP_DISPLAY = '+91 88140 12395';
export const WHATSAPP_MESSAGE =
  'Hi Auravon AI, I want to discuss a project';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

/** Service-page variant of the WhatsApp deep link. */
export const SERVICE_ENQUIRY_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi Auravon, I want to enquire about your services',
)}`;

export const EMAILS = [
  { type: 'Support', addr: 'support@auravonai.com' },
  { type: 'Projects', addr: 'projects@auravonai.com' },
  { type: 'Business', addr: 'contacts@auravonai.com' },
  { type: 'Careers', addr: 'hr@auravonai.com' },
] as const;

/**
 * The only social profiles that exist. Confirmed by the user 2026-08-06.
 *
 * GitHub was listed here and in two `sameAs` blocks pointing at
 * github.com/auravonai. It is gone: `sameAs` is a claim to Google that an
 * entity owns a profile, so listing one that is not maintained is worse than
 * listing nothing.
 *
 * `icon` names a mark in `components/ui/BrandIcon.astro`, not a Lucide icon —
 * see the note in that file for why the real logos are drawn there.
 */
export const SOCIALS = [
  {
    label: 'Instagram',
    // Canonical profile URL. The link the user supplied carried an `?igsh=`
    // share token, which is per-share attribution rather than part of the
    // address; it is stripped here so the footer and the `sameAs` in
    // lib/seo.ts nominate the same clean URL.
    href: 'https://www.instagram.com/auravon_ai/',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/auravon-ai-tech/',
    icon: 'linkedin',
  },
  { label: 'X', href: 'https://x.com/auravonai', icon: 'x' },
  {
    label: 'Chat on WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: 'whatsapp',
  },
] as const;

export const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy', icon: 'Shield' },
  { label: 'Terms & Conditions', href: '/terms', icon: 'FileText' },
  { label: 'Refund Policy', href: '/refund', icon: 'RotateCcw' },
] as const;
