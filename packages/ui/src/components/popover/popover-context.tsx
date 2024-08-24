import { RefObject } from 'react';

import { createSafeContext } from '@dotoriham/react-utils';

interface ContextProps {
  close: () => void;
  open: () => void;
  toggle: () => void;
  isOpen: boolean;
  targetRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
  controlled: boolean;
}

export const [PopoverProvider, usePopoverContext] =
  createSafeContext<ContextProps>();
