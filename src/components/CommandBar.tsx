'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Loader2, Search, Sparkles } from 'lucide-react';
import { Modal } from '@/components/ui/modal';

/**
 * "Ask WhiteGuava" — a ⌘K / Ctrl+K command bar that answers visitor
 * questions from the site's own content (see `lib/ai/knowledge.ts`), instead
 * of yet another floating chat bubble. Mounted once in the root layout;
 * `Navbar`'s trigger button opens it by dispatching the `ask-whiteguava:open`
 * window event rather than sharing React state, so the two don't need a
 * shared parent.
 */
export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setQuestion('');
    setAnswer(null);
    setError(null);
    setLoading(false);
  };

  const openBar = () => {
    reset();
    setOpen(true);
  };

  const closeBar = () => setOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => {
          if (!v) reset();
          return !v;
        });
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('ask-whiteguava:open', openBar);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('ask-whiteguava:open', openBar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset/openBar are stable enough for this listener's lifetime
  }, []);

  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => inputRef.current?.focus(), 60);
    return () => clearTimeout(id);
  }, [open]);

  const submit = async () => {
    const q = question.trim();
    if (!q || loading) return;
    setLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setAnswer(data.answer as string);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // A grounded answer may end with one bare source URL — render it as a chip
  // instead of raw text. `\S+` is greedy, so a URL immediately followed by
  // sentence punctuation ("...here: https://example.com/page.") swallows
  // that punctuation into the match too — strip it back off before it ends
  // up baked into the href (and 404s on a slug that never existed).
  const urlMatch = answer?.match(/(https?:\/\/\S+)\s*$/);
  const answerText = urlMatch ? answer!.slice(0, urlMatch.index).trim() : answer;
  const answerHref = urlMatch?.[1]
    ?.replace(/[.,;:!?)\]}'"]+$/, '')
    .replace(/^https?:\/\/[^/]+/, '') || null;

  return (
    <Modal open={open} onClose={closeBar} labelledBy="ask-whiteguava-input">
      <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[var(--shadow-lg)]">
        <div className="flex items-center gap-3 border-b border-black/[0.06] px-5 py-4">
          <Search className="h-5 w-5 shrink-0 text-[var(--text-secondary)]" strokeWidth={2} />
          <input
            ref={inputRef}
            id="ask-whiteguava-input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder="Ask about GuavaERP pricing, AI agents, WhatsApp bots…"
            className="min-w-0 flex-1 bg-transparent text-[15px] font-medium text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)]"
            maxLength={300}
          />
          <kbd className="hidden shrink-0 rounded-md border border-black/10 bg-[var(--bg-card-light)] px-1.5 py-0.5 text-[11px] font-semibold text-[var(--text-secondary)] sm:block">
            Esc
          </kbd>
        </div>

        <div className="max-h-[50vh] overflow-y-auto px-5 py-4">
          {loading && (
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <Loader2 className="h-4 w-4 animate-spin" />
              Thinking…
            </div>
          )}
          {!loading && error && <p className="text-sm text-[var(--accent)]">{error}</p>}
          {!loading && !error && answerText && (
            <div className="flex flex-col gap-3">
              <p className="text-[15px] leading-relaxed text-[var(--text-primary)]">{answerText}</p>
              {answerHref && (
                <a
                  href={answerHref}
                  className="inline-flex w-fit items-center gap-1.5 rounded-full border border-black/[0.06] bg-[var(--bg-card-light)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                >
                  Open that page
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
          {!loading && !error && !answerText && (
            <div className="flex flex-col gap-1.5 text-sm text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5 font-semibold text-[var(--text-primary)]">
                <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                Ask anything about WhiteGuava or the Guava Product Suite
              </span>
              <span>Try: &ldquo;How much would GuavaCRM cost for 8 people?&rdquo;</span>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
