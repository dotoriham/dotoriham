import { PropsWithChildren, useMemo, useState } from 'react';

import { useAnimationFrame } from '../../hooks/use-animation-frame';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

export interface Props {
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

export const FadeIn = (props: PropsWithChildren<Props>) => {
  const { isIntersecting, ref } = useIntersectionObserver<HTMLDivElement>({
    freezeOnceVisible: true,
    threshold: props.threshold ?? 0.5,
  });

  const handleComplete = () => {
    console.log('Animation completed!');
  };

  useAnimationFrame({
    duration: 10000,
    endValue: 1,
    onComplete: handleComplete,
    onFrame: (value) => {
      console.log('value', value);
    },
    startValue: 0,
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
};
