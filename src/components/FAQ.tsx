'use client';
import { useState } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'What type of businesses do you work with?',
    a: 'We work with businesses of all sizes — from startups building their first product to established companies looking to automate processes or integrate AI into existing systems. If you have a real problem worth solving, we can help.',
  },
  {
    q: 'What kind of AI solutions can WhiteGuava build?',
    a: 'We build AI agents, RAG systems, generative AI applications, machine learning models, NLP systems, computer vision solutions, prediction and recommendation systems, and custom AI workflows tailored to your business.',
  },
  {
    q: 'Can you integrate AI into our existing software?',
    a: 'Yes. We specialise in connecting AI to the systems your business already uses — CRM, ERP, databases, APIs, cloud platforms, and internal tools. AI should work with your stack, not replace it.',
  },
  {
    q: 'Can you build a complete application from scratch?',
    a: 'Absolutely. We build full-stack web applications, mobile applications, admin dashboards, customer portals, and industry-specific platforms. We handle design, development, and deployment.',
  },
  {
    q: 'Can you build WhatsApp AI agents?',
    a: 'Yes. We build WhatsApp AI agents that can handle customer queries, access your product or service data, process requests, and escalate to human agents when needed — all connected to your business systems.',
  },
  {
    q: 'Can you connect AI to our internal documents and data?',
    a: 'Yes. We build RAG (Retrieval Augmented Generation) systems that connect AI to your internal documents, databases, policies, and wikis — so it answers from your business knowledge, not general internet data.',
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Yes. We work with businesses at every stage. For early-stage companies, we offer AI discovery and rapid prototyping to validate ideas. For growing businesses, we build production-ready systems designed to scale.',
  },
  {
    q: 'Do you provide deployment and ongoing support?',
    a: 'Yes. We take your solution from development to production — handling cloud deployment, infrastructure, monitoring, and post-launch improvements. We aim to be a long-term technical partner, not a one-time vendor.',
  },
  {
    q: 'How is project pricing determined?',
    a: 'We work through custom project scopes based on your specific requirements, complexity, and timeline. We discuss your project first, understand the scope, and then provide a clear proposal.',
  },
  {
    q: 'What technologies do you use?',
    a: 'Python, TypeScript, React, Next.js, FastAPI, Node.js, PostgreSQL, MongoDB, Docker, AWS, Azure, OpenAI, Anthropic, Google AI, LangChain, Hugging Face, vector databases, and more — chosen based on what fits your project best.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.faq}>
      <SectionStage>
      <div className="container">
        <div className={`${styles.top} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            FAQs
          </div>
          <h2 className={styles.headline}>Frequently Asked Questions</h2>
        </div>
        <div className={`${styles.list} reveal reveal-delay-2`}>
          {faqs.map((item, i) => (
            <button
              key={item.q}
              className={`${styles.item} ${open === i ? styles.open : ''}`}
              onClick={() => setOpen(i)}
            >
              <div className={styles.q}>
                <span>{item.q}</span>
                <span className={styles.icon}>{open === i ? '–' : '+'}</span>
              </div>
              <div className={styles.a}>{item.a}</div>
            </button>
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
