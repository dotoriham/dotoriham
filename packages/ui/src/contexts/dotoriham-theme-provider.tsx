'use client';

import { ReactNode, createContext } from 'react';
import '../styles/typography.module.css';
import '../styles/global.css';

const DotorihamThemeContext = createContext({});

interface DotorihamThemeProviderProps {
  children: ReactNode;
}

export const DotorihamThemeProvider = ({
  children,
}: DotorihamThemeProviderProps) => {
  return (
    <DotorihamThemeContext.Provider value={{}}>
      {children}
    </DotorihamThemeContext.Provider>
  );
};

export const useDotorihamTheme = () => {
  if (DotorihamThemeContext == null) {
    throw new Error('DotorihamThemeProvider not found');
  }
  return DotorihamThemeContext;
};
