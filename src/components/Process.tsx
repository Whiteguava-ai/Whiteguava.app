'use client';
import SectionStage from '@/components/visual/SectionStage';
import { useTilt } from '@/hooks/useParallax';
import styles from './Process.module.css';

const steps = [
  {
    num: '01',
    title: 'Understand',
    desc: 'We understand your business, users, workflow, data, and the problem worth solving.',
    duration: 'DISCOVERY',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We define the product experience, architecture, AI approach, and implementation plan.',
    duration: 'PLANNING',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We develop the application, AI system, integrations, and automation workflows.',
    duration: 'DEVELOPMENT',
  },
  {
    num: '04',
    title: 'Integrate',
    desc: 'We connect the solution with your existing tools, systems, data, and workflows.',
    duration: 'INTEGRATION',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'We test, deploy, monitor, and move the solution into production.',
    duration: 'DEPLOYMENT',
  },
  {
    num: '06',
    title: 'Improve',
    desc: 'We continuously improve performance, reliability, usability, and intelligence.',
    duration: 'ONGOING',
  },
];

function StepCard({ step, delay, total }: { step: typeof steps[0]; delay: number; total: number }) {
  const tilt = useTilt(7);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMove}
      onMouseLeave={tilt.onLeave}
      className={`${styles.card} reveal reveal-delay-${delay}`}
    >
      <div className={styles.cardTop}>
        <h3 className={styles.title}>{step.title}</h3>
        <p className={styles.desc}>{step.desc}</p>
        <span className={styles.duration}>{step.duration}</span>
      </div>
      <div className={styles.numRow}>
        <span className={styles.num}>{step.num}</span>
        <span className={styles.den}>/{String(total).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <SectionStage>
      <div className="container">
        <div className={`${styles.top} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            How We Build
          </div>
          <h2 className={styles.headline}>How We Build</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((s, i) => (
            <StepCard key={s.num} step={s} delay={Math.min(i + 1, 6)} total={steps.length} />
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
