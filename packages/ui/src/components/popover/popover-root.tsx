import { ReactNode } from 'react';

import { PopoverProvider } from './popover-context';
import { usePopoverController } from './use-popover-controller';

export interface PopoverRootProps {
  children: ReactNode;

  isOpen?: boolean;

  defaultIsOpen?: boolean;

  onClose?: () => void;
}

export const PopoverRoot = ({
  children,
  defaultIsOpen,
  isOpen: _isOpen,
  onClose: _onClose,
}: PopoverRootProps) => {
  const { isOpen, onChange, targetRef, contentRef } = usePopoverController({
    defaultIsOpen,
    isOpen: _isOpen,
    onClose: _onClose,
  });
  return (
    <PopoverProvider
      value={{
        contentRef,
        isOpen,
        onChange,
        targetRef,
      }}>
      {children}
    </PopoverProvider>
  );
};
