import colors from "./colors";

const defaultTheme = {
  colors,
} as const;

export type Theme = typeof defaultTheme;

export const lightTheme: Theme = { ...defaultTheme };
export const darkTheme: Theme = {
  ...defaultTheme,
};
