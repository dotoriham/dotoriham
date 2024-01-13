import { Meta, StoryObj } from '@storybook/react';
import { DotorihamThemeProvider } from '../../contexts';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <DotorihamThemeProvider>
        <Story />
      </DotorihamThemeProvider>
    ),
  ],
};

type Story = StoryObj<typeof Input>;

export const Base: Story = {
  render: () => <Input placeholder="placeholder" />,
};

export default meta;
