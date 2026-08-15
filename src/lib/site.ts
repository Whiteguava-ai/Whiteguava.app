export const SITE_URL = 'https://www.thewhiteguava.in';
export const SITE_NAME = 'WhiteGuava';
export const SITE_TAGLINE = 'AI + Software + Automation';

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
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#works', label: 'Works' },
  { href: '/#process', label: 'Process' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
] as const;

export const SERVICE_LINKS = [
  { href: SERVICE_PATHS.software, label: 'AI Software' },
  { href: SERVICE_PATHS.agents, label: 'AI Agents' },
  { href: SERVICE_PATHS.whatsapp, label: 'WhatsApp AI' },
  { href: SERVICE_PATHS.automation, label: 'AI Automation' },
  { href: SERVICE_PATHS.document, label: 'Document AI' },
] as const;

export const SOCIAL_LINKS = [
  'https://www.linkedin.com/company/whiteguava/about/',
  'https://www.instagram.com/whiteguava.ai',
  'https://x.com/wearewhiteguava',
  'https://www.facebook.com/profile.php?id=61593178927500',
] as const;

export const CONTACT_EMAILS = [
  'admin@thewhiteguava.in',
  'nithin@thewhiteguava.in',
  'saravana@thewhiteguava.in',
  'murugavelj@thewhiteguava.in',
] as const;
