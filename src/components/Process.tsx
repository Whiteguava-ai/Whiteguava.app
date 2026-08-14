'use client';
import SectionStage from '@/components/visual/SectionStage';
import { useTilt } from '@/hooks/useParallax';
import styles from './Process.module.css';

const steps = [
  {
    num: '01',
    title: 'Discover & Scope',
    desc: 'Align on problems, data reality, and success metrics. Opportunity brief, KPI model, phased roadmap, effort/cost ranges.',
    duration: '3-7 DAYS',
  },
  {
    num: '02',
    title: 'Prototype',
    desc: 'De-risk unknowns and validate value quickly. Clickable UX, tech spike repo, initial eval rubric, demo.',
    duration: '1-2 WEEKS',
  },
  {
    num: '03',
    title: 'Validate & Evals',
    desc: 'Prove accuracy, usability, safety, and cost. Eval dashboard, acceptance thresholds, decision to iterate/ship.',
    duration: '1 WEEKS',
  },
];

function StepCard({ step, delay }: { step: typeof steps[0]; delay: number }) {
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
        <span className={styles.den}>/03</span>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section className={styles.process}>
      <SectionStage>
      <div className="container">
        <div className={`${styles.top} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Process
          </div>
          <h2 className={styles.headline}>From Idea to Production</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((s, i) => (
            <StepCard key={s.num} step={s} delay={i + 1} />
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
