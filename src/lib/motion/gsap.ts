'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

/**
 * Single registration point for every GSAP plugin the app uses. Importing
 * `gsap` from here (rather than the bare package) guarantees `registerPlugin`
 * has run before any `ScrollTrigger` / `SplitText` / `useGSAP` call.
 *
 * All three plugins ship inside the installed `gsap` package (free for
 * commercial use since GSAP 3.13) — no separate install, no CDN, so nothing
 * here trips the app's `script-src 'self'` CSP.
 *
 * `useGSAP` from `@gsap/react` is the scoped-cleanup hook: every tween,
 * timeline and ScrollTrigger created inside its callback is reverted
 * automatically on unmount / dependency change, which is what keeps
 * client-side route changes in the App Router from leaking triggers.
 */
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

/**
 * `true` when the visitor asked the OS to reduce motion. Read this at effect
 * time (not render) so it stays out of the SSR output. Every scroll effect
 * must branch on it and render the final, readable state instead.
 */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Heavy pin / scrub choreography only runs on a real pointer at tablet width
 * and up. Below that we fall back to lighter in-view reveals — pinning fights
 * native momentum scroll on phones and is the main mobile-jank offender.
 */
export const CINEMATIC_QUERY = '(min-width: 768px) and (pointer: fine)';

export { gsap, ScrollTrigger, SplitText, useGSAP };
