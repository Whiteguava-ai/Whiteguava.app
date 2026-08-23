import type { NextConfig } from 'next';

/**
 * No nonce-based script-src here (would need a middleware.ts to mint a
 * per-request nonce and thread it through next/script + the inline
 * strip-extension-attrs bootstrap script) — 'unsafe-inline' is the pragmatic
 * baseline given the app leans on JSX inline `style` attributes throughout.
 * Still meaningfully restricts arbitrary third-party script/resource
 * injection, framing, and form-action targets versus having no CSP at all.
 *
 * 'unsafe-eval' is added only in dev: React's dev-mode debug tooling (stack
 * trace reconstruction) uses eval() and logs a console error without it.
 * React never uses eval() in production, so the production CSP stays strict.
 */
const isDev = process.env.NODE_ENV === 'development';

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ''}https://analytics.ahrefs.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://images.pexels.com https://images.unsplash.com",
  "font-src 'self' data:",
  "connect-src 'self' https://analytics.ahrefs.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ');

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/media/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/brand/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
