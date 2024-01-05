'use client';

import { useDeviceDetect } from '@/providers/device-detect-provider';
import { ReactNode } from 'react';

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
