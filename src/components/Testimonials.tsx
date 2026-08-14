'use client';
import { useState } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: 'We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.',
    author: 'Elena Ruiz',
    role: "Cantos SaaS’s VP Product",
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
  },
  {
    quote: 'Their design-first approach meant users actually adopted the AI features. We went from 12% to 68% engagement in one quarter.',
    author: 'Marcus Levin',
    role: 'CTO, NexGen Analytics',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    quote: 'From RAG architecture to production deployment in 10 weeks. Security and compliance were built in, not bolted on.',
    author: 'Sofia Andrade',
    role: 'Head of Engineering, LegalBase',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className={styles.testimonials}>
      <SectionStage>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Testimonials
          </div>
          <h2 className={styles.headline}>What Our Clients Says</h2>
        </div>

        <div className={`${styles.stage} reveal reveal-delay-2`}>
          <div className={styles.card} key={current}>
            <img src={t.img} alt={t.author} className={styles.avatar} />
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.meta}>
              <strong>{t.author}</strong>
              <span>{t.role}</span>
            </div>
            <div className={styles.counter}>
              {String(current + 1).padStart(2, '0')}
              <em> /{String(testimonials.length).padStart(2, '0')}</em>
            </div>
          </div>
          <div className={styles.nav}>
            <button onClick={prev} className={styles.navBtn} aria-label="Previous"><span>←</span></button>
            <button onClick={next} className={styles.navBtn} aria-label="Next"><span>→</span></button>
          </div>
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
