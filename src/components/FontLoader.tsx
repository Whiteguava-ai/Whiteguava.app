'use client';

import { useEffect } from 'react';

const FONT_HREF =
  'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,800&display=swap';

export default function FontLoader() {
  useEffect(() => {
    if (document.querySelector(`link[rel="stylesheet"][href="${FONT_HREF}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }, []);

  return null;
}
