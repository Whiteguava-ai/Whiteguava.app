'use client';

import { useEffect, useLayoutEffect } from 'react';

/**
 * `useLayoutEffect` warns when it runs during SSR. GSAP setup wants layout
 * timing on the client but must degrade to `useEffect` on the server.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
