import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * 기본
 */
export const Base: Story = {
	args: {},
};
/**
 * 버튼 사이즈
 */
export const Size: Story = {
	args: {},
};

/**
 * 버튼 종류 (기본, 아웃라인, 텍스트)
 */
export const Variant: Story = {
	args: {},
};

/**
 * 버튼 색상
 */
export const Color: Story = {
	args: {},
};

/**
 * 버튼 로딩
 */
export const Loading: Story = {
	args: {},
};

/**
 * 버튼 디바운스
 */
export const Debounce: Story = {
	args: {},
};

/**
 * 버튼 비활성화
 */
export const Disabled: Story = {
	args: {},
};

/**
 * 버튼 컴팩트
 */
export const Campact: Story = {
	args: {},
};

/**
 * 버튼 Full Width
 */
export const FullWidth: Story = {
	args: {},
};

/**
 * 버튼 아이콘
 */
export const Icon: Story = {
	args: {},
};
