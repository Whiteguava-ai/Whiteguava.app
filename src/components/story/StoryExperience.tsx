'use client';

import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  BrainCircuit,
  Cloud,
  LayoutDashboard,
  Plug2,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import InnerHero from '@/components/InnerHero';
import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d';
import { ServiceGlyph } from '@/components/ui/service-glyph';
import { Spotlight } from '@/components/ui/spotlight';
import { getTechColor, TechLogo } from '@/components/ui/tech-logos';
import { CinematicText } from '@/components/motion/CinematicText';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';
import {
  FINAL_CTA_CONTENT,
  SERVICES_CONTENT,
  TECH_CORE_CONTENT,
  VOID_CONTENT,
  WORLD_FORMS_CONTENT,
  type CinematicService,
} from '@/data/story';

/**
 * The homepage's opening run: hero, capability intro, services showcase, and
 * a closing CTA nudge, all in the same light, brand-consistent style used
 * across the rest of the site (`InnerHero`, `Process`'s white 3D-tilt cards,
 * `section-badge` / `CinematicText` / `Reveal`), so the homepage no longer
 * reads as a one-off dark sequence bolted onto an otherwise light site.
 */
export default function StoryExperience() {
  return (
    <div id="home" className="relative">
      <HeroBeat />
      <CapabilityBeat />
      <ServicesBeat />
      <FinalCtaBeat />
    </div>
  );
}

function HeroBeat() {
  return (
    <InnerHero
      badge={VOID_CONTENT.badge}
      line1={WORLD_FORMS_CONTENT.headline[0]}
      line2={WORLD_FORMS_CONTENT.headline[1]}
      highlight="AI"
      subtitle={WORLD_FORMS_CONTENT.sub}
      primaryHref={WORLD_FORMS_CONTENT.ctaPrimary.href}
      primaryLabel={WORLD_FORMS_CONTENT.ctaPrimary.label}
      secondaryHref={WORLD_FORMS_CONTENT.ctaSecondary.href}
      secondaryLabel={WORLD_FORMS_CONTENT.ctaSecondary.label}
    />
  );
}

function CapabilityBeat() {
  const half = Math.ceil(TECH_CORE_CONTENT.techs.length / 2);
  const rowA = TECH_CORE_CONTENT.techs.slice(0, half);
  const rowB = TECH_CORE_CONTENT.techs.slice(half);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <Reveal className="flex flex-col items-center gap-4" stagger>
          <span className="section-badge">
            <span className="section-badge-dot" />
            {TECH_CORE_CONTENT.eyebrow}
          </span>
          <h2 className="text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-4xl">
            <CinematicText>From idea to working product, without the guesswork.</CinematicText>
          </h2>
          <p className="max-w-lg text-[15px] leading-relaxed text-[var(--text-secondary)]">
            {TECH_CORE_CONTENT.body}
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-14 flex flex-col gap-4 md:mt-20" direction="scale" amount={0.3}>
        <TechMarqueeRow techs={rowA} />
        <TechMarqueeRow techs={rowB} reverse />
      </Reveal>
    </section>
  );
}

/**
 * A continuous, seam-free logo ticker instead of a static grid, two rows
 * drifting in opposite directions read as one flowing band rather than a
 * generic "tech stack tiles" grid. Reuses the `marquee` keyframe already
 * defined in globals.css (`translateX(0)` -> `translateX(-50%)`); doubling
 * the item list and scrolling exactly half its width is what makes the loop
 * invisible. Pointer-driven pause-on-hover would fight the seam illusion at
 * the wrap point, so hover only brightens the item under the cursor instead.
 */
