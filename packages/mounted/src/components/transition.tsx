import { PropsWithChildren, useMemo } from 'react';

import { useIntersectionObserver } from '../hooks/use-intersection-observer';

export interface TransitionProps {
  /**
   * @default 300
   */
  duration?: number;
  /**
   * @default 0
   */
  delay?: number;
  /**
   * @default 0.5
   */
  threshold?: number;
}

export function Transition(props: PropsWithChildren<TransitionProps>) {
  const { isIntersecting, ref } = useIntersectionObserver<HTMLDivElement>({
    freezeOnceVisible: true,
    threshold: props.threshold ?? 0.5,
  });

  const style = useMemo<React.CSSProperties>(() => {
    const duration = `${props.duration || 300}ms`;
    const delay = `${props.delay || 0}ms`;

    return {
      opacity: isIntersecting ? 1 : 0,
      transition: `opacity ${duration} ease-in-out ${delay}`,
    };
  }, [isIntersecting, props.duration, props.delay]);

  return (
    <div ref={ref} style={style}>
      {props.children}
    </div>
  );
}
