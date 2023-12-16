type UpdateFn<State> = (state: State) => State;
type Fn = () => void;

export type Store<State> = {
  initialState: State;
  getState: () => State;
  setState: (update: UpdateFn<State> | State) => void;
  subscribe: (callback: Fn) => Fn;
  reset: () => void;
};

function isUpdateFn<State>(value: unknown): value is UpdateFn<State> {
  return typeof value === 'function';
}

export function createStore<State>(initialState: State) {
  let state = initialState;
  const callbacks = new Set<Fn>();

  function getState() {
    return state;
  }

  function setState(update: State | UpdateFn<State>) {
    state = isUpdateFn<State>(update) ? update(state) : update;
    callbacks.forEach((callback) => callback());
  }

  function subscribe(callback: Fn): Fn {
    callbacks.add(callback);
    return () => callbacks.delete(callback);
  }

  function reset() {
    setState(initialState);
  }

  return {
    getState,
    reset,
    setState,
    subscribe,
  };
}
