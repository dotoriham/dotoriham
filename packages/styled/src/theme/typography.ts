const fontSizes = {
	lg: 18,
	md: 16,
	sm: 14,
	xl: 20,
	xs: 12,
} as const;

const fontWeights = {
	bold: '700',
	medium: '500',
	regular: '400',
} as const;

const lineHeights = {
	md: 1.5,
} as const;

const letterSpacings = {
	lg: 20,
	md: 16,
	sm: 12,
	xl: 24,
	xs: 10,
} as const;

export const typography = {
	fontSizes,
	fontWeights,
	letterSpacings,
	lineHeights,
} as const;
