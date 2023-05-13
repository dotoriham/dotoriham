import { forwardRef, ReactNode } from 'react';

import { createPolymorphicComponent } from '@dotoriham/core';
import {
	DefaultProps,
	DotorihamSize,
	DotorihamNumberSize,
	DotorihamColors,
} from '@dotoriham/styles';
import { css } from '@emotion/react';
import { createStyles } from './Button.styles';

type ButtonVariant = 'filled' | 'outlined' | 'text' | 'light';

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
	radius?: DotorihamNumberSize;
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
	 * 디바운스
	 */
	debounce?: boolean;
	/**
	 * 디바운스 시간
	 * @default 300
	 */
	debounceTime?: number;
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { styles } = createStyles(props);

	return <div css={styles}>Button</div>;
});

export const Button = createPolymorphicComponent<'button', ButtonProps>(
	_Button,
);
