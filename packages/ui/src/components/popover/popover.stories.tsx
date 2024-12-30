import { Meta, StoryObj } from '@storybook/react';

import { Popover } from './popover';
import { useToggle } from '../../hooks';
import { Button } from '../button';

const meta: Meta<typeof Popover> = {
  component: Popover,
  decorators: [(Story) => <Story />],
  title: 'Popover',
};

type Story = StoryObj<typeof Popover>;

const BaseComponent = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <Button onClick={() => toggle()}>버튼</Button>
      <Popover isOpen={isOpen} onClose={() => toggle(false)}>
        asdasd
      </Popover>
    </>
  );
};

export const Base: Story = {
  render: () => <BaseComponent />,
};

export const CompoundPattern: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Target>
        <Button>버튼</Button>
      </Popover.Target>

      <Popover.Content>
        <>컨텐츠</>
      </Popover.Content>
    </Popover.Root>
  ),
};

export default meta;
