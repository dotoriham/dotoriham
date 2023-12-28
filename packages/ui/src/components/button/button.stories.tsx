import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { DotorihamThemeProvider } from '../../contexts';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <DotorihamThemeProvider>
        <Story />
      </DotorihamThemeProvider>
    ),
  ],
};

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  render: () => <Button>Base</Button>,
};

export default meta;
