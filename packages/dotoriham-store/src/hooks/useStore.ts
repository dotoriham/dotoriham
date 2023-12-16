import { useSyncExternalStore } from 'react';

import { Store } from '../core';

export function useStore<T>(store: Store<T>) {
  const state = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getState,
  );
  return [state, store.setState, store.reset] as const;
}
