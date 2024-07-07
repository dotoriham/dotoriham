import { useRef } from 'react';

import { useToggle } from '@dotoriham/hooks';

export const usePopover = () => {
  const [isOpen, toggle] = useToggle();

  const targetRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return {
    close: () => toggle(false),
    dropdownRef,
    isOpen,
    left: targetRef.current?.offsetLeft || 0,
    open: () => toggle(true),
    targetRef,
    toggle,
    top: targetRef.current?.offsetTop || 0,
  };
};
