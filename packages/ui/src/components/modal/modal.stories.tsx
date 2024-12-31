import { Meta, StoryObj } from '@storybook/react';

import { Modal } from './modal';
import { useToggle } from '../../hooks';
import { Button } from '../button';

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [(Story) => <Story />],
  title: 'Modal',
};

type Story = StoryObj<typeof Modal>;

const BaseComponent = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <Button onClick={() => toggle()}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => toggle(false)}>
        ads
      </Modal>
    </>
  );
};
export const Base: Story = {
  render: () => <BaseComponent />,
};

export default meta;
