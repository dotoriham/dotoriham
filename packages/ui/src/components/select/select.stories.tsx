import { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  decorators: [(Story) => <Story />],
};

type Story = StoryObj<typeof Select>;

export const Base: Story = {
  render: () => <Select />,
};

export default meta;



