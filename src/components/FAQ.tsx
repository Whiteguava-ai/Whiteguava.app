'use client';
import { useState } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './FAQ.module.css';
import { homepageFaqs } from '@/data/faqs';

type FaqItem = { q: string; a: string };

export default function FAQ({ items = homepageFaqs }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.faq}>
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
          {items.map((item, i) => (
            <div
              key={item.q}
              className={`${styles.item} ${open === i ? styles.open : ''}`}
            >
              <button
                type="button"
                className={styles.trigger}
                onClick={() => setOpen(i)}
                aria-expanded={open === i}
              >
                <span className={styles.q}>
                  <span>{item.q}</span>
                  <span className={styles.icon}>{open === i ? '–' : '+'}</span>
                </span>
              </button>
              <div className={styles.a}>{item.a}</div>
            </div>
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
