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
  ssrIsMobile?: boolean;
}

export const DeviceDetectProvider = ({
  children,
  mobileBreakpoint = 768,
  ssrIsMobile,
}: DeviceDetectProviderProps) => {
  const isMobile = useMatchMobile(mobileBreakpoint, ssrIsMobile);

  return (
    <DeviceDetectContext.Provider value={{ isMobile }}>
      {children}
    </DeviceDetectContext.Provider>
  );
};
