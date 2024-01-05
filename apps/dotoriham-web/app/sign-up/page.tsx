import { DevicePageAdaptive } from '@/components';
import { DesktopPage } from './desktop';
import { MobilePage } from './mobile';

function Page() {
  return (
    <DevicePageAdaptive
      renderDesktop={<DesktopPage />}
      renderMobile={<MobilePage />}
    />
  );
}

export default Page;
