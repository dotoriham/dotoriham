import { useContext, useEffect, useMemo, useRef, useState } from 'react';

import {
  CreateOverlayElement,
  OverlayControlRef,
  OverlayController,
} from './overlay-controller';
import { OverlayContext } from './overlay-provider';

let elementId = 1;

interface Options {
  exitOnUnmount?: boolean;
}

export function useOverlay({ exitOnUnmount = true }: Options = {}) {
  const context = useContext(OverlayContext);

  if (context == null) {
    throw new Error('useOverlay is only available within OverlayProvider.');
  }

  const { mount, unmount } = context;
  const [id] = useState(() => String(elementId++));

  const overlayRef = useRef<OverlayControlRef | null>(null);

  useEffect(() => {
    return () => {
      if (exitOnUnmount) {
        unmount(id);
      }
    };
  }, [exitOnUnmount, id, unmount]);

  return useMemo(
    () => ({
      close: () => {
        overlayRef.current?.close();
      },
      exit: () => {
        unmount(id);
      },
      open: (overlayElement: CreateOverlayElement) => {
        mount(
          id,
          <OverlayController
            key={Date.now()} // 매 컴포넌트 생성시 마다 초기화 시켜주기 위함
            ref={overlayRef}
            overlayElement={overlayElement}
            onExit={() => {
              unmount(id);
            }}
          />,
        );
      },
    }),
    [id, mount, unmount],
  );
}
