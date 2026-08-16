export const SITE_URL = 'https://www.thewhiteguava.in';
export const SITE_NAME = 'WhiteGuava';
export const SITE_TAGLINE = 'AI + Software + Automation';
export const SITE_DESCRIPTION =
  'WhiteGuava is an AI software development company in Bengaluru. We build AI agents, automation systems, WhatsApp AI, and custom business software for businesses worldwide.';

export const SERVICE_PATHS = {
  software: '/services/ai-software-development',
  agents: '/services/ai-agents',
  automation: '/services/ai-automation',
  whatsapp: '/services/whatsapp-ai',
  document: '/services/document-ai',
} as const;

export const NAV_LINKS = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#works', label: 'Works' },
  { href: '/#process', label: 'Process' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
] as const;

export const FOOTER_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#works', label: 'Works' },
  { href: '/#process', label: 'Process' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SERVICE_LINKS = [
  { href: SERVICE_PATHS.software, label: 'AI Software' },
  { href: SERVICE_PATHS.agents, label: 'AI Agents' },
  { href: SERVICE_PATHS.whatsapp, label: 'WhatsApp AI' },
  { href: SERVICE_PATHS.automation, label: 'AI Automation' },
  { href: SERVICE_PATHS.document, label: 'Document AI' },
] as const;

export const SOCIAL_PROFILES = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/whiteguava' },
  { name: 'Instagram', href: 'https://www.instagram.com/whiteguava.ai' },
  { name: 'X', href: 'https://x.com/wearewhiteguava' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61593178927500' },
] as const;

export const SOCIAL_LINKS = SOCIAL_PROFILES.map((profile) => profile.href);

export const CONTACT_EMAILS = [
  'admin@thewhiteguava.in',
  'murugavelj@thewhiteguava.in',
] as const;

export const BRAND_KNOWS_ABOUT = [
  'AI agents',
  'AI automation',
  'WhatsApp AI',
  'Document AI',
  'RAG',
  'AI software development',
  'AI integration',
] as const;
