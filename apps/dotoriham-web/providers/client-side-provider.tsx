'use client';

import { PropsWithChildren } from 'react';

import { DotorihamThemeProvider } from '@dotoriham/ui';

import ReactQueryProvider from './react-query-provider';

export const ClientSideProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <DotorihamThemeProvider>{children}</DotorihamThemeProvider>
    </ReactQueryProvider>
  );
};
