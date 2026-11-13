'use client';

import React, { useEffect, useRef, useState } from 'react';

/** Counts up to `value` the first time it scrolls into view. Renders the final value on the server. */
export const CountUp: React.FC<{ value: number; suffix?: string; duration?: number }> = ({
  value,
  suffix = '',
  duration = 1400,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(eased * value));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 }
    );
    setDisplay(0);
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {display}
        {suffix}
      </span>
    </span>
  );
};
