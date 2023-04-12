import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BaseButton } from './BaseButton';

export default {
	component: BaseButton,
	title: 'BottomSheet',
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = () => <BaseButton />;

export const Base = Template.bind({});

Base.args = {};
