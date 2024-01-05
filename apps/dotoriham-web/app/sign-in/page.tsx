'use client';
import { MobilePage } from './mobile';
import { DesktopPage } from './desktop';
import { useDeviceDetect } from '@/providers/device-detect-provider';

function Page() {
  const device = useDeviceDetect();
  return <div>{device === 'mobile' ? <MobilePage /> : <DesktopPage />}</div>;
}

export default Page;
