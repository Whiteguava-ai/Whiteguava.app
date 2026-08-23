'use client';

import type { ReactNode } from 'react';
import { LazyMotion } from 'framer-motion';

/**
 * A plain function (the async features loader) can't cross the Server → Client
 * Component boundary as a prop, so this loader has to be defined inside a
 * client module rather than in the root layout — `children` (React elements)
 * can cross that boundary fine, which is what makes the wrapper work at all.
 */
const loadFramerFeatures = () => import('@/lib/framer-features').then((mod) => mod.default);

export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFramerFeatures} strict>
      {children}
    </LazyMotion>
  );
}
