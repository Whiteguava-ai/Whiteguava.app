'use client';
import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d';
import { Timeline, type TimelineEntry } from '@/components/ui/timeline';
import SectionStage from '@/components/visual/SectionStage';
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

export default function Process() {
  const entries: TimelineEntry[] = steps.map((step) => ({
    label: step.duration,
    title: step.title,
    content: (
      <CardContainer containerClassName="w-full py-2">
        <CardBody className="relative min-h-[128px] w-full max-w-xl overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[var(--shadow-sm)]">
          <CardItem translateZ={30} className="relative z-10 max-w-[72%] text-[14px] leading-relaxed text-[var(--text-secondary)]">
            {step.desc}
          </CardItem>
          <CardItem
            translateZ={15}
            className="pointer-events-none absolute -bottom-3 -right-2 select-none text-7xl font-black leading-none text-black/[0.06]"
          >
            {step.num}
          </CardItem>
        </CardBody>
      </CardContainer>
    ),
  }));

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

          <Timeline data={entries} />
        </div>
      </SectionStage>
    </section>
  );
}
