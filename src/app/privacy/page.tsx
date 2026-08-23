import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CONTACT_EMAILS, SITE_NAME, SITE_URL } from '@/lib/site';

const title = 'Privacy Policy';
const description = `How ${SITE_NAME} collects, uses, and protects information from visitors and clients.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/privacy`,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
};

/**
 * Standard-template legal page — accurate to what this site actually does
 * (contact form, Ahrefs analytics, Pexels-sourced blog imagery, no
 * e-commerce/payment processing), but not a substitute for review by
 * qualified counsel before being relied on as a final policy.
 */
export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p style={{ marginTop: '12px', color: '#777', fontSize: '14px' }}>Last updated: 23 August 2026</p>

          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '15px', lineHeight: 1.75, color: '#444' }}>
            <p>
              {SITE_NAME} (&quot;we&quot;, &quot;us&quot;) operates {SITE_URL.replace('https://', '')}. This policy
              explains what information we collect from visitors and prospective clients, how we use it, and how
              you can contact us about it.
            </p>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Information we collect</h2>
              <p>
                When you submit our contact form, we collect the information you provide: your name, email
                address, company, phone number, and any project details you share. We do not require this
                information to browse the site — it&apos;s only collected if you choose to reach out.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>How we use it</h2>
              <p>
                We use the information you submit solely to respond to your enquiry, scope potential projects,
                and communicate with you about work you&apos;ve asked us about. We do not sell or rent your
                information to third parties.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Analytics &amp; third-party services</h2>
              <p>
                We use Ahrefs Web Analytics to understand aggregate site traffic (pages visited, referrers,
                approximate location) — it does not use cookies to track you across other sites. Blog post images
                are sourced from the Pexels API at page-render time; this is a server-side request and does not
                share your personal data with Pexels.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Data retention</h2>
              <p>
                We retain contact-form submissions for as long as reasonably necessary to respond to your enquiry
                and, if you become a client, for the duration of our engagement and applicable record-keeping
                requirements.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Your choices</h2>
              <p>
                You can ask us what information we hold about you, request a correction, or ask us to delete it,
                by emailing {CONTACT_EMAILS[0]}.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Changes to this policy</h2>
              <p>
                We may update this policy as our practices change. Material changes will be reflected by updating
                the &quot;Last updated&quot; date above.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#161616', marginBottom: '12px' }}>Contact us</h2>
              <p>
                Questions about this policy can be sent to {CONTACT_EMAILS[0]}.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
