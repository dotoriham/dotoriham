import { Theme } from '../theme';
import { DotorihamColors } from '../theme/colors';
import { LiteralUnion } from '../types';

export type ThemeColor = keyof DotorihamColors;
export type ThemeWithCustomColor = LiteralUnion<keyof DotorihamColors>;

export const themeColorGuard = (
	color: string | undefined,
	colors: Record<string, string>,
) => {
	if (!color) {
		return 'currentColor';
	}
	if (color in colors) {
		return colors[color];
	}
	return color;
};

export function getColorValue(color: ThemeWithCustomColor, theme: Theme) {
	return themeColorGuard(color, theme.colors);
}
