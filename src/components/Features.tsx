'use client';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Features.module.css';

const features = [
  {
    title: 'Agent-Powered Workflows',
    desc: 'Turn repetitive tasks into autonomous flows—agents plan, execute, and report with guardrails, audit trails, and clear handoff to humans.',
    visual: 'flow',
  },
  {
    title: 'Eval-First Quality',
    desc: 'Measure accuracy, latency, safety, and cost from day one. Our evals and dashboards keep models reliable and budgets predictable.',
    visual: 'eval',
  },
  {
    title: 'Private Knowledge RAG',
    desc: 'Make your docs, tickets, and wikis instantly useful with retrieval augmented generation—freshness, citations, and explainability built in.',
    visual: 'rag',
  },
  {
    title: 'Human-Centered AI UX',
    desc: 'Interfaces, prompts, and error states designed for trust and adoption—so the smart thing is also the obvious thing to do.',
    visual: 'ux',
  },
  {
    title: 'brand',
    desc: '',
    visual: 'brand',
  },
  {
    title: 'Secure by Design',
    desc: 'PII handling, SSO/SAML, RBAC, secrets management, and compliance workflows—ship AI that’s safe, auditable, and enterprise-ready.',
    visual: 'secure',
  },
  {
    title: 'Seamless Integrations',
    desc: 'Plug into your stack (CRM, helpdesk, ERP, data warehouse) with webhooks and APIs to turn insights into action—fast.',
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
        <div className={`${styles.header} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Features
          </div>
          <h2 className={styles.headline}>All Features in One</h2>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            f.visual === 'brand' ? (
              <div key="brand" className={`${styles.brandCard} reveal reveal-delay-3`}>
                <div className={styles.brandIcon}>
                  <img src="/brand/whiteguava-mark-square.png" alt="" />
                </div>
                <span>WhiteGuava</span>
              </div>
            ) : (
              <div key={f.title} className={`${styles.card} reveal reveal-delay-${(i % 6) + 1}`}>
                <Visual type={f.visual} />
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            )
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
