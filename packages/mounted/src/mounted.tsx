import { ReactNode, Suspense } from 'react';

interface CommonProps {
  transition?: {
    type: 'fade-in' | 'slide-up' | 'slide-down';
    delay?: number;
  };

  lazy?: {
    rootMargin?: string;
    threshold?: number;
  };
  children: ReactNode;
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
  if (props.suspense) {
    return <Suspense fallback={props.fallback}>{props.children}</Suspense>;
  }

  return <>{props.children}</>;
};
