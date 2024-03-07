import { ReactNode } from 'react';

export interface MenuTargetProps {
  children: ReactNode;
}

export const MenuTarget = ({ children }: MenuTargetProps) => {
  return <div>{children}</div>;
};
