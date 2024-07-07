import { ReactNode } from 'react';

import { AnimatePresence } from '@dotoriham/animate';

import { usePopoverContext } from './popover-context';
import classes from './popover.module.css';
import { getClassNames } from '../../utils';

const cx = getClassNames(classes);

export interface PopoverDropdownProps {
  children: ReactNode;
}

export const PopoverDropdown = ({ children }: PopoverDropdownProps) => {
  const ctx = usePopoverContext();

  return (
    <div ref={ctx.dropdownRef}>
      <AnimatePresence>
        {ctx.isOpen && (
          <div
            className={cx('popover-dropdown')}
            style={{
              left: `${ctx.left}px`,
              top: `${ctx.top}px`,
            }}>
            {children}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
