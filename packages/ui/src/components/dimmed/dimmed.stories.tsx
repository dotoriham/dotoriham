import { useToggle } from '@dotoriham/hooks';
import { Meta, StoryObj } from '@storybook/react';

import { Dimmed, DimmedProps } from './dimmed';
import { Button } from '../button';

const meta: Meta<typeof Dimmed> = {
  component: Dimmed,
  decorators: [(Story) => <Story />],
  title: 'Dimmed',
};

type Story = StoryObj<typeof Dimmed>;

const BaseComponent = (props: DimmedProps) => {
  const [open, toggle] = useToggle();

  return (
    <>
      <Button onClick={() => toggle()}>Open Dimmed</Button>
      <Dimmed {...props} open={open} onClick={() => toggle(false)} />
    </>
  );
};

export const Base: Story = {
  argTypes: {
    opacity: {
      control: {
        max: 1,
        min: 0,
        step: 0.1,
        type: 'range',
      },
    },
  },
  render: (arg) => <BaseComponent {...arg} />,
};

export default meta;
