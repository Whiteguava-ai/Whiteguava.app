'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from '@/lib/motion/gsap';
import { ScrollProgress } from './ScrollProgress';

/**
 * Mounted once in the root layout. Importing this module pulls in
 * `@/lib/motion/gsap`, which registers every GSAP plugin the app uses.
 *
 * It also owns the two things that must happen page-wide rather than
 * per-scene:
 *
 *  - `ScrollTrigger.refresh()` after web fonts settle and after `load`, so
 *    pin spacers are sized against the final layout (fonts swapping in is the
 *    classic cause of pins starting a few pixels off and a late CLS blip).
 *  - a `refresh()` after client-side route changes, once the new route has
 *    painted, so triggers created by the incoming page measure correctly.
 */
export function CinematicRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    if (document.readyState === 'complete') {
      refresh();
    } else {
      window.addEventListener('load', refresh, { once: true });
    }
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => window.removeEventListener('load', refresh);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return <ScrollProgress />;
}
