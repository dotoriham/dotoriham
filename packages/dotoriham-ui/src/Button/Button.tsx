import { forwardRef, ReactNode } from 'react';

import { createPolymorphicComponent } from '@dotoriham/core';
import {
	DefaultProps,
	DotorihamSize,
	DotorihamColors,
} from '@dotoriham/styles';
import { createStyles } from './Button.styles';
import { Loading } from '../Loading';
import { css } from '@emotion/react';

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'light';

export interface ButtonProps extends DefaultProps {
	/**
	 * 버튼 사이즈
	 * @default 'md'
	 */
	size?: DotorihamSize;
	/**
	 * 버튼 색상
	 * @default "green"
	 */
	color?: DotorihamColors;
	/**
	 * 왼쪽 아이콘
	 */
	leftIcon?: ReactNode;
	/**
	 * 오른쪽 아이콘
	 */
	rightIcon?: ReactNode;
	/**
	 * full width
	 */
	fullWidth?: boolean;
	/**
	 * 버튼 둥글기
	 * @default 'sm'
	 */
	radius?: DotorihamSize;
	/**
	 * 버튼 종류
	 * @default 'filled'
	 */
	variant?: ButtonVariant;
	/**
	 * 로딩 상태
	 */
	loading?: boolean;
	/**
	 * 비활성화
	 */
	disabled?: boolean;
	/**
	 * 컴팩트
	 */
	compact?: boolean;
	/**
	 * click
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	children: ReactNode;
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			styles,
			leftIcon,
			rightIcon,
			onClick,
			loading,
			children,
			as,
			...others
		} = createStyles(props);

		const ButtonElement = as || 'button';

		return (
			<ButtonElement ref={ref} css={styles} onClick={onClick} {...others}>
				{children}
				{loading && (
					<Loading
						css={css`
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
						`}
					/>
				)}
			</ButtonElement>
		);
	},
);

export const Button = createPolymorphicComponent<'button', ButtonProps>(
	ButtonComponent,
);
