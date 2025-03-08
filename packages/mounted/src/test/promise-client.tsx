import { ReactNode, createContext, useContext } from 'react';

type PromiseKey = string;

export class Client {
  data: Record<PromiseKey, any> = {};

  constructor() {}

  getData<T>(key: PromiseKey) {
    return this.data[key] as T;
  }

  isPending(key: PromiseKey) {
    return this.data[key] == null;
  }

  async fetechedData<T>(key: PromiseKey, promiseFn: () => Promise<T>) {
    if (this.data[key] == null) {
      const response = await promiseFn();
      this.data[key] = response;
      return response;
    }

    return this.data[key];
  }
}

const SuspenseQueryContext = createContext<Client | null>(null);

interface Props {
  client: Client;
  children: ReactNode;
}
export const SuspenseQueryProvider = ({ children, client }: Props) => {
  return (
    <SuspenseQueryContext.Provider value={client}>
      {children}
    </SuspenseQueryContext.Provider>
  );
};

const useSuspenseQueryClient = () => {
  const client = useContext(SuspenseQueryContext);
  if (!client) {
    throw new Error(
      'useSuspenseQueryClient must be used within SuspenseQueryProvider',
    );
  }
  return client;
};

interface Options<T> {
  promiseKey: PromiseKey;
  promiseFn: () => Promise<T>;
}
export const useSuspenseQuery = <T,>(options: Options<T>) => {
  const client = useSuspenseQueryClient();

  if (client.isPending(options.promiseKey)) {
    console.log('pending');
    throw client.fetechedData<T>(options.promiseKey, options.promiseFn);
  }

  return client.getData<T>(options.promiseKey);
};
