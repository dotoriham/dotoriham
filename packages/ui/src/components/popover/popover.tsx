import { ReactNode } from 'react';

import { PopoverContent } from './popover-content';
import { PopoverRoot, PopoverRootProps } from './popover-root';
import { PopoverTarget } from './popover-target';

export interface PopoverProps extends PopoverRootProps {
  children: ReactNode;
}

export const Popover = ({ children, ...popoverRootProps }: PopoverProps) => {
  return (
    <PopoverRoot {...popoverRootProps}>
      <PopoverContent>{children}</PopoverContent>
    </PopoverRoot>
  );
};

Popover.Root = PopoverRoot;
Popover.Target = PopoverTarget;
Popover.Content = PopoverContent;
