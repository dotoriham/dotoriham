'use client';

import { useEffect, useState } from 'react';

export const useMatchMedia = (matchBreakpoint: number = 480) => {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    const match = window.matchMedia(
      `screen and (max-width: ${matchBreakpoint - 1}px)`,
    );

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMatch(e.matches);
    };

    match.addEventListener('change', handleResize);

    return () => {
      match.removeEventListener('change', handleResize);
    };
  }, [matchBreakpoint]);

  return isMatch;
};
