import { Meta, StoryObj } from '@storybook/react';
import { Popover } from './popover';

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
  decorators: [(Story) => <Story />],
};

type Story = StoryObj<typeof Popover>;

export const Base: Story = {
  render: () => <Popover />,
};

export default meta;



