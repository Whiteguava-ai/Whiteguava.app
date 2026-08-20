import type { Metadata } from 'next';
import type { BlogPost } from '@/data/blog';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export function postMetadata(post: BlogPost): Metadata {
  const url = `${SITE_URL}${post.path}`;
  const ogTitle = `${post.metaTitle} | ${SITE_NAME}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: post.path,
    },
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    openGraph: {
      title: ogTitle,
      description: post.metaDescription,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: [...post.tags],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: post.metaDescription,
    },
  };
}
