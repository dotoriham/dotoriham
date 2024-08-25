import { ReactNode } from 'react';

import { usePopoverContext } from './popover-context';

export interface PopoverTargetProps {
  children: ReactNode;
}

export const PopoverTarget = ({ children }: PopoverTargetProps) => {
  const ctx = usePopoverContext();

  return (
    <div
      ref={ctx.targetRef}
      style={{
        display: 'inline-block',
      }}
      onClick={() => ctx.onChange(!ctx.isOpen)}>
      {children}
    </div>
  );
};
