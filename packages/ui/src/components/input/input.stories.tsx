import { Meta, StoryObj } from '@storybook/react';
import { DotorihamThemeProvider } from '../../contexts';
import { Input, InputVariant } from './input';
import { DotorihamSize } from '../../utils';

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

const variants: InputVariant[] = ['default', 'filled', 'text'];
export const Variant: Story = {
  render: () => (
    <>
      {variants.map((variant) => (
        <Input
          key={variant}
          variant={variant}
          style={{
            marginRight: '8px',
          }}
          placeholder={variant}
        />
      ))}
    </>
  ),
};

const sizes: DotorihamSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
export const Size: Story = {
  render: () => (
    <>
      {sizes.map((size) => (
        <Input
          key={size}
          size={size}
          style={{
            marginRight: '8px',
          }}
          placeholder={size}
        />
      ))}
    </>
  ),
};

export default meta;
