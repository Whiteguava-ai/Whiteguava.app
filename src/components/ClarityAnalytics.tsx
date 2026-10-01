'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'yqshy6xy2n';

export default function ClarityAnalytics() {
  useEffect(() => {
    if (typeof window !== 'undefined' && projectId) {
      Clarity.init(projectId);
    }
  }, []);

  return null;
}
