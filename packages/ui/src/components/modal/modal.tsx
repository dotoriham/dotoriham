import { ReactNode } from 'react';

import { ModalContent } from './modal-content';
import { ModalRoot, ModalRootProps } from './modal-root';
import { ModalTitle } from './modal-title';
import { Dimmed } from '../dimmed';
import { Portal } from '../portal/portal';

export interface ModalProps extends ModalRootProps {
  title?: ReactNode | string;

  isOpen: boolean;

  onClose: () => void;

  defaultIsOpen?: boolean;
}

export const Modal = ({
  title,
  onClose,
  isOpen,
  children,
  ...modalRootProps
}: ModalProps) => {
  return (
    <ModalRoot isOpen={isOpen} onClose={onClose} {...modalRootProps}>
      <ModalContent>
        {typeof title === 'string' ? <ModalTitle>{title}</ModalTitle> : title}
        {children}
      </ModalContent>

      <Portal>
        <Dimmed isOpen={isOpen} onClick={onClose} />
      </Portal>
    </ModalRoot>
  );
};

Modal.Root = ModalRoot;
Modal.Title = ModalTitle;
