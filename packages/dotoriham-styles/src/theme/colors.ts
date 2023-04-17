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
} as const;

export const semantic = {
	error: '#F4364C',
	primary: '#48BF91',
	primaryDark: '#0baa78',
};

const colorVariants = {
	...makeColorVariant('dark', palette.dark),
	...makeColorVariant('gray', palette.gray),
	...makeColorVariant('green', palette.green),
} as const;

const colors = {
	...colorVariants,
	...semantic,
};

export type DotorihamColors = typeof colors;

export default colors;
