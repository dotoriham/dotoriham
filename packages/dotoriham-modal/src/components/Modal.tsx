import { ReactNode } from 'react';

import { css } from '@emotion/react';

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
      </div>
      <div css={backdrop} onClick={onClose}></div>
    </>
  );
};

const wrapper = css`
  position: fixed;
  z-index: 1999; // TODO theme zIndex
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const inner = css`
  width: 500px;
  position: relative;
  top: 100px;
  margin: 0 auto;
  background-color: white;
`;

const backdrop = css`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
