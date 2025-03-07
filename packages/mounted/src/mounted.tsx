import { ReactNode } from 'react';

interface CommonProps {
  transition?: {
    type: 'fade-in' | 'slide-up' | 'slide-down';
    delay?: number;
  };

  lazy?: {
    rootMargin?: string;
    threshold?: number;
  };
}

interface PropsWithSuspenseTrue extends CommonProps {
  suspense: true;
  fallback: ReactNode;
}

interface PropsWithSuspenseFalse extends CommonProps {
  suspense?: false;
}

type Props = PropsWithSuspenseTrue | PropsWithSuspenseFalse;

export const Mounted = (props: Props) => {
  return null;
};
