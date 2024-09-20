import { PropsWithChildren } from 'react';

import { ClientSideProvider } from './client-side-provider';
import { DeviceDetectProvider } from './device-detect-provider';
import { getDevice } from '../utils/getUserAgent';

export const DotorihamCoreProvider = ({ children }: PropsWithChildren) => {
  const device = getDevice();

  return (
    <DeviceDetectProvider device={device}>
      <ClientSideProvider>{children}</ClientSideProvider>
    </DeviceDetectProvider>
  );
};
