'use client';

import { useState } from 'react';
import { ArrowUpRight, Loader2, Sparkles } from 'lucide-react';
import { Modal } from '@/components/ui/modal';

interface Recommendation {
  name: string;
  href: string;
  why: string;
}

interface ScopeResult {
  summary: string;
  recommendations: Recommendation[];
  note: string;
}

const TEAM_SIZES = ['Just me', '2–10 people', '11–50 people', '51–200 people', '200+ people'];
const BUDGETS = ['Not sure yet', 'Under $2,000', '$2,000–$10,000', '$10,000–$50,000', '$50,000+'];
const TIMELINES = ['ASAP', 'Within a month', '1–3 months', '3–6 months', 'Just exploring'];

/**
 * "Not sure where to start?" — a short form that hands what a visitor
 * describes to Claude (grounded in the same site content `/api/ask` uses)
 * and gets back which products/services actually fit, instead of them
 * reading all ten product pages themselves. Self-contained; rendered from
 * `GuavaShowcase` where it's most relevant.
 */
export default function ProjectScoper() {
  const [open, setOpen] = useState(false);
  const [problem, setProblem] = useState('');
  const [teamSize, setTeamSize] = useState(TEAM_SIZES[1]);
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [timeline, setTimeline] = useState(TIMELINES[2]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ScopeResult | null>(null);

  const openScoper = () => {
    setError(null);
    setResult(null);
    setOpen(true);
  };

  const submit = async () => {
    if (!problem.trim() || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch('/api/scope', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problem: problem.trim(), teamSize, budget, timeline }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setResult(data as ScopeResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button type="button" onClick={openScoper} className="btn-outline">
        <Sparkles className="h-4 w-4" strokeWidth={2.25} />
        <span>Not sure? Get an instant recommendation</span>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="scoper-title">
        <div className="max-h-[85vh] overflow-y-auto rounded-3xl border border-black/[0.06] bg-white p-6 shadow-[var(--shadow-lg)] md:p-8">
          {!result && (
            <>
              <h3 id="scoper-title" className="text-xl font-bold text-[var(--text-primary)] md:text-2xl">
                What are you trying to solve?
              </h3>
              <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
                Describe it in your own words — we&apos;ll match it to the right product or service.
              </p>

              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g. Our sales team tracks leads in spreadsheets and we keep losing follow-ups…"
                rows={3}
                maxLength={600}
                className="mt-4 w-full resize-none rounded-xl border border-black/[0.08] bg-[var(--bg-card-light)] px-4 py-3 text-[14px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)]/40"
              />

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Field label="Team size" value={teamSize} onChange={setTeamSize} options={TEAM_SIZES} />
                <Field label="Budget" value={budget} onChange={setBudget} options={BUDGETS} />
                <Field label="Timeline" value={timeline} onChange={setTimeline} options={TIMELINES} />
              </div>

              {error && <p className="mt-4 text-sm text-[var(--accent)]">{error}</p>}

              <button
                type="button"
                onClick={submit}
                disabled={!problem.trim() || loading}
                className="btn-dark mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Matching you to a product…
                  </span>
                ) : (
                  <span>Get my recommendation</span>
                )}
              </button>
            </>
          )}

          {result && (
            <>
              <h3 className="text-xl font-bold text-[var(--text-primary)] md:text-2xl">Here&apos;s what fits</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">{result.summary}</p>

              <div className="mt-5 flex flex-col gap-3">
                {result.recommendations.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    className="group rounded-2xl border border-black/[0.06] bg-[var(--bg-card-light)] p-4 transition-colors hover:border-[var(--accent)]/30"
                  >
                    <span className="flex items-center justify-between gap-2 font-bold text-[var(--text-primary)]">
                      {r.name}
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent)]" />
                    </span>
                    <span className="mt-1 block text-sm text-[var(--text-secondary)]">{r.why}</span>
                  </a>
                ))}
                {result.recommendations.length === 0 && (
                  <p className="rounded-2xl border border-black/[0.06] bg-[var(--bg-card-light)] p-4 text-sm text-[var(--text-secondary)]">
                    Nothing in the current lineup is a clean fit — best to talk it through directly.
                  </p>
                )}
              </div>

              {result.note && <p className="mt-4 text-xs text-[var(--text-secondary)]">{result.note}</p>}

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/#contact" className="btn-dark">
                  <span>Talk to WhiteGuava</span>
                </a>
                <button type="button" onClick={() => setResult(null)} className="btn-outline">
                  <span>Try a different answer</span>
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-1.5 text-xs font-semibold text-[var(--text-secondary)]">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-black/[0.08] bg-[var(--bg-card-light)] px-3 py-2.5 text-sm font-medium text-[var(--text-primary)] outline-none focus:border-[var(--accent)]/40"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
