import { ReactNode } from 'react';

import { ModalProvider } from './modal-context';
import { ModalTransition } from './modal.transition';
import { useModalController } from './use-modal-controller';
import { Popover } from '../popover';

export interface ModalRootProps {
  children: ReactNode;

  isOpen?: boolean;

  defaultIsOpen?: boolean;

  onClose?: () => void;

  transitionVariant?: ModalTransition;
}

export const ModalRoot = ({
  children,
  isOpen: _isOpen,
  onClose: _onClose,
  defaultIsOpen,
  transitionVariant = 'popInFromBottom',
}: ModalRootProps) => {
  const { isOpen, onChange } = useModalController({
    defaultIsOpen,
    isOpen: _isOpen,
    onClose: _onClose,
  });

  return (
    <ModalProvider
      value={{
        isOpen,
        onChange,
        transitionVariant,
      }}>
      <Popover.Root isOpen={isOpen} onClose={() => onChange(false)}>
        {children}
      </Popover.Root>
    </ModalProvider>
  );
};
