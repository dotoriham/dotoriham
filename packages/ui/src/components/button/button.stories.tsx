import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  render: () => <Button>Base</Button>,
};

export default meta;
