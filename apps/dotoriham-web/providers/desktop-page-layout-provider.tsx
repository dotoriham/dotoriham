'use client';

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { DesktopFooter, FooterProps } from '../components/footer';
import { DesktopHeader, HeaderProps } from '../components/header';
interface DesktopPageLayoutContext {
  header: boolean;
  footer: boolean;

  headerOptions?: HeaderProps;
  footerOptions?: FooterProps;
}

interface ProviderProps {
  context: DesktopPageLayoutContext;
  setContext: (context: DesktopPageLayoutContext) => void;
}

const intialValue: DesktopPageLayoutContext = {
  footer: false,
  header: false,
};

const DesktopPageLayoutContext = createContext<ProviderProps>({
  context: intialValue,
  setContext: () => {},
});

export const DesktopPageLayoutProvider = ({ children }: PropsWithChildren) => {
  const [context, setContext] = useState<DesktopPageLayoutContext>(intialValue);

  const value = {
    context,
    setContext,
  };

  return (
    <DesktopPageLayoutContext.Provider value={value}>
      {context.header === true && <DesktopHeader {...context.headerOptions} />}
      {children}
      {context.footer === true && <DesktopFooter {...context.footerOptions} />}
    </DesktopPageLayoutContext.Provider>
  );
};

export const useDesktopLayout = (props?: DesktopPageLayoutContext) => {
  const context = useContext(DesktopPageLayoutContext);
  if (!context) {
    throw new Error(
      'useDesktopLayout must be used within a DesktopPageLayoutProvider',
    );
  }

  const { setContext } = context;

  useEffect(() => {
    if (props != null) {
      setContext(props);
    }
  }, [props]);
};
