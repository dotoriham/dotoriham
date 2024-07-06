import { ReactNode } from 'react';

import { usePopoverContext } from './popover-context';

export interface PopoverDropdownProps {
  children: ReactNode;
}

export const PopoverDropdown = ({ children }: PopoverDropdownProps) => {
  const ctx = usePopoverContext();

  if (ctx.isOpen === false) {
    return null;
  }

  return <div>{children}</div>;
};
