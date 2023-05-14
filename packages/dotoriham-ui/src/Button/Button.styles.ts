import { css } from '@emotion/react';
import {
	extractSystemStyles,
	getSystemStyles,
	Theme,
	useDotorihamTheme,
} from '@dotoriham/styles';
import { ButtonProps } from './Button';

const buttonStyle = (theme: Theme) => css`
	border: none;
	outline: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: ${theme.colors.green_900};
`;

export const createStyles = (props: ButtonProps) => {
	const {
		size,
		color,
		fullWidth,
		radius,
		variant,
		loading,
		disabled,
		compact,
		...others
	} = props;

	const { theme } = useDotorihamTheme();
	const { rest, systemStyles } = extractSystemStyles(others);

	const styles = [systemStyles, buttonStyle(theme)];

	return {
		styles,
		...rest,
	};
};
