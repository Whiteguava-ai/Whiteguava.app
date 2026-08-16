'use client';
import { useState } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import { useInViewVideos } from '@/hooks/useScrollVideo';
import { SERVICE_PATHS } from '@/lib/site';
import styles from './Services.module.css';

const services = [
  {
    num: '01',
    title: 'AI Agents & Automation',
    desc: 'Build intelligent agents that understand context, use tools, access business data, and execute workflows end-to-end.',
    tags: ['Customer support agents', 'WhatsApp AI agents', 'Workflow automation', 'MCP/tool-enabled agents', 'Internal AI assistants'],
    href: SERVICE_PATHS.agents,
    more: 'Explore AI agents',
  },
  {
    num: '02',
    title: 'Custom AI & Machine Learning',
    desc: 'Build intelligent systems around your data and business requirements — from generative AI and RAG to prediction and classification.',
    tags: ['Generative AI', 'RAG systems', 'NLP & computer vision', 'Prediction & recommendation', 'Fine-tuning'],
    href: SERVICE_PATHS.agents,
    more: 'Explore custom AI systems',
  },
  {
    num: '03',
    title: 'Business Software Development',
    desc: 'Custom software built around how your business actually operates — from web apps to portals, dashboards, and platforms.',
    tags: ['Web applications', 'Mobile applications', 'Admin dashboards', 'Customer portals', 'ERP & CRM systems'],
    href: SERVICE_PATHS.software,
    more: 'Explore AI software development',
  },
  {
    num: '04',
    title: 'AI Integration',
    desc: 'Bring AI into the systems your business already uses — CRM, ERP, WhatsApp, APIs, databases, and cloud platforms.',
    tags: ['CRM & ERP integrations', 'WhatsApp & messaging', 'API & database connectors', 'Third-party AI models', 'Internal system integration'],
    href: SERVICE_PATHS.whatsapp,
    more: 'Explore WhatsApp AI & integrations',
  },
  {
    num: '05',
    title: 'Automation & Digital Transformation',
    desc: 'Replace repetitive manual processes with intelligent, reliable workflows — from document processing to approval flows.',
    tags: ['Document processing', 'Data extraction', 'Reporting automation', 'Lead & ops automation', 'Approval workflows'],
    href: SERVICE_PATHS.automation,
    more: 'Explore AI automation',
  },
  {
    num: '06',
    title: 'Data & Analytics',
    desc: 'Turn raw business data into useful intelligence — dashboards, pipelines, and AI-ready data infrastructure.',
    tags: ['Data pipelines', 'Analytics dashboards', 'Business intelligence', 'AI-ready infrastructure', 'Predictive analytics'],
  },
  {
    num: '07',
    title: 'Cloud & Deployment',
    desc: 'Take your product from development to production on AWS, Azure, or your preferred cloud platform.',
    tags: ['AWS & Azure', 'Backend infrastructure', 'APIs & databases', 'Monitoring & scaling', 'CI/CD pipelines'],
  },
  {
    num: '08',
    title: 'AI-Powered Digital Experiences',
    desc: 'Build better customer and employee experiences with AI — intelligent search, assistants, and personalized interfaces.',
    tags: ['AI search', 'Conversational interfaces', 'Intelligent websites', 'AI-powered portals', 'Personalized experiences'],
    href: SERVICE_PATHS.agents,
    more: 'Explore conversational AI',
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const stackRef = useInViewVideos();

  return (
    <section id="services" className={styles.services}>
      <SectionStage>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className="section-badge reveal">
              <span className="section-badge-dot" />
              What We Build
            </div>
            <h2 className={`${styles.headline} reveal reveal-delay-1`}>
              What We<br />Build
            </h2>
            <p className={`${styles.desc} reveal reveal-delay-2`}>
              AI software development, agents, and automation built around your business — from idea to production.
            </p>
            <div className={`${styles.films} reveal reveal-delay-3`} ref={stackRef}>
              <div className={styles.film}>
                <video
                  className={styles.video}
                  data-src="/media/agent-assemble.mp4"
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                />
              </div>
              <div className={styles.film}>
                <video
                  className={styles.video}
                  data-src="/media/agent-stack.mp4"
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className={`${styles.accordion} reveal reveal-delay-2`}>
            {services.map((s, i) => (
              <div
                key={i}
                className={`${styles.item} ${active === i ? styles.active : ''}`}
                onClick={() => setActive(i)}
              >
                <div className={styles.itemHeader}>
                  <h3 className={styles.itemTitle}>{s.title}</h3>
                  <span className={styles.itemNum}>({s.num})</span>
                </div>
                <div className={styles.itemBody}>
                  <p className={styles.itemDesc}>{s.desc}</p>
                  <div className={styles.tags}>
                    {s.tags.map((t, j) => (
                      <span key={j} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                  {s.href && (
                    <a
                      href={s.href}
                      className={styles.more}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {s.more} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
