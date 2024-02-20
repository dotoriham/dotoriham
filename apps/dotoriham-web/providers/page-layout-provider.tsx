import { PropsWithChildren } from 'react';

import { DesktopPageLayoutProvider } from './desktop-page-layout-provider';
import { useDeviceDetect } from './device-detect-provider';
import { MobilePageLayoutProvider } from './mobile-page-layout-provider';

export const PageLayoutProvider = ({ children }: PropsWithChildren) => {
  const device = useDeviceDetect();
  const Provider =
    device === 'desktop' ? DesktopPageLayoutProvider : MobilePageLayoutProvider;

  return <Provider>{children}</Provider>;
};
