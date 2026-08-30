'use client';
import { useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { CinematicText } from '@/components/motion/CinematicText';
import { Reveal } from '@/components/motion/Reveal';
import { useMounted } from '@/lib/motion/useMounted';
import SectionStage from '@/components/visual/SectionStage';
import styles from './FAQ.module.css';
import { homepageFaqs } from '@/data/faqs';

type FaqItem = { q: string; a: string };

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FAQ({ items = homepageFaqs }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const animateAccordion = mounted && !reduced;

  return (
    <section id="faq" className={styles.faq}>
      <SectionStage>
      <div className="container">
        <Reveal className={styles.top} stagger>
          <div className="section-badge">
            <span className="section-badge-dot" />
            FAQs
          </div>
          <h2 className={styles.headline}>
            <CinematicText>Frequently Asked Questions</CinematicText>
          </h2>
        </Reveal>
        <Reveal className={styles.list} stagger staggerDelay={0.06}>
          {items.map((item, i) => {
            const isOpen = open === i;
            const answer = (
              <div className={styles.a} style={{ maxHeight: 'none', marginTop: 12 }}>
                {item.a}
              </div>
            );
            return (
              <div key={item.q} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.q}>
                    <span>{item.q}</span>
                    <span className={styles.icon}>{isOpen ? '–' : '+'}</span>
                  </span>
                </button>
                {!animateAccordion ? (
                  isOpen && answer
                ) : (
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: EASE }}
                        style={{ overflow: 'hidden' }}
                      >
                        {answer}
                      </m.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
      </SectionStage>
    </section>
  );
}
