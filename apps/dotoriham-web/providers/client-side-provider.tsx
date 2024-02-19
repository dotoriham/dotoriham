'use client';

import { PropsWithChildren } from 'react';

import { DotorihamThemeProvider } from '@dotoriham/ui';

import { PageLayoutProvider } from './page-layout-provider';

export const ClientSideProvider = ({ children }: PropsWithChildren) => {
  return (
    <DotorihamThemeProvider>
      <PageLayoutProvider>{children}</PageLayoutProvider>
    </DotorihamThemeProvider>
  );
};
