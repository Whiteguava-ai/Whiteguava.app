'use client';
import { useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import SectionStage from '@/components/visual/SectionStage';
import { SERVICE_PATHS } from '@/lib/site';
import styles from './Awards.module.css';

const capabilities = [
  { title: 'AI Agents & Automation', project: 'Custom agents with tools, memory, and business integrations', year: 'Core', href: SERVICE_PATHS.agents },
  { title: 'Generative AI & RAG', project: 'LLM systems connected to your private business knowledge', year: 'Core', href: SERVICE_PATHS.agents },
  { title: 'Business Software', project: 'Web apps, portals, dashboards, and platforms built to scale', year: 'Core', href: SERVICE_PATHS.software },
  { title: 'Data & Analytics', project: 'Pipelines, dashboards, and AI-ready data infrastructure', year: 'Core', href: SERVICE_PATHS.dataAnalytics },
  { title: 'Cloud & Deployment', project: 'AWS, Azure, infrastructure, monitoring, and production deployment', year: 'Core', href: SERVICE_PATHS.cloud },
  { title: 'AI Integration', project: 'Connecting AI to CRM, ERP, WhatsApp, APIs, and internal systems', year: 'Core', href: SERVICE_PATHS.whatsapp },
];

export default function Awards() {
  const [i, setI] = useState(0);
  const prev = () => setI(v => (v - 1 + capabilities.length) % capabilities.length);
  const next = () => setI(v => (v + 1) % capabilities.length);
  const visible = [0, 1, 2].map(offset => capabilities[(i + offset) % capabilities.length]);

  return (
    <section className={styles.awards}>
      <SectionStage>
      <div className="container">
        <Reveal className={styles.top} stagger>
          <div className="section-badge">
            <span className="section-badge-dot" />
            What We Do
          </div>
          <div className={styles.nav}>
            <button onClick={prev} aria-label="Previous" className={styles.navBtn}><span>←</span></button>
            <button onClick={next} aria-label="Next" className={styles.navBtn}><span>→</span></button>
          </div>
        </Reveal>
        <div className={styles.row}>
          {visible.map((a, idx) => (
            <Reveal key={`${a.title}-${idx}`} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 0.08}>
              <a href={a.href} className={styles.card}>
                <div className={styles.medal}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="#161616" strokeWidth="1.6"/>
                    <path d="M9 12l2 2 4-4" stroke="#161616" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>{a.title}</h3>
                <p>{a.project} <span>/ {a.year}</span></p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
