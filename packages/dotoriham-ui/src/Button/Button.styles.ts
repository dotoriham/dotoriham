import { css } from '@emotion/react';
import { ButtonProps } from './Button';

const buttonStyle = () => css`
	border: none;
	outline: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export const createStyles = (props: ButtonProps) => {
	const {
		size,
		color,
		leftIcon,
		rightIcon,
		fullWidth,
		radius,
		variant,
		loading,
		disabled,
		compact,
		debounce,
		debounceTime,
		...rest
	} = props;

	const styles = [buttonStyle()];

	return {
		styles,
		...rest,
	};
};
