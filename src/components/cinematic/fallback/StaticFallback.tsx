import {
  VOID_CONTENT,
  WORLD_FORMS_CONTENT,
  TECH_CORE_CONTENT,
  SERVICES_CONTENT,
  PIPELINE_CONTENT,
  PROJECTS_CONTENT,
  FINAL_CTA_CONTENT,
} from '@/data/cinematic';
import overlayStyles from '../overlay/OverlayContent.module.css';
import styles from './StaticFallback.module.css';

export default function StaticFallback() {
  return (
    <div className={styles.fallback}>
      <section id="home" className={styles.section}>
        <div className={`${overlayStyles.inner} reveal`}>
          <span className={overlayStyles.badge}>{VOID_CONTENT.badge}</span>
          <h1 className={overlayStyles.headline}>
            {WORLD_FORMS_CONTENT.headline[0]}
            <br />
            With <span className={overlayStyles.accent}>AI.</span>
          </h1>
          <p className={overlayStyles.sub}>{WORLD_FORMS_CONTENT.sub}</p>
          <div className={overlayStyles.ctas}>
            <a href={WORLD_FORMS_CONTENT.ctaPrimary.href} className="btn-dark"><span>{WORLD_FORMS_CONTENT.ctaPrimary.label}</span></a>
            <a href={WORLD_FORMS_CONTENT.ctaSecondary.href} className="btn-outline"><span>{WORLD_FORMS_CONTENT.ctaSecondary.label}</span></a>
          </div>
          <p className={`${overlayStyles.quote} reveal reveal-delay-2`} style={{ marginTop: 40, fontSize: 20 }}>
            {VOID_CONTENT.line1} {VOID_CONTENT.line2}
          </p>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={`${overlayStyles.inner} reveal`}>
          <p className={overlayStyles.eyebrow}>{TECH_CORE_CONTENT.eyebrow}</p>
          <p className={overlayStyles.sub}>{TECH_CORE_CONTENT.body}</p>
          <div className={overlayStyles.stat}>{TECH_CORE_CONTENT.stat}</div>
          <p className={overlayStyles.note}>{TECH_CORE_CONTENT.location} · {TECH_CORE_CONTENT.availability}</p>
          <div className={overlayStyles.tagRow}>
            {TECH_CORE_CONTENT.tags.map((tag) => <span key={tag} className={overlayStyles.tag}>{tag}</span>)}
          </div>
          <div className={overlayStyles.tagRow}>
            {TECH_CORE_CONTENT.techs.map((tech) => <span key={tech} className={overlayStyles.tag}>{tech}</span>)}
          </div>
        </div>
      </section>

      <section id="services" className={styles.section}>
        <div className={overlayStyles.inner} style={{ maxWidth: 880 }}>
          <p className={`${overlayStyles.eyebrow} reveal`}>What We Build</p>
          <h2 className={`${overlayStyles.headlineSmall} reveal`}>AI software, agents, and automation — built around your business.</h2>
          <div className={overlayStyles.grid}>
            {SERVICES_CONTENT.map((service, i) => (
              <div key={service.num} className={`${overlayStyles.card} reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                <div className={overlayStyles.cardTitle}>({service.num}) {service.title}</div>
                <p className={overlayStyles.cardDesc}>{service.desc}</p>
                {service.href && <a href={service.href} className={overlayStyles.cardLink}>{service.more} →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className={styles.section}>
        <div className={overlayStyles.inner} style={{ maxWidth: 680 }}>
          <p className={`${overlayStyles.eyebrow} reveal`}>How We Build</p>
          <div className={overlayStyles.stepList}>
            {PIPELINE_CONTENT.map((step, i) => (
              <div key={step.num} className={`${overlayStyles.stepRow} reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                <span className={overlayStyles.stepNum}>{step.num}</span>
                <span className={overlayStyles.stepTitle}>{step.title}</span>
                <span className={overlayStyles.stepDesc}>{step.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className={styles.section}>
        <div className={overlayStyles.inner} style={{ maxWidth: 880 }}>
          <p className={`${overlayStyles.eyebrow} reveal`}>Capability Showcase</p>
          <h2 className={`${overlayStyles.headlineSmall} reveal`}>Representative project types we build.</h2>
          <div className={overlayStyles.grid}>
            {PROJECTS_CONTENT.map((project, i) => (
              <div key={project.title} className={`${overlayStyles.card} reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                <div className={overlayStyles.cardTitle}>{project.title}</div>
                <p className={overlayStyles.cardDesc}>{project.desc}</p>
                <p className={overlayStyles.note} style={{ marginTop: 0 }}>{project.deliverables} · {project.industry}</p>
              </div>
            ))}
          </div>
          <a href="/#contact" className={overlayStyles.cardLink}>Discuss a project like this →</a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${overlayStyles.inner} reveal`}>
          <h2 className={overlayStyles.headline}>{FINAL_CTA_CONTENT.headline}</h2>
          <p className={overlayStyles.sub}>{FINAL_CTA_CONTENT.sub}</p>
          <div className={overlayStyles.ctas}>
            <a href={FINAL_CTA_CONTENT.cta.href} className="btn-accent"><span>{FINAL_CTA_CONTENT.cta.label}</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
