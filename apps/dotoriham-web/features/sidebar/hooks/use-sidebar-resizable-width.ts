import { useEffect, useRef } from 'react';

export const useSidebarResizableWidth = <
  T extends HTMLElement = HTMLDivElement,
  K extends HTMLElement = HTMLDivElement,
>() => {
  const resizableBarRef = useRef<T>(null);
  const resizableTargetRef = useRef<K>(null);
  const isResizing = useRef(false);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (
        e.target instanceof Node &&
        resizableBarRef.current &&
        resizableBarRef.current.contains(e.target)
      ) {
        isResizing.current = true;
        document.body.style.cursor = 'col-resize';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (resizableTargetRef.current == null) {
        return;
      }

      if (isResizing.current === true && resizableBarRef.current != null) {
        resizableTargetRef.current.style.width = `${e.clientX}px`;
        resizableBarRef.current.style.opacity = '1';
      }
    };

    const handleMouseUp = () => {
      if (isResizing.current === false || resizableBarRef.current == null) {
        return;
      }

      isResizing.current = false;
      document.body.style.cursor = 'default';
      resizableBarRef.current.style.removeProperty('opacity');
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return {
    control: resizableBarRef,
    target: resizableTargetRef,
  };
};
