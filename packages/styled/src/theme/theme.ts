import { colors } from './colors';
import { breakpoints, media } from './media';
import { transitions } from './transitions';
import { typography } from './typography';

const defaultTheme = {
	breakpoints,
	colors,
	media,
	transitions,
	...typography,
} as const;

export type Theme = typeof defaultTheme;

export const lightTheme: Theme = { ...defaultTheme };
export const darkTheme: Theme = {
	...defaultTheme,
};
