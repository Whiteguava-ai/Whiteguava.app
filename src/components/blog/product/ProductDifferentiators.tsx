'use client';

import {
  BarChart3,
  Blocks,
  Boxes,
  Building2,
  Code2,
  Coins,
  Cpu,
  DatabaseZap,
  Gauge,
  GitBranch,
  GraduationCap,
  Infinity as InfinityIcon,
  KeyRound,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Lock,
  Network,
  Palette,
  PiggyBank,
  Puzzle,
  RefreshCw,
  Rocket,
  ScrollText,
  Server,
  ShieldCheck,
  Sparkles,
  TicketCheck,
  TrendingDown,
  Users,
  Wallet,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { Fragment } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { accentVars } from './accent';
import { getProduct } from './registry';
import styles from './product.module.css';

const ICONS: Record<string, LucideIcon> = {
  infinity: InfinityIcon,
  database: DatabaseZap,
  code: Code2,
  sparkles: Sparkles,
  trendingDown: TrendingDown,
  boxes: Boxes,
  shield: ShieldCheck,
  users: Users,
  layers: Layers,
  branch: GitBranch,
  gauge: Gauge,
  lock: Lock,
  server: Server,
  workflow: Workflow,
  blocks: Blocks,
  piggyBank: PiggyBank,
  graduation: GraduationCap,
  lifebuoy: LifeBuoy,
  chart: BarChart3,
  palette: Palette,
  coins: Coins,
  wallet: Wallet,
  network: Network,
  cpu: Cpu,
  building: Building2,
  scroll: ScrollText,
  ticket: TicketCheck,
  dashboard: LayoutDashboard,
  rocket: Rocket,
  key: KeyRound,
  refresh: RefreshCw,
  puzzle: Puzzle,
};

/** Renders **bold** spans inside otherwise-plain differentiator copy. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <b key={i}>{part.slice(2, -2)}</b>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/**
 * The "what a subscription can't give you" showcase, the point of the whole
 * pitch, called out on its own.
 */
export function ProductDifferentiators({ product }: { product?: string }) {
  const def = getProduct(product);
  if (!def) return null;

  return (
    <div className={styles.widget} style={accentVars(def.accent)}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>Only here</span>
        <h3 className={styles.wTitle}>What renting {def.replaces} will never give you</h3>
      </div>

      <div className={styles.diffGrid}>
        {def.diffs.map((d, i) => {
          const Icon = ICONS[d.icon] ?? Boxes;
          return (
            <Reveal key={d.title} className={styles.diffCard} delay={i * 0.05} distance={28}>
              <span className={styles.diffIcon}>
                <Icon size={19} strokeWidth={1.9} />
              </span>
              <h4 className={styles.diffTitle}>{d.title}</h4>
              <p className={styles.diffBody}>
                <RichText text={d.body} />
              </p>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
