'use client';

import {
  BarChart3,
  Bot,
  BrainCircuit,
  Cloud,
  LayoutDashboard,
  Plug2,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d';
import { Spotlight } from '@/components/ui/spotlight';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { GradientFlow } from '@/components/ui/gradient-flow';
import { Meteors } from '@/components/ui/meteors';
import { ServiceGlyph } from '@/components/ui/service-glyph';
import { StickyScrollReveal, type StickyScrollItem } from '@/components/ui/sticky-scroll-reveal';
import { CinematicText } from '@/components/motion/CinematicText';
import { CountUp } from '@/components/motion/CountUp';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Reveal } from '@/components/motion/Reveal';
import { ScrollScene } from '@/components/motion/ScrollScene';
import {
  FINAL_CTA_CONTENT,
  SERVICES_CONTENT,
  TECH_CORE_CONTENT,
  VOID_CONTENT,
  WORLD_FORMS_CONTENT,
} from '@/data/story';

/**
 * The homepage's opening act — a dark, scroll-driven sequence that walks
 * through hero → capability → services → CTA before handing off into the
 * light `Process` section below it.
 *
 * Cinematic build: the hero pins and dissolves upward under scroll, the
 * capability stack assembles tile-by-tile as it passes, the services run as a
 * pinned scrolly sequence, and the CTA beams ramp up as it enters. Every beat
 * degrades to a plain stacked layout on phones and under reduced motion (see
 * `ScrollScene` / `CinematicText`).
 */
export default function StoryExperience() {
  return (
    <div id="home" className="relative bg-[#0D0D0D] text-white">
      <HeroBeat />
      <CapabilityBeat />
      <ServicesBeat />
      <FinalCtaBeat />
    </div>
  );
}

function HeroBeat() {
  return (
    <ScrollScene
      id="story-hero"
      className="relative min-h-[100svh] overflow-hidden px-6 pb-24 pt-40 md:pt-52"
      pin
      end="+=70%"
      build={({ gsap, timeline, q }) => {
        gsap.from(q('.hero-card'), {
          yPercent: 55,
          opacity: 0,
          duration: 1.1,
          ease: 'expo.out',
          delay: 0.35,
        });
        timeline
          .to(q('.hero-content'), {
            yPercent: -22,
            opacity: 0,
            filter: 'blur(6px)',
            ease: 'none',
          })
          .to(
            q('.hero-card'),
            {
              yPercent: -55,
              rotateX: 42,
              transformPerspective: 800,
              scale: 0.86,
              opacity: 0,
              ease: 'none',
            },
            '<'
          )
          .to(q('.hero-glow'), { yPercent: 32, scale: 1.25, ease: 'none' }, '<');
      }}
    >
      <div className="hero-glow">
        <GradientFlow />
        <Spotlight />
      </div>

      <div className="hero-content relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal
          as="span"
          direction="down"
          distance={16}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.08em] text-white/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
          {VOID_CONTENT.badge}
        </Reveal>

        <h1 className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <CinematicText as="span" trigger="load" className="block">
            {WORLD_FORMS_CONTENT.headline[0]}
          </CinematicText>{' '}
          <span className="mt-1 block">
            {WORLD_FORMS_CONTENT.headline[1].replace('AI.', '').trim()}{' '}
            <span className="text-[var(--accent)]">AI.</span>
          </span>
        </h1>

        <Reveal
          as="p"
          delay={0.15}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          {WORLD_FORMS_CONTENT.sub}
        </Reveal>

        <Reveal stagger delay={0.25} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href={WORLD_FORMS_CONTENT.ctaPrimary.href} className="btn-dark">
            <span>{WORLD_FORMS_CONTENT.ctaPrimary.label}</span>
          </a>
          <a href={WORLD_FORMS_CONTENT.ctaSecondary.href} className="btn-outline">
            <span>{WORLD_FORMS_CONTENT.ctaSecondary.label}</span>
          </a>
        </Reveal>
      </div>

      <div className="hero-card relative z-10 mx-auto mt-20 w-full max-w-md [perspective:1000px]">
        <CardContainer containerClassName="w-full">
          <CardBody className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <CardItem translateZ={40} className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.08em] text-white/40">STACK</span>
              <span className="text-3xl font-extrabold text-[var(--accent)]">
                <CountUp value={5} suffix="+" />
              </span>
            </CardItem>
            <CardItem translateZ={60} className="mt-5 flex flex-wrap gap-2">
              {TECH_CORE_CONTENT.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-bold tracking-[0.05em] text-white/70"
                >
                  {tag}
                </span>
              ))}
            </CardItem>
            <CardItem translateZ={30} className="mt-6 text-xs text-white/40">
              {TECH_CORE_CONTENT.location} · {TECH_CORE_CONTENT.availability}
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      <div
        aria-hidden="true"
        className="hero-cue absolute inset-x-0 bottom-8 z-10 flex justify-center text-[11px] font-semibold tracking-[0.2em] text-white/30"
      >
        SCROLL
      </div>
    </ScrollScene>
  );
}

