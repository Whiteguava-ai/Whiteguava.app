'use client';
import { useState } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Awards.module.css';

const awards = [
  { title: 'Innovation in AI', project: 'Underwriting Risk Copilot (Fintech)', year: '2026' },
  { title: 'Best AI Product Design', project: 'Support Copilot (SaaS)', year: '2026' },
  { title: 'Data & AI Excellence', project: 'Clinical Note Summarizer (Healthcare)', year: '2026' },
  { title: 'Risk Intelligence', project: 'Underwriting Risk Copilot (Fintech)', year: '2026' },
];

export default function Awards() {
  const [i, setI] = useState(0);
  const prev = () => setI(v => (v - 1 + awards.length) % awards.length);
  const next = () => setI(v => (v + 1) % awards.length);
  const visible = [0, 1, 2].map(offset => awards[(i + offset) % awards.length]);

  return (
    <section className={styles.awards}>
      <SectionStage>
      <div className="container">
        <div className={`${styles.top} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Awards
          </div>
          <div className={styles.nav}>
            <button onClick={prev} aria-label="Previous" className={styles.navBtn}><span>←</span></button>
            <button onClick={next} aria-label="Next" className={styles.navBtn}><span>→</span></button>
          </div>
        </div>
        <div className={styles.row}>
          {visible.map((a, idx) => (
            <a
              key={`${a.title}-${idx}`}
              href="#works"
              className={`${styles.card} reveal reveal-delay-${idx + 1}`}
            >
              <div className={styles.medal}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="#161616" strokeWidth="1.6"/>
                  <path d="M12 8l1.2 2.6 2.8.3-2.1 1.9.6 2.8L12 14.4 9.5 15.6l.6-2.8-2.1-1.9 2.8-.3L12 8z" fill="#161616"/>
                </svg>
              </div>
              <h3>{a.title}</h3>
              <p>{a.project} <span>/ {a.year}</span></p>
            </a>
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
