import { Meta, StoryObj } from '@storybook/react';
import { Menu } from './menu';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
  decorators: [(Story) => <Story />],
};

type Story = StoryObj<typeof Menu>;

export const Base: Story = {
  render: () => <Menu />,
};

export default meta;



