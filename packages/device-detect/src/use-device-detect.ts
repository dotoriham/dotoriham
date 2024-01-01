'use client';
import { useContext } from 'react';

import { DeviceDetectContext } from './device-detect-context';

export const useDeviceDetect = () => {
  const context = useContext(DeviceDetectContext);
  if (context == null) {
    throw new Error(
      'useDeviceDetect must be used within a DeviceDetectProvider',
    );
  }
  return context;
};
