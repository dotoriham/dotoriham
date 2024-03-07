import { ReactNode } from 'react';

export interface MenuDropdownProps {
  children: ReactNode;
}

export const MenuDropdown = ({ children }: MenuDropdownProps) => {
  return <div>{children}</div>;
};
