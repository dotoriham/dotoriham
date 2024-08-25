import { RefObject } from 'react';

import { createSafeContext } from '@dotoriham/react-utils';

interface ContextProps {
  onChange: (open: boolean) => void;
  isOpen: boolean;
  targetRef: RefObject<HTMLDivElement>;
  contentRef: RefObject<HTMLDivElement>;
}

export const [PopoverProvider, usePopoverContext] =
  createSafeContext<ContextProps>();
