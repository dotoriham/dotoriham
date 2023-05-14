import { colors } from './colors';
import { fontSize, spacing, radius } from './size';

export const theme = {
	colors,
	fontSize,
	radius,
	spacing,
} as const;

export type Theme = typeof theme;
