import { CinematicText } from '@/components/motion/CinematicText';
import { Reveal } from '@/components/motion/Reveal';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Testimonials.module.css';

/**
 * A bold, full-bleed statement instead of a boxed "testimonial" card dressed
 * up with a fake avatar and star rating for a quote that is, honestly, just
 * WhiteGuava's own pitch. Leaning into that directly (this is a claim,
 * not a customer quote) is more honest than pretending otherwise, and the
 * giant editorial typography gives the homepage a real visual beat instead
 * of another bordered card.
 */
export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <SectionStage dark>
      <div className="container">
        <Reveal className={styles.header} stagger>
          <div className="section-badge section-badge-dark">
            <span className="section-badge-dot" />
            Work With Us
          </div>
        </Reveal>

        <Reveal direction="scale" duration={0.8}>
          <p className={styles.statement}>
            <CinematicText as="span">
              Tell us what you&apos;re trying to build, automate, or improve.
            </CinematicText>{' '}
            <span className={styles.statementDim}>
              We&apos;ll help you identify the right technical approach and turn it into a working solution.
            </span>
          </p>

          <div className={styles.footer}>
            <div className={styles.meta}>
              <strong>WhiteGuava</strong>
              <span>AI + Software + Automation · Bengaluru, India</span>
            </div>
            <a href="/#contact" className="btn-accent">
              <span>Start a Project →</span>
            </a>
          </div>
        </Reveal>
      </div>
      </SectionStage>
    </section>
  );
}
