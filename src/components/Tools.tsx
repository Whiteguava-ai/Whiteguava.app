import { CinematicText } from '@/components/motion/CinematicText';
import { Reveal } from '@/components/motion/Reveal';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Tools.module.css';

export default function Tools() {
  return (
    <section className={styles.tools}>
      <SectionStage tall>
        <div className={styles.inner}>
          <div className={styles.scene} aria-hidden="true">
            <span className={`${styles.orb} ${styles.orbA}`} />
            <span className={`${styles.orb} ${styles.orbB}`} />
            <span className={`${styles.orb} ${styles.orbC}`} />
            <span className={`${styles.cube} ${styles.cubeA}`} />
            <span className={`${styles.cube} ${styles.cubeB}`} />
            <span className={`${styles.ring}`} />
          </div>
          <Reveal className={styles.content} stagger staggerDelay={0.1}>
            <div className="section-badge">
              <span className="section-badge-dot" />
              Technology
            </div>
            <h2 className={styles.headline}>
              <CinematicText>Built With Modern Technology</CinematicText>
            </h2>
            <p className={styles.desc}>
              Python, TypeScript, React, Next.js, FastAPI, Node.js — combined with OpenAI, Anthropic, Google AI, LangChain, vector databases, AWS, and Azure to build reliable, production-grade AI software and automation.
            </p>
            <a href="/#contact" className="btn-dark"><span>Start a Project</span></a>
          </Reveal>
        </div>
      </SectionStage>
    </section>
  );
}
