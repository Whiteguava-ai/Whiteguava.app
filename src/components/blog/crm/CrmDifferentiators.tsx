'use client';

import {
  Boxes,
  Code2,
  DatabaseZap,
  Infinity as InfinityIcon,
  Sparkles,
  TrendingDown,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import styles from './crm.module.css';

interface Diff {
  icon: LucideIcon;
  title: string;
  body: React.ReactNode;
}

const DIFFS: Diff[] = [
  {
    icon: InfinityIcon,
    title: 'No per-seat cost, ever',
    body: (
      <>
        Add the whole company, your partners, and read-only viewers. The price <b>does not move</b>.
        Zoho tiers can’t even be mixed, if two people need Ultimate, all ten pay for it.
      </>
    ),
  },
  {
    icon: DatabaseZap,
    title: 'You hold the data',
    body: (
      <>
        It’s a database on <b>your</b> Azure subscription, not a vendor’s cloud. Full SQL access,
        full export, no lock-in, nothing to negotiate if you ever leave.
      </>
    ),
  },
  {
    icon: Code2,
    title: 'The source is yours to change',
    body: (
      <>
        We rebrand it, patch it, and build features straight onto it, the AI module was added this
        way. A licensed product can’t be edited like that at any price.
      </>
    ),
  },
  {
    icon: Sparkles,
    title: 'AI without an AI tier',
    body: (
      <>
        Drafting, summaries and Ask-AI cost <b>~$3–5/month</b> in usage. Zoho makes you jump to
        Enterprise ($4,800/yr) for Zia; Salesforce Einstein is a paid add-on on a $21,000/yr plan.
      </>
    ),
  },
  {
    icon: TrendingDown,
    title: 'No forced upgrades or price hikes',
    body: (
      <>
        Salesforce raised Enterprise from $165 to $175 and Unlimited from $330 to $350 in 2026.
        GuavaCRM has no renewal to raise, you already own it.
      </>
    ),
  },
  {
    icon: Boxes,
    title: 'Runs on one ~$28/month server',
    body: (
      <>
        Not a licence, not a seat count, a single virtual machine you can size up or down. Everything
        else is included in the setup.
      </>
    ),
  },
];

/**
 * The "what the paid options can't give you" showcase, the point of the whole
 * pitch, called out on its own.
 */
export function CrmDifferentiators() {
  return (
    <div className={styles.widget}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>Only here</span>
        <h3 className={styles.wTitle}>Six things Salesforce and Zoho will never give you</h3>
      </div>

      <div className={styles.diffGrid}>
        {DIFFS.map((d, i) => {
          const Icon = d.icon;
          return (
            <Reveal key={d.title} className={styles.diffCard} delay={i * 0.05} distance={28}>
              <span className={styles.diffIcon}>
                <Icon size={19} strokeWidth={1.9} />
              </span>
              <h4 className={styles.diffTitle}>{d.title}</h4>
              <p className={styles.diffBody}>{d.body}</p>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
