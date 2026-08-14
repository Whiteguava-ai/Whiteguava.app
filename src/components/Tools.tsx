'use client';
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
          <div className={`${styles.content} reveal`}>
            <div className="section-badge">
              <span className="section-badge-dot" />
              Tools
            </div>
            <h2 className={styles.headline}>
              We work with powerful<br />AI tools
            </h2>
            <p className={styles.desc}>
              We design, build, and evaluate with a modern AI stack—LLMs, vector search, orchestration, and observability—so your features are fast, reliable, and secure.
            </p>
            <a href="#contact" className="btn-dark"><span>Get Started</span></a>
          </div>
        </div>
      </SectionStage>
    </section>
  );
}
