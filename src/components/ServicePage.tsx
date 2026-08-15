'use client';

import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionStage from '@/components/visual/SectionStage';
import type { ServiceContent } from '@/data/services';
import hero from './Hero.module.css';
import styles from './ServicePage.module.css';

function Highlighted({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  const idx = text.indexOf(highlight);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className={hero.demand}>{text.slice(idx, idx + highlight.length)}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

export default function ServicePage({ service }: { service: ServiceContent }) {
  return (
    <main>
      <Navbar />
      <section className={hero.hero}>
        <div className={hero.card}>
          <div className={hero.blobs} aria-hidden="true">
            <span className={hero.blobGrey} />
            <span className={hero.blobSoft} />
            <span className={hero.ribbon} />
            <span className={hero.ribbonBlur} />
          </div>
          <div className={hero.inner}>
            <div className={`${hero.badge} reveal`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.2 6.8H22l-6.2 4.5 2.4 7.2L12 16.2 5.8 20.5l2.4-7.2L2 8.8h7.8L12 2z" fill="#E63B2E"/>
              </svg>
              {service.badge}
            </div>
            <h1 className={`${hero.headline} reveal reveal-delay-1`}>
              <Highlighted text={service.h1Line1} highlight={service.highlight} />
              <br />
              <Highlighted text={service.h1Line2} highlight={service.highlight} />
            </h1>
            <p className={`${hero.sub} reveal reveal-delay-2`}>{service.subtitle}</p>
            <div className={`${hero.ctas} reveal reveal-delay-3`}>
              <a href="#contact" className={hero.btnDark}><span>Start a Project</span></a>
              <a href="/#works" className={hero.btnLight}><span>Explore Our Work</span></a>
            </div>
          </div>
        </div>
      </section>

      <section id="overview">
        <SectionStage>
          <div className="container">
            <div className={`${styles.header} reveal`}>
              <div className="section-badge">
                <span className="section-badge-dot" />
                Overview
              </div>
              <h2 className={styles.headline}>{service.overviewTitle}</h2>
            </div>
            <div className={`${styles.overview} reveal reveal-delay-1`}>
              {service.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </SectionStage>
      </section>

      <section>
        <SectionStage>
          <div className="container">
            <div className={`${styles.header} reveal`}>
              <div className="section-badge">
                <span className="section-badge-dot" />
                What We Build
              </div>
              <h2 className={styles.headline}>{service.topicsTitle}</h2>
            </div>
            <div className={styles.topics}>
              {service.topics.map((topic, i) => (
                <article key={topic.title} className={`${styles.card} reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                  <h3>{topic.title}</h3>
                  <p>{topic.body}</p>
                </article>
              ))}
            </div>
          </div>
        </SectionStage>
      </section>

      <section>
        <SectionStage>
          <div className="container">
            <div className={`${styles.header} reveal`}>
              <div className="section-badge">
                <span className="section-badge-dot" />
                Related
              </div>
              <h2 className={styles.headline}>More from WhiteGuava</h2>
            </div>
            <div className={styles.related}>
              {service.related.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${styles.relatedCard} reveal reveal-delay-${Math.min(i + 1, 6)}`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span>Learn more →</span>
                </a>
              ))}
            </div>
          </div>
        </SectionStage>
      </section>

      <FAQ items={service.faqs} />
      <Contact />
      <Footer />
    </main>
  );
}
