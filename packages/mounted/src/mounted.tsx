import { PropsWithChildren, ReactNode, Suspense, useMemo } from 'react';

import { useIntersectionObserver } from './use-intersection-observer';

interface CommonProps {
  transition?: {
    type: 'fade-in' | 'slide-up' | 'slide-down';
    delay?: number;
  };

  lazy?: {
    rootMargin?: string;
    threshold?: number;
    /**
     * 한 번 보이면 관찰 중단
     */
    freezeOnceVisible?: boolean;
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
  const children = useMemo(
    () =>
      props.lazy != null ? (
        <LazyComponent {...props.lazy}>{props.children}</LazyComponent>
      ) : (
        props.children
      ),
    [props.lazy, props.children],
  );

  if (props.suspense) {
    return <Suspense fallback={props.fallback}>{children}</Suspense>;
  }

  return <>{children}</>;
};

function LazyComponent(props: PropsWithChildren<CommonProps['lazy']>) {
  const { isIntersecting, ref } = useIntersectionObserver<HTMLDivElement>({
    freezeOnceVisible: props.freezeOnceVisible,
    rootMargin: props.rootMargin,
    threshold: props.threshold,
  });

  if (isIntersecting) {
    return <>{props.children}</>;
  }

  return <div ref={ref} />;
}
