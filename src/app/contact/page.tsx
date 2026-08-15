import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import InnerHero from '@/components/InnerHero';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import { breadcrumbSchema, contactPageSchema } from '@/lib/schema';
import { CONTACT_EMAILS, SITE_NAME, SITE_URL } from '@/lib/site';

const title = `Contact ${SITE_NAME}`;
const description = `Talk to WhiteGuava about AI agents, automation, WhatsApp AI, or custom software. Email ${CONTACT_EMAILS[0]} or send a project brief.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/contact`,
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

export default function ContactRoute() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            contactPageSchema(),
            breadcrumbSchema([
              { name: SITE_NAME, path: '/' },
              { name: 'Contact', path: '/contact' },
            ]),
          ],
        }}
      />
      <main>
        <Navbar />
        <InnerHero
          badge="Contact"
          line1="Contact"
          line2="WhiteGuava"
          subtitle="Tell us what you want to build, automate, or improve. We reply to project enquiries at admin@thewhiteguava.in."
          primaryHref="#contact"
          primaryLabel="Send a Brief"
          secondaryHref="/about"
          secondaryLabel="About WhiteGuava"
        />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