function TechMarqueeRow({ techs, reverse = false }: { techs: string[]; reverse?: boolean }) {
  const items = [...techs, ...techs];
  return (
    <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] overflow-hidden">
      <div
        className={cn(
          'flex w-max gap-4 animate-[marquee_38s_linear_infinite]',
          reverse && '[animation-direction:reverse]'
        )}
      >
        {items.map((tech, i) => {
          const accent = getTechColor(tech);
          return (
            <div
              key={`${tech}-${i}`}
              className="group flex shrink-0 items-center gap-2.5 rounded-full border border-black/[0.06] bg-white py-2 pl-2 pr-5 opacity-80 shadow-[var(--shadow-sm)] transition-opacity duration-300 hover:opacity-100"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                style={{ background: `${accent}17` }}
              >
                <TechLogo name={tech} className="h-4 w-4" style={{ color: accent }} />
              </span>
              <span className="whitespace-nowrap text-[13px] font-semibold text-[var(--text-primary)]">{tech}</span>
            </div>
          );
        })}
      </div>
    </div>
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
  '09': Boxes,
};

function ServicesBeat() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="relative z-10 mx-auto mb-14 max-w-3xl md:mb-20">
        <Reveal as="span" direction="down" distance={12} className="section-badge">
          <span className="section-badge-dot" />
          What We Do
        </Reveal>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">
          <CinematicText>Nine ways we turn AI into working product.</CinematicText>
        </h2>
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-5 md:gap-6">
        {SERVICES_CONTENT.map((service, i) => (
          <Reveal key={service.num} delay={Math.min(i * 0.05, 0.3)} amount={0.2}>
            <ServiceCard3D
              service={service}
              icon={SERVICE_ICONS[service.num] ?? Sparkles}
              index={i}
              total={SERVICES_CONTENT.length}
              featured={i === SERVICES_CONTENT.length - 1}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServiceCard3D({
  service,
  icon: Icon,
  index,
  total,
  featured = false,
}: {
  service: CinematicService;
  icon: LucideIcon;
  index: number;
  total: number;
  featured?: boolean;
}) {
  return (
    <CardContainer containerClassName="w-full">
      <CardBody
        className={cn(
          'group relative w-full overflow-hidden rounded-3xl border bg-white p-7 shadow-[var(--shadow-sm)] transition-shadow duration-300 md:p-10',
          featured
            ? 'border-[var(--accent)]/30 bg-gradient-to-br from-[var(--accent)]/[0.08] via-white to-white hover:shadow-[var(--shadow-md)]'
            : 'border-black/[0.06] hover:shadow-[var(--shadow-md)]'
        )}
      >
        <CardItem
          translateZ={15}
          className="pointer-events-none absolute -right-3 -top-8 select-none text-[110px] font-black leading-none text-black/[0.04] md:-right-4 md:text-[160px]"
        >
          {service.num}
        </CardItem>

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          <CardItem translateZ={70} className="shrink-0 self-start md:self-center">
            <ServiceGlyph icon={Icon} dark={false} />
          </CardItem>

          <div className="min-w-0 flex-1">
            <CardItem translateZ={35} as="span" className="text-xs font-semibold tracking-[0.08em] text-[var(--accent)]">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </CardItem>
            <CardItem translateZ={55} as="h3" className="mt-2 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              {service.title}
            </CardItem>
            <CardItem translateZ={25} as="p" className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {service.desc}
            </CardItem>
            <CardItem translateZ={25} className="mt-5 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/[0.06] bg-[var(--bg-card-light)] px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </CardItem>
            {service.href && (
              <CardItem
                translateZ={45}
                as="a"
                href={service.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
              >
                {service.more ?? 'Learn more'}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.25}
                />
              </CardItem>
            )}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

function FinalCtaBeat() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <Spotlight className="opacity-60" color="rgba(230,59,46,0.25)" />
      <Reveal className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center" stagger>
        <span className="section-badge">
          <span className="section-badge-dot" />
          Let&apos;s Talk
        </span>
        <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">
          <CinematicText>{FINAL_CTA_CONTENT.headline}</CinematicText>
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-base">
          {FINAL_CTA_CONTENT.sub}
        </p>
        <MagneticButton href={FINAL_CTA_CONTENT.cta.href} className="btn-accent mt-8">
          <span>{FINAL_CTA_CONTENT.cta.label}</span>
        </MagneticButton>
      </Reveal>
    </section>
  );
}
