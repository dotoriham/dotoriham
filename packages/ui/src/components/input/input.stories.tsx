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
            margin: '8px',
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
            margin: '8px',
          }}
          placeholder={size}
        />
      ))}
    </>
  ),
};

export const Radius: Story = {
  render: () => (
    <>
      {sizes.map((size) => (
        <Input
          key={size}
          radius={size}
          style={{
            margin: '8px',
          }}
          placeholder={size}
        />
      ))}
    </>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      {variants.map((variant) => (
        <Input
          key={variant}
          variant={variant}
          disabled
          style={{
            margin: '8px',
          }}
          placeholder={variant}
        />
      ))}
    </>
  ),
};

export const WithLeftComponent: Story = {
  render: () => (
    <>
      <Input
        leftComponent={<div>left</div>}
        style={{
          margin: '8px',
        }}
        placeholder={'placeholder'}
      />

      <Input
        leftComponent={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <div
              style={{
                marginRight: '8px',
              }}>
              left
            </div>
            <div>left</div>
          </div>
        }
        style={{
          margin: '8px',
        }}
        placeholder={'placeholder'}
      />
    </>
  ),
};

export const WithRightComponent: Story = {
  render: () => (
    <>
      <Input
        rightComponent={<div>right</div>}
        style={{
          margin: '8px',
        }}
        placeholder={'placeholder'}
      />

      <Input
        rightComponent={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <div
              style={{
                marginRight: '8px',
              }}>
              right
            </div>
            <div>right</div>
          </div>
        }
        style={{
          margin: '8px',
        }}
        placeholder={'placeholder'}
      />
    </>
  ),
};

export default meta;
