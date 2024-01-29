import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Modal } from './modal';
import { ModalVariantType } from './modal-utils';

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

const BaseComponent = ({
  buttonText,
  variant,
}: {
  buttonText: string;
  variant?: ModalVariantType;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        style={{
          border: '1px solid blue',
          borderRadius: '5px',
          display: 'block',
          marginBottom: '20px',
          padding: '10px 20px',
        }}
        onClick={() => setIsOpen(true)}>
        {buttonText}
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} variant={variant}>
        <div
          style={{
            background: 'white',
            height: '300px',
            width: '500px',
          }}
          onClick={() => console.log('hi')}>
          안녕하세요
        </div>
      </Modal>
    </>
  );
};

export const Base: Story = {
  render: () => <BaseComponent buttonText="모달 열기" />,
};

export const Animation: Story = {
  render: () => (
    <>
      <BaseComponent buttonText="popInFromBottom" variant="popInFromBottom" />
      <BaseComponent buttonText="fadeIn" variant="fadeIn" />
    </>
  ),
};

export default meta;
