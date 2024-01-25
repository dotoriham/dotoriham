import { ReactNode } from 'react';

import { Background } from './background';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  return (
    <>
      {children}
      <Background isOpen={isOpen} onClick={onClose} />
    </>
  );
};
