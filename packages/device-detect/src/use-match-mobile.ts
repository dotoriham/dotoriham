import { useEffect, useState } from 'react';

import { useMounted } from './use-mounted';
import { getIsMobile, isServer } from './utils';

export const useMatchMobile = (
  mobileBreakpoint: number,
  initialIsMobile?: boolean,
) => {
  const isMounted = useMounted();
  const [isMobile, setIsMobile] = useState<boolean | null>(
    initialIsMobile != null ? initialIsMobile : null,
  );

  useEffect(() => {
    if (isMounted === false) {
      return;
    }

    setIsMobile(() => getIsMobile(mobileBreakpoint));

    const mqMobile = window.matchMedia(
      `screen and (max-width: ${mobileBreakpoint - 1}px)`,
    );

    const handleResizeForMobile = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mqMobile.addEventListener('change', handleResizeForMobile);

    return () => {
      mqMobile.removeEventListener('change', handleResizeForMobile);
    };
  }, [isMounted, mobileBreakpoint]);

  return isMobile;
};
