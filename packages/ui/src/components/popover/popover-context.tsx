import { createSafeContext } from '@dotoriham/react-utils';

interface ContextProps {
  close: () => void;
  open: () => void;
  isOpen: boolean;
}

export const [PopoverProvider, usePopoverContext] =
  createSafeContext<ContextProps>();
