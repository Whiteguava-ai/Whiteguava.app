import type { Metadata, Viewport } from 'next';
import JsonLd from '@/components/JsonLd';
import RevealObserver from '@/components/RevealObserver';
import { siteGraph } from '@/lib/schema';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const defaultTitle = 'WhiteGuava | AI Agents, Automation & Software';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'technology',
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
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: SITE_DESCRIPTION,
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
