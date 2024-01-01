'use client';
import { ReactNode, createContext } from 'react';

import { useMatchMobile } from './use-match-mobile';

export interface DeviceDetectContextProps {
  isMobile: boolean | null;
}

export const DeviceDetectContext = createContext<DeviceDetectContextProps>({
  isMobile: null,
});

interface DeviceDetectProviderProps {
  children: ReactNode;
  /**
   * @default 768
   */
  mobileBreakpoint?: number;
  /**
   * server-side device detect
   */
  initialIsMobile?: boolean;
}

export const DeviceDetectProvider = ({
  children,
  mobileBreakpoint = 768,
  initialIsMobile,
}: DeviceDetectProviderProps) => {
  const isMobile = useMatchMobile(mobileBreakpoint, initialIsMobile);

  return (
    <DeviceDetectContext.Provider value={{ isMobile }}>
      {children}
    </DeviceDetectContext.Provider>
  );
};
