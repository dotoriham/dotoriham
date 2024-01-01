'use client';
import { useDeviceDetect } from '@dotoriham/device-detect';

function Page() {
  const { isMobile } = useDeviceDetect();
  return (
    <div>{isMobile === true ? <div>Mobile</div> : <div>Desktop</div>}</div>
  );
}

export default Page;
