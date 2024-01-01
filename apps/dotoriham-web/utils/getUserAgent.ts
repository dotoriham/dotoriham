import { headers } from 'next/headers';
import { userAgent } from 'next/server';

export const getUserAgent = () => {
  const headersList = headers();
  const ua = userAgent({
    headers: headersList,
  });

  return ua;
};
