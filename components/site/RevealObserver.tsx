'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Fades in every [data-reveal] element as it scrolls into view.
 * Content stays visible without JavaScript: elements are only hidden after
 * this component adds .reveal-ready to the .site-root wrapper.
 * Siblings inside a [data-reveal-group] are staggered automatically.
 */
export const RevealObserver: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector('.site-root');
    if (!root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'));

    document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
      Array.from(group.querySelectorAll<HTMLElement>(':scope > [data-reveal]')).forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i, 6) * 80}ms`;
      });
    });

    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    // Anything already on screen shows immediately, so there is no flash on load.
    const vh = window.innerHeight;
    items.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95 && r.bottom > 0) {
        el.style.transitionDelay = '0ms';
        el.classList.add('is-visible');
      }
    });
    root.classList.add('reveal-ready');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    items.filter((el) => !el.classList.contains('is-visible')).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
};
