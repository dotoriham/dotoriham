'use client';
import { MobilePage } from './mobile';
import { DesktopPage } from './desktop';
import { DevicePageAdaptive } from '@/components';

function Page() {
  return (
    <DevicePageAdaptive
      renderDesktop={<DesktopPage />}
      renderMobile={<MobilePage />}
    />
  );
}

export default Page;
