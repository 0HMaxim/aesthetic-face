import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageTransition() {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const timeout = setTimeout(() => setTransitioning(false), 300); // длительность анимации
    return () => clearTimeout(timeout);
  }, [location]);

  return transitioning;
}
