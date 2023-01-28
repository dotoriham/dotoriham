import { PropsWithChildren } from 'react';
import { ThemeProvider as _ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import { lightTheme } from './theme';

let a = 3;

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  console.log('children', children);
  return (
    <_ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </_ThemeProvider>
  );
};
