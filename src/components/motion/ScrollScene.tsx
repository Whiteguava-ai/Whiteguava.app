'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { gsap, ScrollTrigger, useGSAP, CINEMATIC_QUERY } from '@/lib/motion/gsap';

export interface SceneBuild {
  gsap: typeof gsap;
  /** The scrubbed timeline already bound to this scene's ScrollTrigger. */
  timeline: gsap.core.Timeline;
  /** The scene root element. */
  root: HTMLElement;
  /** `gsap.utils.selector` scoped to the scene root. */
  q: (selector: string) => Element[];
  /** The live ScrollTrigger, for `.progress`, custom `onUpdate`, etc. */
  trigger: ScrollTrigger;
}

/**
 * Complex-tier primitive: a section that pins and/or scrubs a GSAP timeline to
 * scroll position. This is where the "scroll film" lives — headline rises,
 * background pans, cards deal in, all tied to the scrollbar rather than a
 * mount-triggered play.
 *
 * The heavy version runs only for `CINEMATIC_QUERY` (≥768px, fine pointer) AND
 * only when the visitor has not asked to reduce motion — `gsap.matchMedia`
 * tears the whole thing down (and restores the static layout) outside that
 * window. On phones / reduced-motion the children just render normally; give
 * them their own `<Reveal>` if they still need a light entrance.
 *
 * `useGSAP` scopes every tween, ScrollTrigger and matchMedia created here to
 * this component and reverts them on unmount / route change.
 */
export function ScrollScene({
  children,
  className,
  style,
  id,
  pin = true,
  scrub = 1,
  start = 'top top',
  end = '+=120%',
  markers = false,
  build,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
  pin?: boolean;
  /** `true` or 0.5–1.5. Never pass `false` here — use `<Reveal>` for discrete. */
  scrub?: boolean | number;
  start?: string | number | (() => string | number);
  end?: string | number | (() => string | number);
  markers?: boolean;
  build?: (ctx: SceneBuild) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || !build) return;

      const mm = gsap.matchMedia();
      mm.add(
        `${CINEMATIC_QUERY} and (prefers-reduced-motion: no-preference)`,
        () => {
          const q = gsap.utils.selector(root);
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start,
              end,
              scrub,
              pin,
              pinSpacing: pin,
              anticipatePin: pin ? 1 : 0,
              invalidateOnRefresh: true,
              markers,
            },
          });
          build({
            gsap,
            timeline,
            root,
            q,
            trigger: timeline.scrollTrigger as ScrollTrigger,
          });
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} id={id} className={className} style={style}>
      {children}
    </div>
  );
}
