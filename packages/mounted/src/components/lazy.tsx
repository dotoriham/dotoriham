import { PropsWithChildren } from 'react';

import { useIntersectionObserver } from '../hooks/use-intersection-observer';

export interface LazyProps {
  /**
   * 한 번 보이면 관찰 중단
   */
  freezeOnceVisible?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export function Lazy(props: PropsWithChildren<LazyProps>) {
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
