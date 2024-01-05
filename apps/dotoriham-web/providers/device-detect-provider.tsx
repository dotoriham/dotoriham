'use client';

import { createContext, useContext } from 'react';

type Device = 'mobile' | 'desktop';

const DeviceDetectContext = createContext<Device>('desktop');

export const DeviceDetectProvider = ({
  children,
  device,
}: {
  children: React.ReactNode;
  device: Device;
}) => {
  return (
    <DeviceDetectContext.Provider value={device}>
      {children}
    </DeviceDetectContext.Provider>
  );
};

export const useDeviceDetect = () => {
  const device = useContext(DeviceDetectContext);
  return device;
};
