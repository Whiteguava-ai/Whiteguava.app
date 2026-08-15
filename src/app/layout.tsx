import type { Metadata, Viewport } from 'next';
import JsonLd from '@/components/JsonLd';
import RevealObserver from '@/components/RevealObserver';
import { siteGraph } from '@/lib/schema';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const defaultTitle = 'WhiteGuava — AI Software Development Company | Bengaluru';
const defaultDescription =
  'Bengaluru-based AI software development company. We build AI agents, automation systems, WhatsApp AI, and custom business software for teams worldwide.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    site: '@wearewhiteguava',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="tNeak0Hwphy6NdHcrfQFBQ"
          async
        />
      </head>
      {/* suppressHydrationWarning prevents false alarms from browser extensions
          injecting attributes (e.g. password managers) into <body> */}
      <body suppressHydrationWarning>
        <JsonLd data={siteGraph()} />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
