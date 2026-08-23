import type { MetadataRoute } from 'next';
import { blogPostList } from '@/data/blog';
import { SERVICE_LINKS, SITE_URL } from '@/lib/site';

/**
 * Pin each static page's lastmod to the date its content actually last
 * changed — bump the specific constant by hand when you edit that page.
 * Using `new Date()` here stamps every page "modified right now" on every
 * crawl or rebuild regardless of whether anything changed, and Google has
 * said it will start distrusting/ignoring lastmod site-wide if it detects
 * that kind of fabricated freshness.
 */
const HOME_LAST_MODIFIED = new Date('2026-08-23');
const ABOUT_LAST_MODIFIED = new Date('2026-08-23');
const CONTACT_LAST_MODIFIED = new Date('2026-08-23');
const SERVICES_LAST_MODIFIED = new Date('2026-08-23');
const LEGAL_LAST_MODIFIED = new Date('2026-08-23');
const BLOG_INDEX_LAST_MODIFIED = new Date('2026-08-20');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/blog`,
      lastModified: BLOG_INDEX_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPostList.map((post) => ({
      url: `${SITE_URL}${post.path}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/`,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: ABOUT_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: CONTACT_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...SERVICE_LINKS.map((service) => ({
      url: `${SITE_URL}${service.href}`,
      lastModified: SERVICES_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
}
