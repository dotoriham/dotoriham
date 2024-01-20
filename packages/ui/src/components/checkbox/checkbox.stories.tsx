import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [(Story) => <Story />],
};

type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {
  render: () => <Checkbox checked />,
};

export default meta;
