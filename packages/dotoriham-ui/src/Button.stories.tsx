import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	component: <Button />,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
