import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SERVICE_LINKS, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: `The page you're looking for doesn't exist on ${SITE_NAME}.`,
  // Next.js also auto-injects its own `noindex` meta tag for any 404-status
  // response in this version, so two robots tags will still render — but
  // without this, the root layout's `index, follow` leaks through instead
  // and actively conflicts with it. This keeps both tags in agreement.
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '160px 24px 100px',
        }}
      >
        <span className="section-badge">
          <span className="section-badge-dot" />
          404
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginTop: '20px', letterSpacing: '-0.03em' }}>
          We couldn&apos;t find that page.
        </h1>
        <p style={{ marginTop: '16px', maxWidth: '520px', color: '#666', fontSize: '16px', lineHeight: 1.6 }}>
          The page you&apos;re looking for may have moved or no longer exists. Here are a few places to pick back up.
        </p>
        <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          <Link href="/" className="btn-dark"><span>Back to Home</span></Link>
          <Link href="/blog" className="btn-outline"><span>Read the Blog</span></Link>
        </div>
        <nav aria-label="Services" style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '10px 24px', justifyContent: 'center' }}>
          {SERVICE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontSize: '14px', fontWeight: 600, color: '#E63B2E' }}>
              {link.label}
            </Link>
          ))}
        </nav>
      </section>
      <Footer />
    </main>
  );
}
