import { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Overlay } from './Overlay';

export default {
	argTypes: {
		color: { control: 'color' },
	},
	component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => {
	return <Overlay {...args} />;
};

const ActionTemplate: ComponentStory<typeof Overlay> = (args) => {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<>
			<button
				style={{
					border: '1px solid black',
					cursor: 'pointer',
					padding: '10px',
				}}
				onClick={() => setIsVisible(!isVisible)}>
				click me
			</button>
			<Overlay
				{...args}
				visible={isVisible}
				onClick={() => setIsVisible(false)}
			/>
		</>
	);
};

export const Base = Template.bind({});
Base.args = {
	visible: true,
};

export const Action = ActionTemplate.bind({});
