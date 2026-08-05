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

export const SOCIALS = [
  { label: 'X / Twitter', href: 'https://x.com/auravonai', icon: 'X' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/auravon-ai-tech/',
    icon: 'Globe',
  },
  { label: 'GitHub', href: 'https://github.com/auravonai', icon: 'Code2' },
  { label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}`, icon: 'MessageCircle' },
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
