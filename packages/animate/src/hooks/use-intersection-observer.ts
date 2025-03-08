import { useEffect, useState, useRef } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  /**
   * 한 번 보이면 관찰 중단
   */
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement>(
  options: UseIntersectionObserverOptions = {},
) {
  const { freezeOnceVisible = false, ...intersectionOptions } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);
  const once = useRef(false);

  useEffect(() => {
    if (once.current) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);

      // 한 번 보이면 관찰 중단 옵션 처리
      if (entry.isIntersecting && freezeOnceVisible) {
        once.current = true;
        observer.unobserve(element);
      }
    }, intersectionOptions);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [intersectionOptions, freezeOnceVisible]);

  return { isIntersecting, ref };
}
