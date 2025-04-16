'use client';

import { useEffect, useState, useRef } from 'react';

export function useScrollPastHero(ref: React.RefObject<HTMLElement>) {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPastHero(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    );

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref?.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isPastHero;
}