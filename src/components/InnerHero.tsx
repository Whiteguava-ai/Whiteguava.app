'use client';

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
  return (
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
            {badge}
          </div>
          <h1 className={`${hero.headline} reveal reveal-delay-1`}>
            {highlight && line1.includes(highlight) ? (
              <>
                {line1.slice(0, line1.indexOf(highlight))}
                <span className={hero.demand}>{highlight}</span>
                {line1.slice(line1.indexOf(highlight) + highlight.length)}
              </>
            ) : (
              line1
            )}
            {line2 && (
              <>
                <br />
                {highlight && line2.includes(highlight) ? (
                  <>
                    {line2.slice(0, line2.indexOf(highlight))}
                    <span className={hero.demand}>{highlight}</span>
                    {line2.slice(line2.indexOf(highlight) + highlight.length)}
                  </>
                ) : (
                  line2
                )}
              </>
            )}
          </h1>
          <p className={`${hero.sub} reveal reveal-delay-2`}>{subtitle}</p>
          <div className={`${hero.ctas} reveal reveal-delay-3`}>
            <a href={primaryHref} className={hero.btnDark}><span>{primaryLabel}</span></a>
            <a href={secondaryHref} className={hero.btnLight}><span>{secondaryLabel}</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
