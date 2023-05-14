import { Button } from './Button';

export default {
	component: Button,
	title: 'Button',
};

const Template = () => (
	<Button as="a" href="www.naver.com" mt={10} px={10} h={70} />
);

/**
 * 기본
 */
export const Base = Template.bind({});
/**
 * 버튼 사이즈
 */
export const Size = Template.bind({});
/**
 * 버튼 종류 (기본, 아웃라인, 텍스트)
 */
export const Variant = Template.bind({});
/**
 * 버튼 색상
 */
export const Color = Template.bind({});
/**
 * 버튼 로딩
 */
export const Loading = Template.bind({});
/**
 * 버튼 디바운스
 */
export const Debounce = Template.bind({});
/**
 * 버튼 비활성화
 */
export const Disabled = Template.bind({});
/**
 * 버튼 컴팩트
 */
export const Campact = Template.bind({});
/**
 * 버튼 Full Width
 */
export const FullWidth = Template.bind({});
/**
 * 버튼 아이콘
 */
export const Icon = Template.bind({});
