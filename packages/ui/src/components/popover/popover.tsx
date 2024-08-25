import { ReactNode } from 'react';

import { PopoverContent } from './popover-content';
import { PopoverProvider } from './popover-context';
import { PopoverTarget } from './popover-target';
import { PopoverPosition, PopoverWidth } from './popover.types';
import { usePopoverController } from './use-popover-controller';

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
  const { open, close, isOpen, toggle, targetRef, contentRef } =
    usePopoverController();

  return (
    <PopoverProvider
      value={{
        close,
        contentRef,
        controlled: opened !== undefined,
        isOpen,
        open,
        targetRef,
        toggle,
      }}>
      {children}
    </PopoverProvider>
  );
};

Popover.Target = PopoverTarget;
Popover.Content = PopoverContent;
