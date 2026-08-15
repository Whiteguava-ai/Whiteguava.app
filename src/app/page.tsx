import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import JsonLd from '@/components/JsonLd';
import { homepageFaqs } from '@/data/faqs';
import { faqPageSchema } from '@/lib/schema';
import { SITE_DESCRIPTION, SITE_URL } from '@/lib/site';

const title = 'WhiteGuava | AI Agents, Automation & Software';

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: 'WhiteGuava',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: SITE_DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', ...faqPageSchema(homepageFaqs) }} />
      <HomePage />
    </>
  );
}
