import { makeColorVariant } from '../utils';

export const palette = {
	dark: {
		'100': '#C1C2C5',
		'200': '#A6A7AB',
		'300': '#909296',
		'400': '#5c5f66',
		'500': '#373A40',
		'600': '#2C2E33',
		'700': '#25262b',
		'800': '#1A1B1E',
		'900:': '#141517',
	},

	gray: {
		'100': '#f8f9fa',
		'200': '#f1f3f5',
		'300': '#e9ecef',
		'400': '#dee2e6',
		'500': '#ced4da',
		'600': '#adb5bd',
		'700': '#868e96',
		'800': '#495057',
		'900': '#343a40',
	},

	green: {
		'100': '#ebfbee',
		'200': '#d3f9d8',
		'300': '#b2f2bb',
		'400': '#8ce99a',
		'500': '#69db7c',
		'600': '#51cf66',
		'700': '#40c057',
		'800': '#37b24d',
		'900': '#2f9e44',
	},

	red: {
		'100': '#fff5f5',
		'200': '#ffe3e3',
		'300': '#ffc9c9',
		'400': '#ffa8a8',
		'500': '#ff8787',
		'600': '#ff6b6b',
		'700': '#fa5252',
		'800': '#f03e3e',
		'900': '#e03131',
	},
} as const;

const colorVariants = {
	...makeColorVariant('dark', palette.dark),
	...makeColorVariant('gray', palette.gray),
	...makeColorVariant('green', palette.green),
	...makeColorVariant('red', palette.red),
} as const;

const colors = {
	...colorVariants,
} as const;

export type DotorihamColors = typeof colors;

export default colors;
