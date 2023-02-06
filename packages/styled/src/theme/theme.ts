import { colors } from './colors';
import { breakpoints, media } from './media';
import { typography } from './typography';

const defaultTheme = {
	breakpoints,
	colors,
	media,
	...typography,
} as const;

export type Theme = typeof defaultTheme;

export const lightTheme: Theme = { ...defaultTheme };
export const darkTheme: Theme = {
	...defaultTheme,
};
