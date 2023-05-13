import { StyleProperty, SYSTEM_PROPS } from './system-props';
import { valueGetters } from './value-getters';
import { theme, Theme } from '../theme';

interface GetResponsiveStyles {
	value: any;
	theme: Theme;
	getValue: (value: any, theme: Theme) => any;
	property: StyleProperty;
}

export function getComputedValue({
	value,
	theme,
	getValue,
	property,
}: GetResponsiveStyles) {
	if (value == null) {
		return undefined;
	}
	const cssValue = getValue(value, theme);

	if (Array.isArray(property)) {
		return property.reduce((acc: any, prop) => {
			acc[prop] = cssValue;
			return acc;
		}, {});
	}

	return { [property]: cssValue };
}

export function getSystemStyles(
	systemStyles: Record<string, any>,
	_theme?: Theme,
	systemProps = SYSTEM_PROPS,
) {
	const styleTheme = _theme ?? theme;

	const styles = Object.keys(systemProps).reduce((acc, systemProp) => {
		if (systemProp in systemStyles && systemStyles[systemProp] !== undefined) {
			const computed = getComputedValue({
				getValue: valueGetters[systemProps[systemProp].type],
				property: systemProps[systemProp].property,
				theme: styleTheme,
				value: systemStyles[systemProp],
			});
			acc.push(computed);
		}

		return acc;
	}, [] as any[]);

	return styles;
}
