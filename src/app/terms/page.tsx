import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CONTACT_EMAILS, SITE_NAME, SITE_URL } from '@/lib/site';

const title = 'Terms of Service';
const description = `The terms that govern use of the ${SITE_NAME} website and our client engagements.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/terms`,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
};

/**
 * Standard-template legal page — not a substitute for review by qualified
 * counsel before being relied on as a final policy. Client engagements are
 * governed by their own signed scope/contract; this page covers use of the
 * public website only.
 */
export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      <section style={{ padding: '160px 24px 100px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="section-badge">
            <span className="section-badge-dot" />
            Legal
          </span>
          <h1 style={{ marginTop: '20px', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Terms of Service
          </h1>
          <p style={{ marginTop: '12px', color: '#777', fontSize: '14px' }}>Last updated: 23 August 2026</p>

          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '15px', lineHeight: 1.75, color: '#444' }}>
            <p>
              These terms govern your use of the {SITE_NAME} website at {SITE_URL.replace('https://', '')}. By
              using this site, you agree to them. They do not cover client project work, which is governed by a
              separate signed scope of work or contract agreed with each client.
            </p>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Use of this website</h2>
              <p>
                You may browse this site and submit the contact form to enquire about our services. You agree not
                to misuse the site — including attempting to disrupt it, scrape it at scale, or submit the contact
                form for purposes unrelated to a genuine enquiry.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Content &amp; intellectual property</h2>
              <p>
                The content on this site — including text, graphics, and the {SITE_NAME} name and logo — belongs
                to {SITE_NAME} unless otherwise credited (for example, photography sourced from Pexels
                contributors). You may not reproduce or redistribute it without permission.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>No warranty</h2>
              <p>
                This website and its content are provided &quot;as is&quot;, without warranties of any kind. We
                make reasonable efforts to keep it accurate and available, but don&apos;t guarantee uninterrupted
                or error-free access.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Third-party links</h2>
              <p>
                This site may link to third-party services (for example, our social profiles). We aren&apos;t
                responsible for the content or practices of sites we don&apos;t operate.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Changes to these terms</h2>
              <p>
                We may update these terms from time to time. Material changes will be reflected by updating the
                &quot;Last updated&quot; date above.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Governing law</h2>
              <p>These terms are governed by the laws of India, with courts in Bengaluru, Karnataka having jurisdiction.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Contact us</h2>
              <p>Questions about these terms can be sent to {CONTACT_EMAILS[0]}.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
