import { PropsWithChildren } from 'react';

import { DesktopFooter } from '../components/footer';
import { DesktopHeader } from '../components/header';

export const DesktopPageLayoutProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <DesktopHeader />
      {children}
      <DesktopFooter />
    </>
  );
};
