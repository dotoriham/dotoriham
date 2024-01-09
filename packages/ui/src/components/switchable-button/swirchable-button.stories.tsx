import { Meta, StoryObj } from '@storybook/react';
import { SwitchableButton } from './switchable-button';
import { PropsWithChildren, useState } from 'react';

const meta: Meta<typeof SwitchableButton> = {
  title: 'SwitchableButton',
  component: SwitchableButton,
  decorators: [(Story) => <Story />],
};

type Story = StoryObj<typeof SwitchableButton>;

const ExampleBox = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        width: '100px',
        color: 'white',
        height: '100px',
        background: '#999',
      }}>
      {children}
    </div>
  );
};

const BaseSwitchableButton = () => {
  const [active, setActive] = useState(false);

  return (
    <SwitchableButton
      activeComponent={<ExampleBox>on more click me, i am inactive</ExampleBox>}
      inactiveComponent={<ExampleBox>click me, i am active</ExampleBox>}
      isActive={active}
      onClick={() => setActive(!active)}
    />
  );
};

export const Base: Story = {
  render: () => {
    return <BaseSwitchableButton />;
  },
};

export default meta;
