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
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { StickyScrollReveal, type StickyScrollItem } from '@/components/ui/sticky-scroll-reveal';
import {
  FINAL_CTA_CONTENT,
  SERVICES_CONTENT,
  TECH_CORE_CONTENT,
  VOID_CONTENT,
  WORLD_FORMS_CONTENT,
} from '@/data/story';

/**
 * The homepage's opening narrative — a dark, scroll-driven sequence that
 * replaces the old three.js `CinematicExperience`. Built entirely from CSS/SVG
 * animation and Framer Motion (see `src/components/ui/`), it walks through the
 * same beats the WebGL scene graph did: hero → capability → services → CTA,
 * then hands off into the light-themed `Process`/`Works` sections below it.
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
    <section
      id="story-hero"
      className="relative min-h-[100svh] overflow-hidden px-6 pb-24 pt-40 md:pt-52"
    >
      <GradientFlow />
      <Spotlight />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold tracking-[0.08em] text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
          {VOID_CONTENT.badge}
        </span>

        <h1 className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <TextGenerateEffect words={WORLD_FORMS_CONTENT.headline[0]} className="block" />{' '}
          <span className="mt-1 block">
            {WORLD_FORMS_CONTENT.headline[1].replace('AI.', '').trim()}{' '}
            <span className="text-[var(--accent)]">AI.</span>
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          {WORLD_FORMS_CONTENT.sub}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href={WORLD_FORMS_CONTENT.ctaPrimary.href} className="btn-dark">
            <span>{WORLD_FORMS_CONTENT.ctaPrimary.label}</span>
          </a>
          <a href={WORLD_FORMS_CONTENT.ctaSecondary.href} className="btn-outline">
            <span>{WORLD_FORMS_CONTENT.ctaSecondary.label}</span>
          </a>
        </div>

        <div className="mt-20 w-full max-w-md">
          <CardContainer containerClassName="w-full">
            <CardBody className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <CardItem translateZ={40} className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.08em] text-white/40">STACK</span>
                <span className="text-3xl font-extrabold text-[var(--accent)]">{TECH_CORE_CONTENT.stat}</span>
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
      </div>
    </section>
  );
}

function CapabilityBeat() {
  return (
    <section id="story-capability" className="relative overflow-hidden px-6 py-24 md:py-32">
      <GradientFlow className="opacity-70" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="reveal">
          <span className="text-xs font-semibold tracking-[0.08em] text-[#ff8c7f]">
            {TECH_CORE_CONTENT.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            From idea to working product — without the guesswork.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">{TECH_CORE_CONTENT.body}</p>
        </div>

        <CardContainer>
          <CardBody className="relative w-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8">
            <CardItem translateZ={50} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {TECH_CORE_CONTENT.techs.map((tech, i) => (
                <span
                  key={tech}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-[12px] font-semibold text-white/70"
                  style={{ transform: `translateZ(${(i % 3) * 6}px)` }}
                >
                  {tech}
                </span>
              ))}
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
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
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Eight ways we turn AI into working product.</h2>
      </div>
      <StickyScrollReveal items={items} dark vhPerItem={65} ambient />
    </section>
  );
}

function FinalCtaBeat() {
  return (
    <section id="story-final-cta" className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28">
      <BackgroundBeams />
      <Meteors number={20} />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold leading-tight md:text-5xl">{FINAL_CTA_CONTENT.headline}</h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base">
          {FINAL_CTA_CONTENT.sub}
        </p>
        <a href={FINAL_CTA_CONTENT.cta.href} className="btn-accent mt-8">
          <span>{FINAL_CTA_CONTENT.cta.label}</span>
        </a>
      </div>
    </section>
  );
}
