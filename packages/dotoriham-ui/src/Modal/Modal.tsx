import { ReactNode } from 'react';

import { css } from '@emotion/react';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <>
      <div css={wrapper}>
        <div css={inner}>{children}</div>
        <Overlay visible={open} onClick={onClose} />
      </div>
    </>
  );
};

const wrapper = css`
  position: fixed;
  z-index: 9999;
  display: grid;
  width: 100%;
  height: 100%;
  inset: 0px;
  place-items: center;
  opacity: 1;
  transition: all 0s ease 0s;
`;

const inner = css`
  position: relative;
  z-index: 600;
  max-width: 310px;
  margin: auto;
  padding: 24px 16px 16px;
  background-color: white;
`;
