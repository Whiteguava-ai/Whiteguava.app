import type { ServiceContent } from '@/data/services';
import {
  CONTACT_EMAILS,
  SERVICE_LINKS,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from '@/lib/site';

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/brand/whiteguava-logo.png`,
    },
    email: CONTACT_EMAILS[0],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    sameAs: [...SOCIAL_LINKS],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };
}

export function professionalServiceSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/brand/whiteguava-logo.png`,
    email: CONTACT_EMAILS[0],
    description:
      'Bengaluru-based AI software development company building AI agents, automation systems, WhatsApp AI, and custom business software.',
    areaServed: 'Worldwide',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'WhiteGuava services',
      itemListElement: SERVICE_LINKS.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.label,
          url: `${SITE_URL}${service.href}`,
        },
      })),
    },
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[], id = `${SITE_URL}/#faq`) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Worldwide',
  };
}

export function servicePageGraph(service: ServiceContent) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema({
        name: service.name,
        description: service.description,
        path: service.path,
      }),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: service.name, path: service.path },
      ]),
      faqPageSchema(service.faqs, `${SITE_URL}${service.path}#faq`),
    ],
  };
}

export function siteGraph(extra: Record<string, unknown>[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      websiteSchema(),
      professionalServiceSchema(),
      ...extra,
    ],
  };
}
