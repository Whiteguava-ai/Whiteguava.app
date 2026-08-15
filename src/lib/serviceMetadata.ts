import type { Metadata } from 'next';
import type { ServiceContent } from '@/data/services';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export function serviceMetadata(service: ServiceContent): Metadata {
  const url = `${SITE_URL}${service.path}`;
  const title = service.title;
  const description = service.description;

  return {
    title,
    description,
    alternates: {
      canonical: service.path,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
