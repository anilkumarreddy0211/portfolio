import { useEffect } from 'react';

/**
 * Custom hook to trigger entrance and re-entrance animations
 * when scrolling down and up the page.
 *
 * @param {any} dependency - Dependency to re-attach observer (e.g. activeTab)
 */
export function useScrollReveal(dependency) {
  useEffect(() => {
    // Small timeout to allow DOM to render after tab switch
    const timeout = setTimeout(() => {
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else {
            // Remove when element leaves viewport so it re-animates on scroll up / down
            const rect = entry.boundingClientRect;
            // Only un-reveal if it's completely out of the viewport
            if (rect.top > window.innerHeight || rect.bottom < 0) {
              entry.target.classList.remove('is-revealed');
            }
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      });

      const targets = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-fade-up, .reveal-scale-in, .reveal-slide-left, .reveal-slide-right'
      );

      targets.forEach((target) => observer.observe(target));

      return () => {
        targets.forEach((target) => observer.unobserve(target));
        observer.disconnect();
      };
    }, 50);

    return () => clearTimeout(timeout);
  }, [dependency]);
}

