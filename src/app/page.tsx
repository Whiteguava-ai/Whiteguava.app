import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import JsonLd from '@/components/JsonLd';
import { homepageFaqs } from '@/data/faqs';
import { faqPageSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/site';

const title = 'WhiteGuava — AI Software Development Company | Bengaluru';
const description =
  'Bengaluru-based AI software development company. We build AI agents, automation systems, WhatsApp AI, and custom business software for teams worldwide.';

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
