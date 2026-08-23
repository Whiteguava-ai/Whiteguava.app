import localFont from 'next/font/local';

/**
 * Self-hosted Satoshi (regular/medium/bold — the only static weights Fontshare
 * actually ships for this family, despite the old CDN URL requesting 600/800
 * too). Replaces the external api.fontshare.com/cdn.fontshare.com request,
 * which sat on the homepage LCP path.
 */
export const satoshi = localFont({
  src: [
    { path: '../fonts/satoshi/satoshi-400.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/satoshi/satoshi-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/satoshi/satoshi-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
});
