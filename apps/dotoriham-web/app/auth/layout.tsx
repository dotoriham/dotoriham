import { Header } from '@/components/header/header';
import { PropsWithChildren } from 'react';
import classes from './layout.module.css';
import { getClassNames } from '@dotoriham/ui';

const cx = getClassNames(classes);

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className={cx('layout')}>{children}</div>
    </>
  );
}

export default AuthLayout;
