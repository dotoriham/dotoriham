'use client';

import { PropsWithChildren } from 'react';

import { DotorihamThemeProvider } from '@dotoriham/ui';

export const ClientSideProvider = ({ children }: PropsWithChildren) => {
  return <DotorihamThemeProvider>{children}</DotorihamThemeProvider>;
};
