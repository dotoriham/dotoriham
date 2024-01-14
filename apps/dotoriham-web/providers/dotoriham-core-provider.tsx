import { PropsWithChildren } from 'react';

import { ClientSideProvider } from './client-side-provider';
import { DeviceDetectProvider } from './device-detect-provider';
import { getUserAgent } from '../utils/getUserAgent';

export const DotorihamCoreProvider = ({ children }: PropsWithChildren) => {
  const ua = getUserAgent();
  const device = ua.device?.type === 'mobile' ? 'mobile' : 'desktop';

  return (
    <DeviceDetectProvider device={device}>
      <ClientSideProvider>{children}</ClientSideProvider>
    </DeviceDetectProvider>
  );
};
