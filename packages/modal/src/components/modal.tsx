import { ReactNode } from 'react';

import { Dimmed } from './dimmed';
import { ModalContainer } from './modal-container';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  return (
    <>
      <ModalContainer isOpen={isOpen} onClose={onClose}>
        {children}
      </ModalContainer>
      <Dimmed isOpen={isOpen} onClick={onClose} />
    </>
  );
};
