import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonVariant } from './button';
import { DotorihamThemeProvider } from '../../contexts';
import { DotorihamColors } from '../../styles';
import { DotorihamSize } from '../../utils';

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

const variants: ButtonVariant[] = ['filled', 'light', 'outline', 'text'];
export const Variant: Story = {
  render: () => (
    <>
      {variants.map((variant) => (
        <Button
          variant={variant}
          style={{
            marginRight: '8px',
          }}>
          {variant}
        </Button>
      ))}
    </>
  ),
};

const colors: DotorihamColors[] = ['dark', 'gray', 'green', 'lime', 'red'];
export const Color: Story = {
  render: () => (
    <>
      {variants.map((variant) => (
        <div style={{ marginBottom: '8px' }}>
          {colors.map((color) => (
            <Button
              variant={variant}
              color={color}
              style={{
                marginRight: '8px',
              }}>
              {color}
            </Button>
          ))}
        </div>
      ))}
    </>
  ),
};

const radius: DotorihamSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
export const Radius: Story = {
  render: () => (
    <>
      <div style={{ marginBottom: '8px' }}>
        {radius.map((radius) => (
          <Button
            radius={radius}
            style={{
              marginRight: '8px',
            }}>
            {radius}
          </Button>
        ))}
      </div>
    </>
  ),
};

const sizes: (DotorihamSize | `compact-${DotorihamSize}`)[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'compact-xs',
  'compact-sm',
  'compact-md',
  'compact-lg',
  'compact-xl',
];

export const Size: Story = {
  render: () => (
    <>
      {sizes.map((size) => (
        <Button
          size={size}
          style={{
            marginRight: '8px',
          }}>
          {size}
        </Button>
      ))}
    </>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <>
      {variants.map((variant) => (
        <Button
          variant={variant}
          fullWidth
          style={{
            marginBottom: '8px',
          }}>
          {variant}
        </Button>
      ))}
    </>
  ),
};

export default meta;
