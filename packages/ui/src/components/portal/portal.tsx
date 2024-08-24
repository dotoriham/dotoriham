import { ReactNode, useRef, useState } from 'react';

import { useIsomorphicEffect } from '@dotoriham/hooks';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: ReactNode;
  target?: HTMLElement | string;
}

export const Portal = ({ children, target }: PortalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useIsomorphicEffect(() => {
    setIsMounted(true);

    targetRef.current =
      target == null
        ? document.createElement('div')
        : target instanceof HTMLElement
          ? target
          : document.querySelector(target);

    if (target == null && targetRef.current != null) {
      document.body.appendChild(targetRef.current);
    }

    return () => {
      if (target == null && targetRef.current != null) {
        document.body.removeChild(targetRef.current);
      }
    };
  }, []);

  if (!isMounted || targetRef.current == null) {
    return null;
  }

  return createPortal(<>{children}</>, targetRef.current);
};
