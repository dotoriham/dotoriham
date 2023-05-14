import { css } from '@emotion/react';
import { Meta, StoryObj } from '@storybook/react';
import { useDotorihamTheme } from '@dotoriham/styles';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const wrapper = css`
	display: flex;
	gap: 8px;
	margin-bottom: 10px;
`;

/**
 * 기본
 */
export const Base: Story = {};
/**
 * 버튼 사이즈
 */
export const Size: Story = {
	render: () => (
		<div css={wrapper}>
			<Button size="xs">Extra Small</Button>
			<Button size="sm">Small</Button>
			<Button size="md">Medium</Button>
			<Button size="lg">Large</Button>
			<Button size="xl">Extra Large</Button>
		</div>
	),
};

/**
 * 버튼 종류 (기본, 아웃라인, 텍스트)
 */
export const Variant: Story = {
	render: () => {
		const {
			theme: { colors },
		} = useDotorihamTheme();

		console.log({ colors });

		return (
			<>
				<div css={wrapper}>
					<Button color="dark">Dark</Button>
					<Button color="dark">Dark</Button>
					<Button color="dark">Dark</Button>
					<Button color="dark">Dark</Button>
					<Button color="dark">Dark</Button>
				</div>
				<div css={wrapper}>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
				</div>
				<div css={wrapper}>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
				</div>
				<div css={wrapper}>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
				</div>
				<div css={wrapper}>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
					<Button color="gray">Gray</Button>
				</div>
			</>
		);
	},
};

/**
 * 버튼 색상
 */
export const Color: Story = {
	render: () => (
		<div css={wrapper}>
			<Button color="dark">Dark</Button>
			<Button color="gray">Gray</Button>
			<Button color="green">Green</Button>
			<Button color="red">Red</Button>
			<Button color="lime">Green</Button>
		</div>
	),
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
