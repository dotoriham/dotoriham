import { PropsWithChildren, useState } from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const PageLayoutProvider = ({ children }: PropsWithChildren) => {
  const [] = useState(0);

  // TODO 여기서 userAgent 기반으로 모바일 레이아웃인지 데스크탑 레이아웃인지 분기처리 하기

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
