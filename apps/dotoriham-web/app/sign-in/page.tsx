'use client';
import { useDeviceDetect } from '@dotoriham/device-detect';
import { MobilePage } from './mobile';
import { DesktopPage } from './desktop';

function Page() {
  const { isMobile } = useDeviceDetect();
  return <div>{isMobile === true ? <MobilePage /> : <DesktopPage />}</div>;
}

export default Page;