function CapabilityBeat() {
  return (
    <ScrollScene
      id="story-capability"
      className="relative overflow-hidden px-6 py-24 md:py-40"
      pin={false}
      scrub={1}
      start="top 80%"
      end="bottom 60%"
      build={({ timeline, q }) => {
        timeline
          .from(q('.cap-copy > *'), { y: 40, opacity: 0, stagger: 0.12, ease: 'power2.out' })
          .from(
            q('.cap-tile'),
            {
              y: 30,
              opacity: 0,
              scale: 0.9,
              stagger: { each: 0.05, from: 'start', grid: 'auto' },
              ease: 'back.out(1.4)',
            },
            '<0.1'
          );
      }}
    >
      <GradientFlow className="opacity-60" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="cap-copy">
          <span className="text-xs font-semibold tracking-[0.08em] text-[#ff8c7f]">
            {TECH_CORE_CONTENT.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            From idea to working product — without the guesswork.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">
            {TECH_CORE_CONTENT.body}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 [perspective:1000px]">
          {TECH_CORE_CONTENT.techs.map((tech) => (
            <span
              key={tech}
              className="cap-tile rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-[12px] font-semibold text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </ScrollScene>
  );
}

const SERVICE_ICONS: Record<string, LucideIcon> = {
  '01': Bot,
  '02': BrainCircuit,
  '03': LayoutDashboard,
  '04': Plug2,
  '05': Workflow,
  '06': BarChart3,
  '07': Cloud,
  '08': Sparkles,
};

function ServicesBeat() {
  const items: StickyScrollItem[] = SERVICES_CONTENT.map((service) => ({
    eyebrow: `${service.num} / ${String(SERVICES_CONTENT.length).padStart(2, '0')}`,
    title: service.title,
    description: service.desc,
    content: (
      <div className="relative flex h-full w-full flex-col overflow-hidden p-2">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-center">
          <ServiceGlyph icon={SERVICE_ICONS[service.num] ?? Sparkles} />
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 bottom-6 select-none text-[110px] font-black leading-none text-white/[0.04]"
        >
          {service.num}
        </span>
        {service.href && (
          <a
            href={service.href}
            className="relative z-10 mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
          >
            {service.more ?? 'Learn more'}
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    ),
  }));

  return (
    <section id="services" className="relative border-t border-white/[0.06] px-6 py-20">
      <div className="relative z-10 mx-auto mb-10 max-w-6xl">
        <span className="text-xs font-semibold tracking-[0.08em] text-[#ff8c7f]">What We Do</span>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          <CinematicText>Eight ways we turn AI into working product.</CinematicText>
        </h2>
      </div>
      <StickyScrollReveal items={items} dark vhPerItem={52} ambient />
    </section>
  );
}

function FinalCtaBeat() {
  return (
    <ScrollScene
      id="story-final-cta"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28"
      pin={false}
      scrub={1}
      start="top bottom"
      end="center center"
      build={({ timeline, q }) => {
        timeline
          .fromTo(q('.cta-beams'), { opacity: 0.15 }, { opacity: 1, ease: 'none' })
          .fromTo(q('.cta-meteors'), { opacity: 0 }, { opacity: 1, ease: 'none' }, '<');
      }}
    >
      <div className="cta-beams">
        <BackgroundBeams />
      </div>
      <div className="cta-meteors">
        <Meteors number={22} />
      </div>
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold leading-tight md:text-5xl">
          <CinematicText>{FINAL_CTA_CONTENT.headline}</CinematicText>
        </h2>
        <Reveal as="p" delay={0.1} className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base">
          {FINAL_CTA_CONTENT.sub}
        </Reveal>
        <Reveal delay={0.2} className="mt-8">
          <MagneticButton href={FINAL_CTA_CONTENT.cta.href} className="btn-accent">
            <span>{FINAL_CTA_CONTENT.cta.label}</span>
          </MagneticButton>
        </Reveal>
      </div>
    </ScrollScene>
  );
}
