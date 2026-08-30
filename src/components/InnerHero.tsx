'use client';

import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Parallax } from '@/components/motion/Parallax';
import { useMounted } from '@/lib/motion/useMounted';
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
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const innerY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const innerOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const innerScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroActive = mounted && !reduced;

  return (
    <section ref={sectionRef} className={hero.hero}>
      <div className={hero.card}>
        <Parallax speed={0.5} className={hero.blobs}>
          <span aria-hidden="true" className={hero.blobGrey} />
          <span aria-hidden="true" className={hero.blobSoft} />
          <span aria-hidden="true" className={hero.ribbon} />
          <span aria-hidden="true" className={hero.ribbonBlur} />
        </Parallax>
        <Spotlight className="opacity-60" color="rgba(230,59,46,0.22)" />

        <m.div
          className={hero.inner}
          style={heroActive ? { y: innerY, opacity: innerOpacity, scale: innerScale } : undefined}
        >
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
        </m.div>
      </div>
    </section>
  );
}
