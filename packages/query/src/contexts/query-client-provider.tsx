'use client';
import { ReactNode, createContext, useContext, useEffect } from 'react';

import { QueryClient } from '../core';

export const QueryClientContext = createContext<QueryClient | undefined>(
  undefined,
);

export type QueryClientProviderProps = {
  client: QueryClient;
  children?: ReactNode;
};
export const QueryClientProvider = ({
  client,
  children,
}: QueryClientProviderProps) => {
  useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, []);

  return (
    <QueryClientContext.Provider value={client}>
      {children}
    </QueryClientContext.Provider>
  );
};

export const useQueryClient = (queryClient?: QueryClient) => {
  const client = useContext(QueryClientContext);

  if (queryClient != null) {
    return queryClient;
  }

  if (client == null) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return client;
};
