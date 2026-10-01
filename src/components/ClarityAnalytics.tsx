'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initClarity, clarityTag } from '@/lib/clarity';

export default function ClarityAnalytics() {
  const pathname = usePathname();

  // Initialize Clarity once on mount
  useEffect(() => {
    initClarity();
  }, []);

  // Update page_path tag on SPA navigation
  useEffect(() => {
    if (pathname) {
      clarityTag('page_path', pathname);
    }
  }, [pathname]);

  return null;
}
