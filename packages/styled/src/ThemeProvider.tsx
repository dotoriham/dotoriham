import { PropsWithChildren } from "react";

import { ThemeProvider as _ThemeProvider } from "styled-components";

import { GlobalStyle } from "./globalStyles";
import { lightTheme } from "./theme";

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <_ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    {children}
  </_ThemeProvider>
);
