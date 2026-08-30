'use client';
import { useState } from 'react';
import { CinematicText } from '@/components/motion/CinematicText';
import { Reveal } from '@/components/motion/Reveal';
import { ScrollScene } from '@/components/motion/ScrollScene';
import { useTilt } from '@/hooks/useParallax';
import styles from './Works.module.css';

const works = [
  {
    title: 'WhatsApp AI Agent for Customer Support',
    desc: 'AI-powered WhatsApp agent that handles customer queries, accesses product data, and escalates to human agents when needed.',
    deliverables: 'AI agent, WhatsApp integration, RAG, business system API',
    industry: 'Retail / E-commerce',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=960&q=70&auto=format',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=960&q=70&auto=format',
    ],
  },
  {
    title: 'Intelligent Document Processing System',
    desc: 'Automated document extraction and classification system replacing a manual review process for a financial services business.',
    deliverables: 'Document AI pipeline, classification model, admin dashboard',
    industry: 'Financial Services',
    images: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=960&q=70&auto=format',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=960&q=70&auto=format',
    ],
  },
  {
    title: 'Internal Knowledge Base AI Assistant',
    desc: 'RAG-based internal assistant connected to company documents, policies, and wikis — deployed as a production-ready web application.',
    deliverables: 'RAG system, vector database, web application, authentication',
    industry: 'Enterprise',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=960&q=70&auto=format',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=960&q=70&auto=format',
    ],
  },
  {
    title: 'Operations Automation Platform',
    desc: 'Custom platform automating lead capture, data enrichment, reporting, and notification workflows for a B2B business.',
    deliverables: 'Workflow automation, CRM integration, data pipelines, dashboard',
    industry: 'B2B Services',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=960&q=70&auto=format',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=960&q=70&auto=format',
    ],
  },
];

function WorkCard({ work }: { work: typeof works[0] }) {
  const [active, setActive] = useState(0);
  const tilt = useTilt(4);

  return (
    <a href="/#contact" className={styles.workCard}>
      <div
        className={styles.imageArea}
        ref={tilt.ref}
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
      >
        <img
          key={active}
          src={work.images[active]}
          alt={`${work.title} — ${work.industry} project by WhiteGuava`}
          className={`${styles.workImg} works-img`}
          width={960}
          height={640}
          loading="lazy"
          decoding="async"
        />
        <span className={styles.viewBtn}>
          <span>Discuss Project</span>
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

/** Scroll distance for the pinned horizontal pan — the overflow the track has past its viewport. */
function panDistance() {
  const track = document.querySelector<HTMLElement>('.works-track');
  const view = document.querySelector<HTMLElement>('.works-viewport');
  if (!track || !view) return 2000;
  return Math.max(0, track.scrollWidth - view.clientWidth);
}

export default function Works() {
  return (
    <section id="works" className={styles.works}>
      <div className="container">
        <Reveal className={styles.header} stagger>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Featured Work
          </div>
          <h2 className={styles.headline}>
            <CinematicText>Real Solutions. Real Business Problems.</CinematicText>
          </h2>
        </Reveal>
      </div>

      {/* Cinematic horizontal pan: the section pins and the row of projects
          slides left as the reader scrolls down. Desktop / fine-pointer only —
          the `md:hidden` stack below is what phones and reduced-motion get. */}
      <div className="hidden md:block">
        <ScrollScene
          pin
          scrub={1}
          end={() => '+=' + panDistance()}
          build={({ timeline, q }) => {
            const track = q('.works-track')[0] as HTMLElement | undefined;
            if (!track) return;
            timeline.to(track, { x: () => -panDistance(), ease: 'none' });
          }}
        >
          <div className="works-viewport overflow-hidden py-12">
            <div className="works-track flex w-max gap-8 px-[max(6vw,32px)]">
              {works.map((w) => (
                <div key={w.title} className="w-[min(78vw,600px)] shrink-0">
                  <WorkCard work={w} />
                </div>
              ))}
            </div>
          </div>
        </ScrollScene>
      </div>

      <div className="container md:hidden">
        <div className={styles.list}>
          {works.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05} direction={i % 2 === 0 ? 'left' : 'right'}>
              <WorkCard work={w} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
