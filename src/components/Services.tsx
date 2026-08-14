'use client';
import { useState } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Services.module.css';

const services = [
  {
    num: '01',
    title: 'AI Strategy & Mapping',
    desc: 'Identify high-ROI use cases and define a realistic, measurable AI roadmap.',
    tags: ['Stakeholder discovery', 'Value model & KPI definition', 'Data readiness assessment'],
  },
  {
    num: '02',
    title: 'AI UX & Product Design',
    desc: 'Design intuitive AI-native interfaces that make complex models feel effortless.',
    tags: ['User research', 'Prompt UX design', 'Error state design'],
  },
  {
    num: '03',
    title: 'LLM / Agent Development',
    desc: 'Build and fine-tune LLM pipelines, RAG systems, and autonomous agents.',
    tags: ['RAG pipelines', 'Agent orchestration', 'Fine-tuning & RLHF'],
  },
  {
    num: '04',
    title: 'Data Engineering & Pipelines',
    desc: 'Design scalable data infrastructure to power reliable, production-grade AI.',
    tags: ['Data ingestion', 'Vector stores', 'ETL & monitoring'],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className={styles.services}>
      <SectionStage>
      <div className="container">
        <div className={styles.layout}>
          {/* Left */}
          <div className={styles.left}>
            <div className={`section-badge reveal`}>
              <span className="section-badge-dot" />
              Services
            </div>
            <h2 className={`${styles.headline} reveal reveal-delay-1`}>
              End-to-End<br />AI Services
            </h2>
            <p className={`${styles.desc} reveal reveal-delay-2`}>
              We turn ambiguous AI ideas into production features your users trust—combining strategy, design, engineering, and rigorous evaluation.
            </p>
          </div>

          {/* Right: Accordion */}
          <div className={`${styles.accordion} reveal reveal-delay-2`}>
            {services.map((s, i) => (
              <div
                key={i}
                className={`${styles.item} ${active === i ? styles.active : ''}`}
                onClick={() => setActive(i)}
              >
                <div className={styles.itemHeader}>
                  <h3 className={styles.itemTitle}>{s.title}</h3>
                  <span className={styles.itemNum}>({s.num})</span>
                </div>
                <div className={styles.itemBody}>
                  <p className={styles.itemDesc}>{s.desc}</p>
                  <div className={styles.tags}>
                    {s.tags.map((t, j) => (
                      <span key={j} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
