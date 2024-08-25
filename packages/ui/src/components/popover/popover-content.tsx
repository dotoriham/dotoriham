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
    <AnimatePresence>
      {ctx.isOpen && (
        <Portal>
          <div ref={ctx.contentRef}>{children}</div>
        </Portal>
      )}
    </AnimatePresence>
  );
};
