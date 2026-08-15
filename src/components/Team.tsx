'use client';
import type { ReactNode } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Team.module.css';

const capabilities = [
  {
    area: 'AI & Machine Learning',
    desc: 'Building AI agents, RAG systems, generative AI, and machine learning solutions around real business data and workflows.',
  },
  {
    area: 'Software Engineering',
    desc: 'Full-stack web and mobile application development — from architecture to production-ready code.',
  },
  {
    area: 'Automation & Integrations',
    desc: 'Workflow automation, API integrations, and system connectors that link AI to the tools businesses already use.',
  },
  {
    area: 'Data & Cloud',
    desc: 'Data pipelines, analytics, cloud infrastructure, deployment, and monitoring on AWS and Azure.',
  },
];

export default function Team() {
  return (
    <section className={styles.team}>
      <SectionStage dark>
      <div className="container">
        <div className={`${styles.top} reveal`}>
          <div className={`section-badge section-badge-dark`}>
            <span className="section-badge-dot" />
            Our Team
          </div>
          <h2 className={styles.headline}>
            The People Behind<br />WhiteGuava
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Featured — brand statement */}
          <div className={`${styles.featuredCard} reveal reveal-delay-1`}>
            <div className={styles.featuredInfo} style={{ padding: '40px 36px', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Bengaluru, Karnataka, India
                </p>
                <h3 className={styles.featuredName} style={{ fontSize: '28px', lineHeight: 1.3 }}>
                  A team of engineers, AI specialists, and product builders.
                </h3>
              </div>
              <p className={styles.featuredRole} style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', marginTop: '20px' }}>
                We combine deep technical expertise with practical business thinking to build AI and software solutions that actually work — not just in demos, but in production.
              </p>
              <div className={styles.socials} style={{ marginTop: '24px' }}>
                <SocialBtn type="linkedin" />
                <SocialBtn type="twitter" />
                <SocialBtn type="github" />
              </div>
            </div>
          </div>

          {/* Capability grid */}
          <div className={styles.subGrid}>
            {capabilities.map((c, i) => (
              <div key={i} className={`${styles.memberCard} reveal reveal-delay-${i + 2}`}>
                <div className={styles.memberTop}>
                  <div className={styles.socials}>
                    <span style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.7)',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <h4 className={styles.memberName}>{c.area}</h4>
                <p className={styles.memberRole}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </SectionStage>
    </section>
  );
}

function SocialBtn({ type, small }: { type: string; small?: boolean }) {
  const icons: Record<string, ReactNode> = {
    twitter: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    linkedin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    github: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  };
  const size = small ? styles.socialBtnSm : styles.socialBtn;
  return (
    <button className={`${styles.socialBtnBase} ${size}`} aria-label={type}>
      {icons[type]}
    </button>
  );
}
