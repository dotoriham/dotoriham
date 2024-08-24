import { useRef } from 'react';

import { useToggle } from '@dotoriham/hooks';

export const usePopover = () => {
  const [isOpen, toggle] = useToggle();

  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return {
    close: () => toggle(false),
    contentRef,
    isOpen,
    open: () => toggle(true),
    targetRef,
    toggle,
  };
};
