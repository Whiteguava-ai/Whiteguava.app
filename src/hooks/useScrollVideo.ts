'use client';

import { useEffect, useRef } from 'react';

/** Loads and plays muted looping videos only when the stack is near the viewport. */
export function useInViewVideos() {
  const stackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const videos = Array.from(stack.querySelectorAll('video'));
    videos.forEach((video) => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.loop = true;
      video.preload = 'none';
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
    });

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const attachSources = () => {
      videos.forEach((video) => {
        const src = video.dataset.src;
        if (src && video.getAttribute('src') !== src) {
          video.src = src;
        }
      });
    };

    const playAll = () => {
      if (reduce) return;
      videos.forEach((video) => {
        const play = video.play();
        if (play) play.catch(() => {});
      });
    };
    const pauseAll = () => videos.forEach((video) => video.pause());

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          attachSources();
          if (entry.intersectionRatio >= 0.2) playAll();
        } else {
          pauseAll();
        }
      },
      { rootMargin: '280px 0px', threshold: [0, 0.2, 0.4] }
    );

    io.observe(stack);
    return () => io.disconnect();
  }, []);

  return stackRef;
}
