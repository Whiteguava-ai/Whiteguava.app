'use client';

import Image from 'next/image';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import InnerHero from '@/components/InnerHero';
import Navbar from '@/components/Navbar';
import { CardHoverEffect, type HoverCardItem } from '@/components/ui/card-hover-effect';
import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d';
import { CinematicText } from '@/components/motion/CinematicText';
import SectionStage from '@/components/visual/SectionStage';
import type { ServiceContent } from '@/data/services';
import type { PexelsImage } from '@/lib/pexels';
import styles from './ServicePage.module.css';

export default function ServicePage({ service, cover }: { service: ServiceContent; cover: PexelsImage | null }) {
  const relatedItems: HoverCardItem[] = service.related.map((item, i) => ({
    key: item.href,
    content: (
      <a href={item.href} className={`${styles.relatedCard} reveal reveal-delay-${Math.min(i + 1, 6)}`}>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <span>Learn more →</span>
      </a>
    ),
  }));

  const useCaseItems: HoverCardItem[] = service.useCases.map((useCase, i) => ({
    key: useCase.title,
    content: (
      <div className={`${styles.card} reveal reveal-delay-${Math.min(i + 1, 6)}`}>
        <h3>{useCase.title}</h3>
        <p>{useCase.body}</p>
      </div>
    ),
  }));

  return (
    <main>
      <Navbar />
      <InnerHero
        badge={service.badge}
        line1={service.h1Line1}
        line2={service.h1Line2}
        highlight={service.highlight}
        subtitle={service.subtitle}
        primaryHref="#contact"
        secondaryHref="/#works"
        secondaryLabel="Explore Our Work"
      />

      {cover && (
        <section>
          <div className="container">
            <figure className={`${styles.coverFigure} reveal`}>
              <Image
                src={cover.url}
                alt={cover.alt}
                width={1200}
                height={525}
                className={styles.cover}
                priority
              />
              <figcaption className={styles.caption}>
                Photo by{' '}
                <a href={cover.photographerUrl} target="_blank" rel="noopener noreferrer">
                  {cover.photographer}
                </a>{' '}
                on Pexels
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      <section id="overview">
        <SectionStage>
          <div className="container">
            <div className={`${styles.header} reveal`}>
              <div className="section-badge">
                <span className="section-badge-dot" />
                Overview
              </div>
              <h2 className={styles.headline}><CinematicText>{service.overviewTitle}</CinematicText></h2>
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
              <h2 className={styles.headline}><CinematicText>{service.topicsTitle}</CinematicText></h2>
            </div>
            <div className={styles.topics}>
              {service.topics.map((topic, i) => (
                <div key={topic.title} className={`reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                  <CardContainer containerClassName="h-full">
                    <CardBody className={`${styles.card} h-full`}>
                      <CardItem translateZ={30} as="h3">
                        {topic.title}
                      </CardItem>
                      <CardItem translateZ={15} as="p">
                        {topic.body}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
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
                Who This Is For
              </div>
              <h2 className={styles.headline}><CinematicText>{service.useCasesTitle}</CinematicText></h2>
            </div>
            <CardHoverEffect items={useCaseItems} className="md:grid-cols-3" />
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
              <h2 className={styles.headline}><CinematicText>More from WhiteGuava</CinematicText></h2>
            </div>
            <CardHoverEffect items={relatedItems} className="md:grid-cols-3" />
          </div>
        </SectionStage>
      </section>

      <FAQ items={service.faqs} />
      <Contact />
      <Footer />
    </main>
  );
}
