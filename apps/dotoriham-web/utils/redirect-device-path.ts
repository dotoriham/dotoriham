import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { getDevice } from './getUserAgent';

export const redirectDevicePath = () => {
  const headersList = headers();
  const device = getDevice();

  const headerUrl = headersList.get('x-url') ?? null;

  if (headerUrl == null) {
    return;
  }

  const url = new URL(headerUrl);
  const fullUrl = `${url.pathname}${url.search}`;

  if (device === 'mobile' && fullUrl.includes('/m/') === false) {
    return redirect(`/m${fullUrl}`);
  }

  if (device === 'desktop' && fullUrl.includes('/m/') === true) {
    return redirect(fullUrl.replace('/m/', '/'));
  }
};
