import { useToggle } from '@dotoriham/hooks';
import { Meta, StoryObj } from '@storybook/react';

import { Modal } from './modal';
import { Button } from '../button';

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [(Story) => <Story />],
  title: 'Modal',
};

type Story = StoryObj<typeof Modal>;

const BaseComponent = () => {
  const [open, toggle] = useToggle();

  return (
    <>
      <Button onClick={() => toggle()}>Open Modal</Button>
      <Modal open={open} onClose={() => toggle(false)}>
        ads
      </Modal>
    </>
  );
};
export const Base: Story = {
  render: () => <BaseComponent />,
};

const UsePopoverComponent = () => {
  return <Modal />;
};

export const usePopover: Story = {
  render: () => <UsePopoverComponent />,
};

const CompoundComponent = () => {
  return <Modal />;
};
export const CompoundPattern: Story = {
  render: () => <CompoundComponent />,
};

export default meta;
