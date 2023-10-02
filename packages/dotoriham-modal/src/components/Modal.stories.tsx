import { Meta, StoryObj } from '@storybook/react';

import { ModalWrapper } from './ModalWrapper';

// TODO ModalContainer 만들어지면 변경
const meta: Meta<typeof ModalWrapper> = {
  component: ModalWrapper,
  title: 'Modal',
};

export default meta;

type Story = StoryObj<typeof ModalWrapper>;

/**
 * 모달
 */
export const Base: Story = {
  render: () => <ModalWrapper />,
};
