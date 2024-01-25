import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
  title: 'Modal',
};

type Story = StoryObj<typeof Modal>;

const BaseComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
          }}>
          <div
            style={{
              background: 'white',
              height: '300px',
              width: '500px',
            }}>
            안녕하세요
          </div>
        </div>
      </Modal>
    </>
  );
};

export const Base: Story = {
  render: () => <BaseComponent />,
};

export default meta;
