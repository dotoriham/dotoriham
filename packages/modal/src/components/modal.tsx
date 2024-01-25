import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  return <div>{children}</div>;
};
