import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll for better UX when navigating
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
