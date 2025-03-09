import { PropsWithChildren, ReactNode, Suspense } from 'react';

import { Lazy, LazyProps } from './lazy';
import { Transition, TransitionProps } from './transition';
import { useIsMounted } from '../hooks/use-is-mounted';

interface CommonProps {
  transition?: TransitionProps;
  lazy?: LazyProps;
}

interface PropsWithSuspenseTrue extends CommonProps {
  suspense: true;
  fallback: ReactNode;
}

interface PropsWithSuspenseFalse extends CommonProps {
  suspense?: false;
}

export type MountedProps = PropsWithSuspenseTrue | PropsWithSuspenseFalse;

export const Mounted = (props: PropsWithChildren<MountedProps>) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <SuspenseWrapper
      suspense={props.suspense}
      fallback={props.suspense === true ? props.fallback : undefined}>
      <LazyWrapper lazy={props.lazy}>
        <TransitionWrapper transition={props.transition}>
          {props.children}
        </TransitionWrapper>
      </LazyWrapper>
    </SuspenseWrapper>
  );
};

function SuspenseWrapper({
  fallback,
  children,
  suspense = false,
}: PropsWithChildren<{ suspense?: boolean; fallback?: ReactNode }>) {
  if (suspense === true) {
    return <Suspense fallback={fallback}>{children}</Suspense>;
  }
  return <>{children}</>;
}

function TransitionWrapper({
  transition,
  children,
}: PropsWithChildren<{
  transition?: CommonProps['transition'];
}>) {
  if (transition) {
    return <Transition {...transition}>{children}</Transition>;
  }

  return <>{children}</>;
}

function LazyWrapper({
  lazy,
  children,
}: PropsWithChildren<{
  lazy?: CommonProps['lazy'];
}>) {
  if (lazy) {
    return <Lazy {...lazy}>{children}</Lazy>;
  }

  return <>{children}</>;
}
