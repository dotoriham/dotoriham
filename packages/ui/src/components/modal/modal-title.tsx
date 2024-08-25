import { ReactNode } from 'react';

export interface ModalTitleProps {
  children: ReactNode;
}

export const ModalTitle = ({ children }: ModalTitleProps) => {
  return <div>{children}</div>;
};
