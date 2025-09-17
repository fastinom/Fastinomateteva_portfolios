import { useEffect, useMemo, useCallback } from 'react';

export function useScrollAnimation() {
  const observer = useMemo(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Unobserve after animation to reduce unnecessary work
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });
    return obs;
  }, []);

  useEffect(() => {
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  const animateRef = useCallback((element: HTMLElement | null) => {
    if (!element) return;
    element.classList.add('section-animate');
    observer.observe(element);
  }, [observer]);

  return animateRef;
}