import { ReactNode } from 'react';

export interface MenuLabelProps {
  children: ReactNode;
}

export const MenuLabel = ({ children }: MenuLabelProps) => {
  return <div>{children}</div>;
};
