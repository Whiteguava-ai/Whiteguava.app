'use client';

import { useSyncExternalStore } from 'react';

const noop = () => () => {};

/**
 * `false` during SSR and the first client render, `true` afterwards — the
 * React-blessed "am I past hydration" check (`useSyncExternalStore` with a
 * server snapshot of `false`), so it needs no `setState`-in-effect.
 *
 * Motion primitives use this to render a structurally identical, un-animated
 * tree on the server and first paint (so hydration always matches), then swap
 * in scroll-linked transforms / reduced-motion branches only once we're safely
 * past hydration. It also sidesteps Motion's "target ref is defined but not
 * hydrated" error, which fires when `useScroll({ target })` reads a ref that
 * React swapped out during a hydration mismatch.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false
  );
}
