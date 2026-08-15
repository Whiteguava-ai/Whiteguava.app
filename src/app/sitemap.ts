import type { MetadataRoute } from 'next';
import { SERVICE_LINKS, SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...SERVICE_LINKS.map((service) => ({
      url: `${SITE_URL}${service.href}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
}
