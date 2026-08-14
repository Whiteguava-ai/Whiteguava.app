'use client';
import type { ReactNode } from 'react';
import styles from './FloatTile.module.css';

export type TileBrand = 'framer' | 'notion' | 'linear' | 'figma' | 'slack' | 'openai' | 'github' | 'stripe';

const logos: Record<TileBrand, ReactNode> = {
  framer: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#000">
      <path d="M4 0h16v8H12L4 0zm0 8h8l8 8H4V8zm0 8h8v8l-8-8z"/>
    </svg>
  ),
  notion: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#111">
      <path d="M4.5 3.5h12.2c.9 0 1.7.4 2.2 1.1l1.6 2.2v13.7c0 .8-.7 1.5-1.5 1.5H6.8c-.9 0-1.7-.4-2.2-1.1L3 18.7V5c0-.8.7-1.5 1.5-1.5zm3.2 3.2v10.6l2.1 1.4V8.1L16 16.8h1.6V6.7h-1.8l-6.3 8.2V6.7H7.7z"/>
    </svg>
  ),
  linear: (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <path fill="#5E6AD2" d="M2.2 12.9A10 10 0 0112.9 2.2L21.8 11a10 10 0 01-10.7 10.7L2.2 12.9z"/>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <circle cx="9" cy="6" r="3.2" fill="#F24E1E"/>
      <circle cx="15" cy="6" r="3.2" fill="#FF7262"/>
      <circle cx="9" cy="12" r="3.2" fill="#A259FF"/>
      <circle cx="15" cy="12" r="3.2" fill="#1ABCFE"/>
      <circle cx="9" cy="18" r="3.2" fill="#0ACF83"/>
    </svg>
  ),
  slack: (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <rect x="9" y="2" width="4.2" height="10" rx="2.1" fill="#E01E5A"/>
      <rect x="2" y="9" width="10" height="4.2" rx="2.1" fill="#36C5F0"/>
      <rect x="10.8" y="12" width="4.2" height="10" rx="2.1" fill="#2EB67D"/>
      <rect x="12" y="10.8" width="10" height="4.2" rx="2.1" fill="#ECB22E"/>
    </svg>
  ),
  openai: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#111">
      <path d="M22.3 10.5a5.4 5.4 0 00-.6-5.1 5.5 5.5 0 00-6-2.4 5.5 5.5 0 00-9.3 2 5.4 5.4 0 00-3.6 6.6 5.5 5.5 0 00.6 5.1 5.5 5.5 0 006 2.4 5.5 5.5 0 009.3-2 5.4 5.4 0 003.6-6.6zm-8.3 8.2a4.1 4.1 0 01-2.6-.9l.1-.05 3.4-2v.3a.55.55 0 01-.27.47l-3.4 2a4.1 4.1 0 012.77.18 4.13 4.13 0 002.86 4.1 4.13 4.13 0 00.13-2.1 4.1 4.1 0 00-3-2zm6.3-2.7a4.1 4.1 0 01-2 1.7v-.1l-3.4-2 .01-.24 3.4 2a.55.55 0 00.54 0 4.13 4.13 0 001.5-5.6 4.13 4.13 0 00-1.5 5.24h.05zm.8-7.4l-.05.03-3.4 2v-.5a.55.55 0 01.28-.47l3.39-2a4.1 4.1 0 00-2.9-4.3 4.13 4.13 0 00.14 6.2 4.1 4.1 0 002.54-.96zm-11.7 8.6l-3.4-2a.55.55 0 01-.2-.73.55.55 0 01.2-.2l3.4-2 .24.01-3.44 1.98a4.13 4.13 0 00-.08 5.74 4.1 4.1 0 003.28-2.8zm-1.3-9.2 3.4-1.96.01.24-3.4 2a.55.55 0 00-.27.47v.04L4.8 8.1a4.13 4.13 0 001.48-5.62 4.1 4.1 0 002.1 6.6zm10.1 3.4l-3.4-2 3.4-1.96.24.14-3.4 1.96a.55.55 0 000 .94l3.4 1.96c.08-.36.12-.73.12-1.1 0-.13 0-.25-.02-.38zM8.7 14.4v-3.92l3.32-1.92 3.32 1.92v3.92l-3.32 1.92-3.32-1.92z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#111">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0112 6.8c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.48A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
    </svg>
  ),
  stripe: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#635BFF">
      <path d="M13.5 10.3c0-.86.7-1.2 1.85-1.2 1.67 0 3.78.5 5.45 1.4V5.9A16.6 16.6 0 0015.4 4.5c-3.7 0-6.2 1.94-6.2 5.18 0 5.05 6.95 4.25 6.95 6.43 0 1.02-.88 1.36-2.1 1.36-1.82 0-4.15-.75-6-1.77v4.68A17.3 17.3 0 0014.2 21.5c3.82 0 6.46-1.9 6.46-5.24-.02-5.45-6.96-4.48-6.96-5.96h-.2z"/>
    </svg>
  ),
};

export default function FloatTile({
  brand,
  size = 72,
  rotate = '-12deg',
  delay = 0,
  depth = 1,
  className = '',
}: {
  brand: TileBrand;
  size?: number;
  rotate?: string;
  delay?: number;
  depth?: number;
  className?: string;
}) {
  return (
    <span
      className={`${styles.tile} ${className}`}
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        ['--rot' as string]: rotate,
        ['--depth' as string]: depth,
      }}
    >
      <span className={styles.face}>{logos[brand]}</span>
    </span>
  );
}
