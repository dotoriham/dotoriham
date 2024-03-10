import { ReactNode } from 'react';

export interface MenuItemProps {
  children: ReactNode;
}

export const MenuItem = ({ children }: MenuItemProps) => {
  return <div>{children}</div>;
};
