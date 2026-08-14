'use client';
import type { ReactNode } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Team.module.css';

const members = [
  {
    name: 'Ava Collins',
    role: "AgenAI's Design Lead",
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    featured: true,
    socials: ['twitter', 'linkedin', 'github'],
  },
  {
    name: 'Noah Reed',
    role: 'ML/Agent Lead. Builds domain agents',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    socials: ['linkedin', 'github'],
  },
  {
    name: 'Jordan Brooks',
    role: 'Data Engineer. Secure access policies',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    socials: ['linkedin', 'github'],
  },
  {
    name: 'Lucas Hayes',
    role: 'Solutions Architect. Connects AI to your stack',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    socials: ['linkedin', 'github'],
  },
  {
    name: 'Erin Park',
    role: 'MLOps Engineer. Productionizes with CI/CD',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    socials: ['linkedin', 'github'],
  },
];

export default function Team() {
  const featured = members[0];
  const rest = members.slice(1);

  return (
    <section className={styles.team}>
      <SectionStage dark>
      <div className="container">
        <div className={`${styles.top} reveal`}>
          <div className={`section-badge section-badge-dark`}>
            <span className="section-badge-dot" />
            Team Members
          </div>
          <h2 className={styles.headline}>
            The Squad Shipping<br />Your AI
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Featured card */}
          <div className={`${styles.featuredCard} reveal reveal-delay-1`}>
            <img src={featured.img} alt={featured.name} className={styles.featuredImg} />
            <div className={styles.featuredInfo}>
              <h3 className={styles.featuredName}>{featured.name}</h3>
              <p className={styles.featuredRole}>{featured.role}</p>
              <div className={styles.socials}>
                <SocialBtn type="twitter" />
                <SocialBtn type="linkedin" />
                <SocialBtn type="github" />
              </div>
            </div>
          </div>

          {/* Grid of 4 */}
          <div className={styles.subGrid}>
            {rest.map((m, i) => (
              <div key={i} className={`${styles.memberCard} reveal reveal-delay-${i + 2}`}>
                <div className={styles.memberTop}>
                  <img src={m.img} alt={m.name} className={styles.memberImg} />
                  <div className={styles.socials}>
                    <SocialBtn type="linkedin" small />
                    <SocialBtn type="github" small />
                  </div>
                </div>
                <h4 className={styles.memberName}>{m.name}</h4>
                <p className={styles.memberRole}>{m.role}</p>
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
