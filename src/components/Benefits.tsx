import { CinematicText } from '@/components/motion/CinematicText';
import { Reveal } from '@/components/motion/Reveal';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Benefits.module.css';

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <SectionStage>
      <div className="container">
        <Reveal className={styles.top} stagger>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Why WhiteGuava
          </div>
          <h2 className={styles.headline}>
            <CinematicText>Why WhiteGuava</CinematicText>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {/* Card 1 */}
          <Reveal className={styles.card} direction="left">
            <div className={styles.cardIllustration}>
              <div className={styles.metricsViz}>
                {['Business','AI','Software','Outcome'].map((label, i) => (
                  <div key={i} className={styles.metricRow}>
                    <div className={styles.metricBar}>
                      <div className={styles.metricFill} style={{ width: `${[60,80,90,100][i]}%` }} />
                    </div>
                    <span className={styles.metricLabel}>
                      <span className={styles.metricIcon}>{['◎','⊙','▣','✓'][i]}</span>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <h3 className={styles.cardTitle}>Built Around Your Business</h3>
            <p className={styles.cardDesc}>
              We don&apos;t force your workflow into a generic product. Every solution is shaped around how your business actually operates.
            </p>
          </Reveal>

          {/* Card 2 */}
          <Reveal className={styles.card} direction="right">
            <div className={styles.cardIllustration}>
              <div className={styles.checkGrid}>
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className={`${styles.checkBox} ${i <= 4 ? styles.checkBoxActive : ''}`}>
                    {i <= 4 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="3">
                        <path d="M5 12l5 5L20 7"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <h3 className={styles.cardTitle}>AI Where It Matters</h3>
            <p className={styles.cardDesc}>
              We use AI where it creates measurable value — not simply because it is trendy. Practical application over hype.
            </p>
          </Reveal>

          {/* Card 3 */}
          <Reveal className={styles.card} direction="left">
            <div className={styles.cardIllustration}>
              <div className={styles.shieldWrap}>
                <svg width="110" height="110" viewBox="0 0 100 110" fill="none">
                  <path d="M50 5L10 20V55C10 75 28 93 50 100C72 93 90 75 90 55V20L50 5Z" fill="#F0F0F0" stroke="#DDD" strokeWidth="1"/>
                  <path d="M50 15L18 28V55C18 71 32 86 50 93C68 86 82 71 82 55V28L50 15Z" fill="#E8E8E8"/>
                </svg>
                <div className={styles.lockIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className={styles.cardTitle}>From Idea to Production</h3>
            <p className={styles.cardDesc}>
              Strategy, design, engineering, integration, and deployment under one team — no handoffs between agencies.
            </p>
          </Reveal>

          {/* Card 4 */}
          <Reveal className={styles.card} direction="right">
            <div className={styles.cardIllustration}>
              <div className={styles.uiMockup}>
                <div className={styles.chatBubble}>
                  <div className={styles.chatLine} />
                  <div className={styles.chatLine} style={{ width: '70%' }} />
                </div>
                <div className={styles.uiCard}>
                  <div className={styles.uiAvatar}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1A1A1A">
                      <circle cx="8" cy="12" r="4" /><circle cx="16" cy="12" r="4" opacity="0.5"/>
                    </svg>
                  </div>
                  <div className={styles.uiLines}>
                    <div className={styles.uiLine} />
                    <div className={styles.uiLine} style={{ width: '60%' }} />
                  </div>
                </div>
                <div className={styles.checkMark}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="3">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Software + AI</h3>
            <p className={styles.cardDesc}>
              We don&apos;t just build the AI layer. We build the complete product around it — from interface to infrastructure.
            </p>
          </Reveal>
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
