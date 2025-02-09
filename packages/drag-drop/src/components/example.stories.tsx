import { Meta, StoryObj } from '@storybook/react';

import { Example } from './example';

const meta: Meta<typeof Example> = {
  component: Example,
  title: 'Example',
};

type Story = StoryObj<typeof Example>;

export const Base: Story = {
  render: () => <Example />,
};

export default meta;
