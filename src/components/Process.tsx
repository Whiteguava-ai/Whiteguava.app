'use client';
import { useEffect, useRef, useState } from 'react';
import { Code2, PenTool, Plug2, Rocket, Search, TrendingUp, type LucideIcon } from 'lucide-react';
import { m, useScroll, useTransform } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d';
import { ServiceGlyph } from '@/components/ui/service-glyph';
import { CinematicText } from '@/components/motion/CinematicText';
import { Reveal } from '@/components/motion/Reveal';
import SectionStage from '@/components/visual/SectionStage';
import { cn } from '@/lib/cn';
import styles from './Process.module.css';

const steps: { num: string; title: string; desc: string; duration: string; icon: LucideIcon }[] = [
  {
    num: '01',
    title: 'Understand',
    desc: 'We understand your business, users, workflow, data, and the problem worth solving.',
    duration: 'DISCOVERY',
    icon: Search,
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We define the product experience, architecture, AI approach, and implementation plan.',
    duration: 'PLANNING',
    icon: PenTool,
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We develop the application, AI system, integrations, and automation workflows.',
    duration: 'DEVELOPMENT',
    icon: Code2,
  },
  {
    num: '04',
    title: 'Integrate',
    desc: 'We connect the solution with your existing tools, systems, data, and workflows.',
    duration: 'INTEGRATION',
    icon: Plug2,
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'We test, deploy, monitor, and move the solution into production.',
    duration: 'DEPLOYMENT',
    icon: Rocket,
  },
  {
    num: '06',
    title: 'Improve',
    desc: 'We continuously improve performance, reliability, usability, and intelligence.',
    duration: 'ONGOING',
    icon: TrendingUp,
  },
];

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackHeight, setTrackHeight] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    const measure = () => setTrackHeight(trackRef.current?.getBoundingClientRect().height ?? 0);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 75%', 'end 55%'] });
  const fillHeight = useTransform(scrollYProgress, [0, 1], [0, trackHeight]);

  return (
    <section id="process" className={styles.process}>
      <SectionStage>
        <div className="container">
          <Reveal className={styles.top} stagger>
            <div className="section-badge">
              <span className="section-badge-dot" />
              How We Build
            </div>
            <h2 className={styles.headline}>
              <CinematicText>How We Build</CinematicText>
            </h2>
          </Reveal>

          <div ref={trackRef} className="relative mx-auto mt-8 max-w-4xl md:mt-6">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-black/10 to-transparent"
            >
              <m.div
                style={{ height: fillHeight }}
                className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-transparent"
              />
            </div>

            <div className="flex flex-col gap-10 md:gap-6">
              {steps.map((step, i) => {
                const reverse = i % 2 === 1;
                return (
                  <Reveal key={step.num} direction={reverse ? 'right' : 'left'} distance={40} amount={0.35}>
                    <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[1fr_112px_1fr] md:gap-8">
                      <div className="relative z-10 flex justify-center md:col-start-2">
                        <ServiceGlyph icon={step.icon} dark={false} />
                      </div>
                      <div className={reverse ? 'md:col-start-3' : 'md:col-start-1'}>
                        <StepCard step={step} align={reverse ? 'left' : 'right'} />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </SectionStage>
    </section>
  );
}

function StepCard({
  step,
  align,
}: {
  step: { num: string; title: string; desc: string; duration: string };
  /** Which edge the card's text hugs on desktop, the edge facing the spine. */
  align: 'left' | 'right';
}) {
  return (
    <CardContainer containerClassName="w-full">
      <CardBody
        className={cn(
          'group relative w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-md)] md:p-7',
          align === 'right' ? 'md:text-right' : 'md:text-left'
        )}
      >
        <CardItem
          translateZ={15}
          className={cn(
            'pointer-events-none absolute top-2 select-none text-7xl font-black leading-none text-black/[0.05] md:text-8xl',
            // Mobile text always reads left-aligned (see `md:text-right` above),
            // so the watermark sits on the right there regardless of `align`,
            // only the desktop, alignment-aware side kicks in from `md:`.
            align === 'right' ? 'right-3 md:left-3' : 'right-3'
          )}
        >
          {step.num}
        </CardItem>

        <CardItem
          translateZ={20}
          as="span"
          className="relative inline-block rounded-full border border-black/[0.06] bg-[var(--bg-card-light)] px-3 py-1 text-[11px] font-bold tracking-[0.08em] text-[var(--text-secondary)]"
        >
          {step.duration}
        </CardItem>
        <CardItem translateZ={35} as="h3" className="relative mt-2 text-xl font-bold text-[var(--text-primary)] md:text-2xl">
          {step.title}
        </CardItem>
        <CardItem translateZ={15} as="p" className="relative z-10 mt-2 text-[14px] leading-relaxed text-[var(--text-secondary)]">
          {step.desc}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
