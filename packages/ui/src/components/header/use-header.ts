import { createStore, useStore } from '@dotoriham/store';

const headerStore = createStore<string>('null');

export const useHeader = () => {
  const [state, setState] = useStore(headerStore);

  return {};
};
