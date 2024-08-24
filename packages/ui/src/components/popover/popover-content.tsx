import { ReactNode } from 'react';

import { AnimatePresence } from '@dotoriham/animate';

import { usePopoverContext } from './popover-context';
import { Portal } from '../portal/portal';

export interface PopoverContentProps {
  children: ReactNode;
}

export const PopoverContent = ({ children }: PopoverContentProps) => {
  const ctx = usePopoverContext();

  return (
    <Portal>
      <AnimatePresence>
        {ctx.isOpen && <div ref={ctx.contentRef}>{children}</div>}
      </AnimatePresence>
    </Portal>
  );
};
