'use client';
import { useState } from 'react';
import { useTilt } from '@/hooks/useParallax';
import styles from './Works.module.css';

const works = [
  {
    title: 'Support Copilot for SaaS',
    desc: 'Draft replies and pulls account context; reduced first-response time by 38%.',
    deliverables: 'AI strategy, AI UX flows, LLM agent, RAG',
    industry: 'SaaS',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
    ],
  },
  {
    title: 'Underwriting Risk Copilot',
    desc: 'Built a triage assistant to summarize claims; cut manual review time by 42%.',
    deliverables: 'Use-case mapping, Prompt & UI patterns',
    industry: 'Fintech',
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80',
    ],
  },
  {
    title: 'Clinical Note Summarizer',
    desc: 'Clinic-lobby assistant answering pre-visit questions; decreased front-desk calls by 28%.',
    deliverables: 'AI strategy, AI UX flows, LLM agent, RAG',
    industry: 'Healthcare',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80',
    ],
  },
  {
    title: 'Catalog Intelligence Engine',
    desc: 'Launched a shopping copilot that understands attributes; raised add-to-cart by 12%.',
    deliverables: 'Data cleaning & embeddings',
    industry: 'Ecommerce/Retail',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80',
    ],
  },
];

function WorkCard({ work }: { work: typeof works[0] }) {
  const [active, setActive] = useState(0);
  const tilt = useTilt(4);

  return (
    <a href="#works" className={styles.workCard}>
      <div
        className={styles.imageArea}
        ref={tilt.ref}
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
      >
        <img
          key={active}
          src={work.images[active]}
          alt={work.title}
          className={styles.workImg}
        />
        <span className={styles.viewBtn}>
          <span>View Project</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </span>
      </div>
      <div className={styles.dotsRow}>
        {work.images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={(e) => { e.preventDefault(); setActive(i); }}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoTitle}>{work.title}</div>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>DESCRIPTION</span>
          <span className={styles.infoVal}>{work.desc}</span>
        </div>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>DELIVERABLES</span>
          <span className={styles.infoVal}>{work.deliverables}</span>
        </div>
        <div className={styles.infoCol}>
          <span className={styles.infoLabel}>INDUSTRY</span>
          <span className={styles.infoVal}>{work.industry}</span>
        </div>
      </div>
    </a>
  );
}

export default function Works() {
  return (
    <section id="works" className={styles.works}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Works
          </div>
          <h2 className={styles.headline}>Featured Works</h2>
        </div>

        <div className={styles.list}>
          {works.map((w, i) => (
            <div key={w.title} className={`reveal reveal-delay-${Math.min(i + 1, 6)}`}>
              <WorkCard work={w} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
