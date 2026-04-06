import { useEffect } from 'react';
import Lenis from 'lenis';

export function useSmoothScroll(lenis: Lenis | null) {
  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const element = document.querySelector(href);
      if (!element) return;

      e.preventDefault();

      // Update URL hash without jumping
      if (history.pushState) {
        history.pushState(null, '', href);
      } else {
        window.location.hash = href;
      }

      lenis.scrollTo(element, {
        offset: -80,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    };

    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          lenis.scrollTo(element, {
            offset: -80,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      } else {
        // No hash, scroll to top
        lenis.scrollTo(0, { duration: 1.2 });
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [lenis]);
}
