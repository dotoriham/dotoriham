import { ReactNode, createContext, useContext } from 'react';

export function createSafeContext<ContextValue>(errorMessage?: string) {
  const Context = createContext<ContextValue | null>(null);

  const useSafeContext = () => {
    const context = useContext(Context);

    if (context == null) {
      throw new Error(
        errorMessage || 'useContext must be inside a Provider with a value',
      );
    }

    return context;
  };

  const Provider = ({
    children,
    value,
  }: {
    children: ReactNode;
    value: ContextValue;
  }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return [Provider, useSafeContext] as const;
}
