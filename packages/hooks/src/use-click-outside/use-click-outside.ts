import { useEffect, useRef } from 'react';

const DEFAULT_EVENTS = ['mousedown', 'touchstart'];

interface Props {
  handler: () => void;
  events?: string[];
  elements?: (HTMLElement | null)[];
}

export const useClickOutside = <T extends HTMLElement>({
  handler,
  elements,
  events,
}: Props) => {
  const ref = useRef<T>();

  useEffect(() => {
    const listener = (event: Event) => {
      const { target } = event ?? {};
      if (target instanceof Node) {
        if (Array.isArray(elements)) {
          const shouldTrigger = elements.every((node) => {
            return !!node && !event.composedPath().includes(node);
          });
          shouldTrigger && handler();
        } else if (ref.current && !ref.current.contains(target)) {
          handler();
        }
      }
    };

    const eventList = events || DEFAULT_EVENTS;

    eventList.forEach((eventName) => {
      document.addEventListener(eventName, listener);
    });

    return () => {
      eventList.forEach((eventName) => {
        document.removeEventListener(eventName, listener);
      });
    };
  });

  return ref;
};
