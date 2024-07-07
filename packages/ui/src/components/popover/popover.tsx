import { ReactNode } from 'react';

import { useClickOutside } from '@dotoriham/hooks';

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

  opened?: boolean;
}

export const Popover = ({ children, opened }: PopoverProps) => {
  const { open, close, isOpen, toggle, left, targetRef, top, dropdownRef } =
    usePopover();

  useClickOutside({
    elements: [targetRef.current, dropdownRef.current],
    handler: () => {
      if (isOpen) {
        close();
      }
    },
  });

  return (
    <PopoverProvider
      value={{
        close,
        controlled: opened !== undefined,
        dropdownRef,
        isOpen,
        left,
        open,
        targetRef,
        toggle,
        top,
      }}>
      {children}
    </PopoverProvider>
  );
};

Popover.Dropdown = PopoverDropdown;
Popover.Target = PopoverTarget;
