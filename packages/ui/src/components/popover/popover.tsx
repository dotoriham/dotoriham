import { ReactNode } from 'react';

import { PopoverProvider } from './popover-context';
import { PopoverDropdown } from './popover-dropdown';
import { PopoverTarget } from './popover-target';
import { PopoverPosition, PopoverWidth } from './popover.types';
import { usePopover } from './use-popover';

export interface PopoverProps {
  /**
   * popover width
   * @default: "max-content"
   * target: target element size
   */
  width?: PopoverWidth;

  /**
   * popover position
   * @default: "bottom"
   */
  position?: PopoverPosition;

  children: ReactNode;
}

export const Popover = ({ children }: PopoverProps) => {
  const { open, close, isOpen } = usePopover();

  return (
    <PopoverProvider
      value={{
        close,
        isOpen,
        open,
      }}>
      {children}
    </PopoverProvider>
  );
};

Popover.Dropdown = PopoverDropdown;
Popover.Target = PopoverTarget;
