import type { Metadata } from 'next';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import InnerHero from '@/components/InnerHero';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import { aboutFaqs } from '@/data/faqs';
import { aboutPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

const title = `About ${SITE_NAME}`;
const description =
  'WhiteGuava is a Bengaluru-based AI software company. We build AI agents, automation, WhatsApp AI, and custom software that works in production.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/about' },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/about`,
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

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            aboutPageSchema(),
            breadcrumbSchema([
              { name: SITE_NAME, path: '/' },
              { name: 'About', path: '/about' },
            ]),
            faqPageSchema(aboutFaqs, `${SITE_URL}/about#faq`),
          ],
        }}
      />
      <main>
        <Navbar />
        <InnerHero
          badge="About"
          line1="About"
          line2="WhiteGuava"
          subtitle={SITE_DESCRIPTION}
          primaryHref="#contact"
          secondaryHref="/#services"
          secondaryLabel="Explore Services"
        />
        <About />
        <Benefits />
        <Team />
        <FAQ items={aboutFaqs} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
