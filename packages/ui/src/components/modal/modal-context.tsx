import { createSafeContext } from '@dotoriham/react-utils';

import { ModalTransition } from './modal.transition';

interface ModalContextProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  transitionVariant: ModalTransition;
}

export const [ModalProvider, useModalContext] =
  createSafeContext<ModalContextProps>();
