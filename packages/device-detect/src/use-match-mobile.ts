import { useEffect, useState } from 'react';

import { useMounted } from './use-mounted';
import { getIsMobile } from './utils';

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

    const _isMobile = getIsMobile(mobileBreakpoint);

    if (isMobile !== _isMobile) {
      setIsMobile(() => getIsMobile(mobileBreakpoint));
    }

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
