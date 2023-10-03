import { useState } from 'react';

import { css } from '@emotion/react';
import { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

// TODO ModalContainer 만들어지면 변경
const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};

export default meta;

type Story = StoryObj<typeof Modal>;

/**
 * 모달
 */
export const Base: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    return (
      <>
        <button css={buttonStyle} onClick={() => setOpen(true)}>
          모달 open
        </button>
        <Modal open={open} onClose={onClose}>
          asd
        </Modal>
      </>
    );
  },
};

const buttonStyle = css`
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
`;
