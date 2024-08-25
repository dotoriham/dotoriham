import { ReactNode } from 'react';

import { PopoverProvider } from './popover-context';
import { usePopoverController } from './use-popover-controller';

export interface PopoverRootProps {
  children: ReactNode;

  isOpen?: boolean;

  onClose?: () => void;
}

export const PopoverRoot = ({
  children,
  isOpen: _isOpen,
  onClose: _onClose,
}: PopoverRootProps) => {
  const { isOpen, onChange, targetRef, contentRef } = usePopoverController({
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
