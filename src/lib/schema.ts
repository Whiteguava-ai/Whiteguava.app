import type { ServiceContent } from '@/data/services';
import {
  BRAND_KNOWS_ABOUT,
  CONTACT_EMAILS,
  SERVICE_LINKS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from '@/lib/site';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/brand/whiteguava-logo.png`;

export function organizationSchema() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAILS[0],
    image: LOGO_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      contentUrl: LOGO_URL,
      caption: SITE_NAME,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: CONTACT_EMAILS[0],
      url: `${SITE_URL}/contact`,
      availableLanguage: ['English'],
    },
    sameAs: [...SOCIAL_LINKS],
    knowsAbout: [...BRAND_KNOWS_ABOUT],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${SITE_NAME} services`,
      itemListElement: SERVICE_LINKS.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.label,
          url: `${SITE_URL}${service.href}`,
          provider: { '@id': ORG_ID },
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
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
      item: item.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
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
    provider: { '@id': ORG_ID },
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  };
}

export function aboutPageSchema() {
  return {
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about#page`,
    url: `${SITE_URL}/about`,
    name: `About ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  };
}

export function contactPageSchema() {
  return {
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#page`,
    url: `${SITE_URL}/contact`,
    name: `Contact ${SITE_NAME}`,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
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
        { name: SITE_NAME, path: '/' },
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
      ...extra,
    ],
  };
}
