'use client';
import { useState } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'What’s the typical timeline from idea to v1?',
    a: 'Typically 3–8 weeks depending on scope and complexity. We move from discovery to deployment with regular check-ins.',
  },
  {
    q: 'What do we need to start?',
    a: 'A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.',
  },
  {
    q: 'Which models/stack do you use?',
    a: 'Modern, scalable stacks like React, Node.js, and cloud services. We choose models/APIs based on the use case, performance, and cost.',
  },
  {
    q: 'Are model/API costs included in pricing?',
    a: 'Model and API costs are usually billed separately based on usage. We share estimates upfront and help optimize costs.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.faq}>
      <SectionStage>
      <div className="container">
        <div className={`${styles.top} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            FAQs
          </div>
          <h2 className={styles.headline}>Frequently Asked Questions</h2>
        </div>
        <div className={`${styles.list} reveal reveal-delay-2`}>
          {faqs.map((item, i) => (
            <button
              key={item.q}
              className={`${styles.item} ${open === i ? styles.open : ''}`}
              onClick={() => setOpen(i)}
            >
              <div className={styles.q}>
                <span>{item.q}</span>
                <span className={styles.icon}>{open === i ? '–' : '+'}</span>
              </div>
              <div className={styles.a}>{item.a}</div>
            </button>
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
