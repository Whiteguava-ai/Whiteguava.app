'use client';

import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import hero from './Hero.module.css';

export default function InnerHero({
  badge,
  line1,
  line2,
  highlight,
  subtitle,
  primaryHref = '#contact',
  primaryLabel = 'Start a Project',
  secondaryHref = '/#services',
  secondaryLabel = 'Explore Services',
}: {
  badge: string;
  line1: string;
  line2?: string;
  highlight?: string;
  subtitle: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const highlightWords = highlight ? [highlight] : undefined;

  return (
    <section className={hero.hero}>
      <div className={hero.card}>
        <div className={hero.blobs} aria-hidden="true">
          <span className={hero.blobGrey} />
          <span className={hero.blobSoft} />
          <span className={hero.ribbon} />
          <span className={hero.ribbonBlur} />
        </div>
        <Spotlight className="opacity-60" color="rgba(230,59,46,0.22)" />

        <div className={hero.inner}>
          <CardContainer containerClassName="w-full">
            <CardBody className="w-full">
              <CardItem translateZ={20} className={hero.badge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.2 6.8H22l-6.2 4.5 2.4 7.2L12 16.2 5.8 20.5l2.4-7.2L2 8.8h7.8L12 2z" fill="#E63B2E"/>
                </svg>
                {badge}
              </CardItem>

              <CardItem translateZ={45} as="h1" className={hero.headline}>
                <TextGenerateEffect words={line1} highlightWords={highlightWords} className="block" />
                {line2 && (
                  <>
                    {' '}
                    <TextGenerateEffect words={line2} highlightWords={highlightWords} className="block" />
                  </>
                )}
              </CardItem>

              <CardItem translateZ={25} as="p" className={hero.sub}>
                {subtitle}
              </CardItem>

              <CardItem translateZ={35} className={hero.ctas}>
                <a href={primaryHref} className={hero.btnDark}><span>{primaryLabel}</span></a>
                <a href={secondaryHref} className={hero.btnLight}><span>{secondaryLabel}</span></a>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}
