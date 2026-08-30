import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import JsonLd from '@/components/JsonLd';
import MotionProvider from '@/components/MotionProvider';
import RevealObserver from '@/components/RevealObserver';
import { CinematicRoot } from '@/components/motion';
import { siteGraph } from '@/lib/schema';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';
import { satoshi } from '@/lib/fonts';
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
    <html lang="en-IN" className={satoshi.variable} suppressHydrationWarning>
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="tNeak0Hwphy6NdHcrfQFBQ"
          async
        />
      </head>
      <body suppressHydrationWarning>
        <Script id="strip-extension-attrs" strategy="beforeInteractive">
          {`(function(){var a=["bis_skin_checked","bis_register"];function c(e){if(!e||e.nodeType!==1)return;for(var i=0;i<a.length;i++)e.removeAttribute(a[i]);}function w(r){c(r);if(!r.querySelectorAll)return;var n=r.querySelectorAll("["+a.join("],[")+"]");for(var i=0;i<n.length;i++)c(n[i]);}try{new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var m=ms[i];if(m.type==="attributes")c(m.target);for(var j=0;j<m.addedNodes.length;j++)w(m.addedNodes[j]);}}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:a});w(document.documentElement);}catch(e){}})();`}
        </Script>
        <JsonLd data={siteGraph()} />
        <RevealObserver />
        <MotionProvider>
          <CinematicRoot />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
