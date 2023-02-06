const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

export const breakpoints = {
	lg: 1065,
	md: 768,
} as const;

const { lg, md } = breakpoints;

export const media = {
	large: mediaQuery(lg),
	medium: mediaQuery(md),
} as const;
