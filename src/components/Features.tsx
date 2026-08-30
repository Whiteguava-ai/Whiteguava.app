import { CinematicText } from '@/components/motion/CinematicText';
import { Reveal } from '@/components/motion/Reveal';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Features.module.css';

const features = [
  {
    title: 'AI Agents',
    desc: 'Agents that reason, use tools, access information, and complete tasks end-to-end without constant human intervention.',
    visual: 'flow',
  },
  {
    title: 'Private Knowledge',
    desc: 'Connect business documents, databases, and internal knowledge to AI — so it answers from your data, not the internet.',
    visual: 'rag',
  },
  {
    title: 'Business Automation',
    desc: 'Turn repetitive workflows into intelligent automated processes — from document handling to approvals and reporting.',
    visual: 'eval',
  },
  {
    title: 'AI Applications',
    desc: 'Put intelligent capabilities directly inside your customer or employee applications as native product features.',
    visual: 'ux',
  },
  {
    title: 'brand',
    desc: '',
    visual: 'brand',
  },
  {
    title: 'Predictive Intelligence',
    desc: 'Use machine learning to forecast demand, classify data, detect anomalies, and power recommendation systems.',
    visual: 'secure',
  },
  {
    title: 'Integrations',
    desc: 'Connect AI to CRM, ERP, WhatsApp, APIs, databases, and cloud platforms — where your business already operates.',
    visual: 'integrations',
  },
];

function Visual({ type }: { type: string }) {
  if (type === 'flow') {
    return (
      <div className={styles.viz}>
        <span className={`${styles.node} ${styles.n1}`} />
        <span className={`${styles.node} ${styles.n2}`} />
        <span className={`${styles.node} ${styles.n3}`} />
        <span className={styles.line} />
      </div>
    );
  }
  if (type === 'eval') {
    return (
      <div className={styles.vizBars}>
        {[40, 70, 55, 88].map((h, i) => (
          <span key={i} className={styles.bar} style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    );
  }
  if (type === 'rag') {
    return (
      <div className={styles.vizStack}>
        <span /><span /><span />
      </div>
    );
  }
  if (type === 'secure') {
    return (
      <div className={styles.shield}>
        <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
          <path d="M32 4L8 14v20c0 16 10.5 30.5 24 34 13.5-3.5 24-18 24-34V14L32 4z" fill="#f3f3f3" stroke="#ddd"/>
        </svg>
      </div>
    );
  }
  return (
    <div className={styles.vizGrid}>
      {Array.from({ length: 6 }).map((_, i) => <span key={i} />)}
    </div>
  );
}

export default function Features() {
  return (
    <section className={styles.features}>
      <SectionStage>
      <div className="container">
        <Reveal className={styles.header} stagger>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Capabilities
          </div>
          <h2 className={styles.headline}>
            <CinematicText>Intelligence Built Into Your Workflow</CinematicText>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {features.map((f, i) => (
            f.visual === 'brand' ? (
              <Reveal key="brand" className={styles.brandCard} direction={i % 2 === 0 ? 'left' : 'right'} delay={(i % 3) * 0.06}>
                <div className={styles.brandIcon}>
                  <img src="/brand/whiteguava-mark-square.png" alt="" width={472} height={472} loading="lazy" decoding="async" />
                </div>
                <span>WhiteGuava</span>
              </Reveal>
            ) : (
              <Reveal key={f.title} className={styles.card} direction={i % 2 === 0 ? 'left' : 'right'} delay={(i % 3) * 0.06}>
                <Visual type={f.visual} />
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </Reveal>
            )
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
