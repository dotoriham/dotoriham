import { PropsWithChildren } from 'react';

import { ClientSideProvider } from './client-side-provider';
import { DeviceDetectProvider } from './device-detect-provider';
import { getDevice } from '../utils/getUserAgent';
import { redirectDevicePath } from '../utils/redirect-device-path';

export const DotorihamCoreProvider = ({ children }: PropsWithChildren) => {
  const device = getDevice();
  redirectDevicePath();

  return (
    <DeviceDetectProvider device={device}>
      <ClientSideProvider>{children}</ClientSideProvider>
    </DeviceDetectProvider>
  );
};
