'use client';

import { ReactNode } from 'react';

import { useDeviceDetect } from '../../providers/device-detect-provider';

interface DevicePageAdaptiveProps {
  renderMobile: ReactNode;
  renderDesktop: ReactNode;
}

export const DevicePageAdaptive = ({
  renderDesktop,
  renderMobile,
}: DevicePageAdaptiveProps) => {
  const device = useDeviceDetect();
  return <>{device === 'mobile' ? renderMobile : renderDesktop}</>;
};
