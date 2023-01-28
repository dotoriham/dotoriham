import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { lightTheme } from '@dotoriham/styled';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  console.log('Theme', ThemeProvider);
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
