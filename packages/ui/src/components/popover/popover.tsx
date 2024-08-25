import { ReactNode } from 'react';

import { PopoverContent } from './popover-content';
import { PopoverRoot, PopoverRootProps } from './popover-root';
import { PopoverTarget } from './popover-target';

export interface PopoverProps
  extends Omit<PopoverRootProps, 'isOpen' | 'onClose'> {
  children: ReactNode;

  isOpen: boolean;

  onClose: () => void;
}

export const Popover = ({
  isOpen,
  onClose,
  children,
  ...popoverRootProps
}: PopoverProps) => {
  return (
    <PopoverRoot {...popoverRootProps} isOpen={isOpen} onClose={onClose}>
      <PopoverContent>{children}</PopoverContent>
    </PopoverRoot>
  );
};

Popover.Root = PopoverRoot;
Popover.Target = PopoverTarget;
Popover.Content = PopoverContent;
