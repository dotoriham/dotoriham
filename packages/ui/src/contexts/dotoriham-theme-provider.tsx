'use client';

import { ReactNode, createContext } from 'react';
import { ColorMode, useColorMode } from '../hooks';
import '../styles/typography.module.css';
import '../styles/global.css';

const DotorihamThemeContext = createContext({});

interface DotorihamThemeProviderProps {
  children: ReactNode;
  colorMode?: ColorMode;
  getRootElement?: () => HTMLElement | undefined;
}

export const DotorihamThemeProvider = ({
  children,
  colorMode = 'auto',
  getRootElement = () => document.documentElement,
}: DotorihamThemeProviderProps) => {
  useColorMode({
    colorMode,
    getRootElement,
  });
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
