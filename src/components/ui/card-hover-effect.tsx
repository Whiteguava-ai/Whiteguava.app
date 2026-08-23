'use client';

import { useState, type ReactNode } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { cn } from '@/lib/cn';

export interface HoverCardItem {
  key: string;
  href?: string;
  content: ReactNode;
}

/**
 * Aceternity "Card Hover Effect": a grid where the hovered card gets a soft
 * animated highlight behind it (a shared `layoutId` so the glow slides between
 * cards instead of popping). Used for project/work grids, blog cards, and
 * related-services grids.
 */
export function CardHoverEffect({
  items,
  className,
  dark = false,
}: {
  items: HoverCardItem[];
  className?: string;
  dark?: boolean;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-2', className)}>
      {items.map((item) => {
        const glow = (
          <AnimatePresence>
            {hovered === item.key && (
              <m.span
                layoutId="hoverBackground"
                className={cn('absolute inset-0 block rounded-3xl', dark ? 'bg-white/[0.06]' : 'bg-black/[0.035]')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
              />
            )}
          </AnimatePresence>
        );
        const wrapperProps = {
          className: 'group relative block h-full w-full rounded-3xl p-1',
          onMouseEnter: () => setHovered(item.key),
          onMouseLeave: () => setHovered(null),
        };
        return item.href ? (
          <a key={item.key} href={item.href} {...wrapperProps}>
            {glow}
            <div className="relative z-10 h-full">{item.content}</div>
          </a>
        ) : (
          <div key={item.key} {...wrapperProps}>
            {glow}
            <div className="relative z-10 h-full">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
