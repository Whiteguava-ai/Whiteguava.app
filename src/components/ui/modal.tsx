'use client';

import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, m } from 'framer-motion';
import { useMounted } from '@/lib/motion/useMounted';

/**
 * Shared overlay shell for the AI features (command bar, project scoper) —
 * backdrop click, Escape, and body-scroll lock, with a fade + rise entrance.
 * Not a general-purpose dialog primitive; just enough for these two.
 *
 * Rendered through a portal straight into `document.body`. This site's
 * `.reveal` entrance-animation class sets `transform: translateY(0)` (not
 * `none`) once visible — and per spec, ANY non-`none` transform on an
 * ancestor creates a new containing block for `position: fixed` descendants,
 * so without the portal this modal would render clipped to whichever
 * `.reveal`-wrapped section it happens to be invoked from instead of
 * covering the viewport. Escaping via a portal sidesteps that regardless of
 * where this ever gets used.
 */
export function Modal({
  open,
  onClose,
  children,
  labelledBy,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy?: string;
}) {
  // `document.body` doesn't exist during SSR; only portal in once mounted.
  // `open` always starts `false` in both callers, so there's nothing to show
  // before that point and no hydration mismatch from skipping it.
  const mounted = useMounted();

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <m.div
          className="fixed inset-0 z-[2000] flex items-start justify-center overflow-y-auto bg-black/50 px-4 py-[8vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
        >
          <m.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl"
          >
            {children}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
