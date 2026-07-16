import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && hash !== '#') {
      const scrollToHash = () => {
        const target = document.getElementById(hash.slice(1));

        if (!target) {
          return false;
        }

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      };

      if (scrollToHash()) {
        return undefined;
      }

      const observer = new MutationObserver(() => {
        if (scrollToHash()) {
          observer.disconnect();
        }
      });

      observer.observe(document.getElementById('root'), {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;