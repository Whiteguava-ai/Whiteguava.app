'use client';

import { useMemo, useRef, useState } from 'react';
import { m, useReducedMotion, type PanInfo } from 'framer-motion';
import { DEMO_DEALS, DEMO_STAGES, type DemoDeal, type DemoStage } from './data';
import styles from './crm.module.css';

function money(n: number): string {
  return '$' + n.toLocaleString('en-US');
}

/**
 * A live pipeline — drag a card between stages (desktop) or use the arrows
 * (touch / keyboard / reduced motion). Dropping a deal in "Won" rolls it into
 * the tally. It's the real GuavaCRM Kanban behaviour in miniature.
 */
export function CrmKanbanDemo() {
  const reduced = useReducedMotion();
  const [deals, setDeals] = useState<DemoDeal[]>(DEMO_DEALS);
  const colRefs = useRef<Record<DemoStage, HTMLDivElement | null>>({
    new: null,
    qualified: null,
    proposal: null,
    won: null,
  });

  const move = (id: string, stage: DemoStage) =>
    setDeals((ds) => ds.map((d) => (d.id === id ? { ...d, stage } : d)));

  const shift = (id: string, dir: -1 | 1) => {
    setDeals((ds) =>
      ds.map((d) => {
        if (d.id !== id) return d;
        const i = DEMO_STAGES.findIndex((s) => s.key === d.stage);
        const next = DEMO_STAGES[Math.min(DEMO_STAGES.length - 1, Math.max(0, i + dir))];
        return { ...d, stage: next.key };
      }),
    );
  };

  const onDragEnd = (id: string, info: PanInfo) => {
    const { x, y } = info.point;
    for (const s of DEMO_STAGES) {
      const el = colRefs.current[s.key];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
        move(id, s.key);
        return;
      }
    }
  };

  const wonDeals = useMemo(() => deals.filter((d) => d.stage === 'won'), [deals]);
  const wonValue = wonDeals.reduce((n, d) => n + d.value, 0);
  const pipelineValue = deals.filter((d) => d.stage !== 'won').reduce((n, d) => n + d.value, 0);

  return (
    <div className={styles.widget}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>Live demo</span>
        <h3 className={styles.wTitle}>The pipeline, working</h3>
        <p className={styles.wNote}>
          {reduced
            ? 'Use the arrows to move a deal through the pipeline.'
            : 'Drag a deal between stages, or use the arrows. Drop one in “Won” to bank it.'}
        </p>
      </div>

      <div className={styles.board}>
        {DEMO_STAGES.map((s) => {
          const inStage = deals.filter((d) => d.stage === s.key);
          return (
            <div
              key={s.key}
              ref={(el) => {
                colRefs.current[s.key] = el;
              }}
              className={`${styles.col} ${s.key === 'won' ? styles.wonCol : ''}`}
            >
              <div className={styles.colHead}>
                <span>{s.label}</span>
                <span className={styles.colCount}>{inStage.length}</span>
              </div>
              {inStage.map((d) => {
                const stageIdx = DEMO_STAGES.findIndex((x) => x.key === d.stage);
                return (
                  <m.div
                    key={d.id}
                    layout={!reduced}
                    drag={!reduced}
                    dragSnapToOrigin
                    dragElastic={0.2}
                    onDragEnd={(_, info) => onDragEnd(d.id, info)}
                    whileDrag={{ scale: 1.04, zIndex: 5, boxShadow: '0 12px 30px rgba(0,0,0,0.18)' }}
                    className={styles.deal}
                  >
                    <div className={styles.dealCompany}>{d.company}</div>
                    <div className={styles.dealValue}>{money(d.value)}</div>
                    <div className={styles.dealMove}>
                      <button
                        type="button"
                        onClick={() => shift(d.id, -1)}
                        disabled={stageIdx === 0}
                        aria-label={`Move ${d.company} back`}
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() => shift(d.id, 1)}
                        disabled={stageIdx === DEMO_STAGES.length - 1}
                        aria-label={`Move ${d.company} forward`}
                      >
                        →
                      </button>
                    </div>
                  </m.div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={styles.boardFoot}>
        <div className={styles.stat}>
          <b>{money(pipelineValue)}</b>
          <span>Open pipeline</span>
        </div>
        <div className={`${styles.stat} ${styles.wonStat}`}>
          <b>{money(wonValue)}</b>
          <span>Won · {wonDeals.length} {wonDeals.length === 1 ? 'deal' : 'deals'}</span>
        </div>
      </div>
    </div>
  );
}
