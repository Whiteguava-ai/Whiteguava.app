import SectionStage from '@/components/visual/SectionStage';
import styles from './Stats.module.css';

const items = [
  { label: 'AI', value: 'Agents' },
  { label: 'SOFTWARE', value: 'Engineering' },
  { label: 'AUTOMATION', value: 'Systems' },
  { label: 'DATA', value: 'Pipelines' },
  { label: 'CLOUD', value: 'Deployment' },
];

export default function Stats() {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <section className={styles.stats}>
      <SectionStage dark>
      <div className="container">
        <div className={`${styles.top} reveal`}>
          <div className="section-badge section-badge-dark">
            <span className="section-badge-dot" />
            Capabilities
          </div>
          <h2 className={styles.headline}>One Team. Multiple Capabilities.</h2>
          <p className={styles.sub}>
            We combine AI, software engineering, automation, data, and cloud to build practical solutions that work in production — not just in demos.
          </p>
        </div>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {loop.map((item, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
