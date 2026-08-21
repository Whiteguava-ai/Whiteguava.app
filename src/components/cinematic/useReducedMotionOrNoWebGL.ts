'use client';

import { useSyncExternalStore } from 'react';

let cachedHasWebGL: boolean | null = null;

function hasWebGL() {
  if (cachedHasWebGL !== null) return cachedHasWebGL;
  try {
    const canvas = document.createElement('canvas');
    cachedHasWebGL = !!(
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    );
  } catch {
    cachedHasWebGL = false;
  }
  return cachedHasWebGL;
}

function subscribe(callback: () => void) {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}

function getSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || !hasWebGL();
}

function getServerSnapshot() {
  // Optimistically assume the cinematic canvas path (WebGL available, no
  // reduced-motion preference) — this is what nearly every real visitor and
  // Lighthouse's headless Chrome actually get, so committing to it as the
  // server/first-client-render value means the common case never has to swap
  // component trees after hydration. Both this path and StaticFallback already
  // render full real text via SSR, so this costs nothing for crawlability —
  // it only changes which case (common vs. rare) pays a re-render on mount.
  // Reduced-motion/no-WebGL visitors — a small minority — still get correctly
  // downgraded once useSyncExternalStore reads the real client snapshot below.
  return false;
}

/** Returns true when the cinematic canvas experience should NOT be shown. */
export default function useReducedMotionOrNoWebGL() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
