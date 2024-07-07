import { RefObject } from 'react';

import { createSafeContext } from '@dotoriham/react-utils';

interface ContextProps {
  top: number;
  left: number;
  close: () => void;
  open: () => void;
  toggle: () => void;
  isOpen: boolean;
  targetRef: RefObject<HTMLDivElement>;
  dropdownRef: RefObject<HTMLDivElement>;
  controlled: boolean;
}

export const [PopoverProvider, usePopoverContext] =
  createSafeContext<ContextProps>();
