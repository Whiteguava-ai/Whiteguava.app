import type { Metadata } from 'next';
import BlogIndex from '@/components/BlogIndex';
import JsonLd from '@/components/JsonLd';
import { blogPostList } from '@/data/blog';
import { breadcrumbSchema } from '@/lib/schema';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const title = 'Blog: AI Agents, Automation & WhatsApp AI Insights';
const description =
  'Practical guides on AI agents, AI automation, WhatsApp AI, and document AI for businesses — written by the team building them at WhiteGuava.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog' },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/blog`,
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

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([
      { name: SITE_NAME, path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={graph} />
      <BlogIndex posts={blogPostList} />
    </>
  );
}
