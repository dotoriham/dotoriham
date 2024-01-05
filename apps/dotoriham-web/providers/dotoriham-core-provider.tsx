import { PropsWithChildren } from 'react';
import { DeviceDetectProvider } from '@dotoriham/device-detect';
import { ClientSideProvider } from './client-side-provider';
import { getUserAgent } from '@/utils/getUserAgent';

export const DotorihamCoreProvider = ({ children }: PropsWithChildren) => {
  const ua = getUserAgent();
  const isMobile = ua.device?.type === 'mobile';
  return (
    <DeviceDetectProvider ssrIsMobile={isMobile}>
      <ClientSideProvider>{children}</ClientSideProvider>
    </DeviceDetectProvider>
  );
};
