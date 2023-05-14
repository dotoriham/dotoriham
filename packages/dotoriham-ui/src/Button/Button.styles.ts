import { css } from '@emotion/react';
import {
	extractSystemStyles,
	Theme,
	useDotorihamTheme,
	DotorihamColors,
	DotorihamSize,
} from '@dotoriham/styles';
import { ButtonProps, ButtonVariant } from './Button';

const sizes = {
	xs: { h: 30, px: 14 },
	sm: { h: 36, px: 18 },
	md: { h: 42, px: 22 },
	lg: { h: 50, px: 26 },
	xl: { h: 60, px: 32 },
} as const;

const compactSize = {
	xs: { h: 22, px: 7 },
	sm: { h: 26, px: 8 },
	md: { h: 30, px: 10 },
	lg: { h: 34, px: 12 },
	xl: { h: 40, px: 14 },
} as const;

const buttonStyle = (theme: Theme) => css`
	border: none;
	outline: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	user-select: none;
	position: relative;
	box-sizing: border-box;
	appearance: 'none';
	line-height: 1;
`;

const buttonSizeStyle = (
	theme: Theme,
	size: DotorihamSize,
	compact?: boolean,
) => css`
	height: ${compact ? compactSize[size].h : sizes[size].h}px;
	padding-left: ${compact ? compactSize[size].px : sizes[size].px}px;
	padding-right: ${compact ? compactSize[size].px : sizes[size].px}px;
	font-size: ${theme.fontSize[size]};
`;

const buttonVariantStyle = (
	theme: Theme,
	variant: ButtonVariant,
	color: DotorihamColors,
) => {
	switch (variant) {
		case 'filled':
			return css`
				color: white;
				background-color: ${theme.colors[color][6]};
				&:hover {
					background-color: ${theme.colors[color][7]};
				}
			`;
		case 'outlined':
			return css``;
		case 'text':
			return css``;
		case 'light':
			return css``;
		default:
			return css``;
	}
};

export const createStyles = (props: ButtonProps) => {
	const {
		size = 'md',
		color = 'green',
		variant = 'filled',
		fullWidth = false,
		radius = 'sm',
		loading = false,
		disabled = false,
		compact = false,
		...others
	} = props;

	const { theme } = useDotorihamTheme();
	const { rest, systemStyles } = extractSystemStyles(others);

	const styles = [
		systemStyles,
		buttonStyle(theme),
		buttonSizeStyle(theme, size, compact),
		buttonVariantStyle(theme, variant, color),
	];

	return {
		styles,
		...rest,
	};
};
