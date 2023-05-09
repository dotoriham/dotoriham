import { Button } from './Button';

export default {
	component: Button,
	title: 'Button',
};

const Template = () => <Button as="a" href="www.naver.com" />;

export const Base = Template.bind({});
