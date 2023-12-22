import { useEffect, useRef, useState } from 'react';
import { throttle } from '../core';

const useScrollAware = (rootTagElement?: Element, wait = 100) => {
  const [scrollTop, setScrollTop] = useState(0);
  const animationFrame = useRef(0);
  const [container, setContainer] = useState<Element | Window | null>(null);

  useEffect(() => {
    setContainer(rootTagElement || window);
  }, [rootTagElement]);

  useEffect(() => {
    if (!container) {
      return;
    }

    const getScrollTop = () =>
      rootTagElement ? rootTagElement.scrollTop : window.scrollY;

    setScrollTop(getScrollTop());

    const onScroll = () => {
      const containerTop = getScrollTop();
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      animationFrame.current = requestAnimationFrame(() => {
        setScrollTop(containerTop);
      });
    };

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setTimeout(() => onScroll, 400);
      }
    };

    const throttled = throttle(onScroll, wait);
    container.addEventListener('scroll', throttled);
    window.addEventListener('pageshow', onPageShow);

    return () => {
      container.removeEventListener('scroll', throttled);
      window.removeEventListener('pageshow', onPageShow);
    };
  }, [container, wait, rootTagElement, scrollTop]);

  return { scrollTop };
};

export default useScrollAware;
