'use client';

import {
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { CinematicText } from '@/components/motion/CinematicText';
import { Reveal } from '@/components/motion/Reveal';
import { useMounted } from '@/lib/motion/useMounted';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Stats.module.css';

const items = [
  { label: 'AI', value: 'Agents' },
  { label: 'SOFTWARE', value: 'Engineering' },
  { label: 'AUTOMATION', value: 'Systems' },
  { label: 'DATA', value: 'Pipelines' },
  { label: 'CLOUD', value: 'Deployment' },
];

/**
 * The capability marquee, skewed by scroll velocity: fast scrolling rakes the
 * strip into a lean, easing back to upright as you settle — the "speed lines"
 * trick. The CSS keyframe loop stays on the inner `.track`; the skew rides an
 * outer wrapper so the two transforms don't fight. Flat and upright under
 * reduced motion.
 */
function VelocityMarquee({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 200, damping: 50 });
  const skewX = useTransform(smooth, [-2500, 0, 2500], [6, 0, -6], { clamp: true });

  return (
    <m.div style={mounted && !reduced ? { skewX } : undefined}>
      <div className={styles.track}>{children}</div>
    </m.div>
  );
}

export default function Stats() {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <section className={styles.stats}>
      <SectionStage dark>
      <div className="container">
        <Reveal className={styles.top} stagger>
          <div className="section-badge section-badge-dark">
            <span className="section-badge-dot" />
            Capabilities
          </div>
          <h2 className={styles.headline}>
            <CinematicText>One Team. Multiple Capabilities.</CinematicText>
          </h2>
          <p className={styles.sub}>
            We combine AI, software engineering, automation, data, and cloud to build practical solutions that work in production — not just in demos.
          </p>
        </Reveal>
      </div>
      <div className={styles.marquee}>
        <VelocityMarquee>
          {loop.map((item, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </div>
          ))}
        </VelocityMarquee>
      </div>
      </SectionStage>
    </section>
  );
}
