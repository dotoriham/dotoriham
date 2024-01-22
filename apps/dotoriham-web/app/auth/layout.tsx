import { PropsWithChildren } from 'react';

import { getClassNames } from '@dotoriham/ui';

import classes from './layout.module.css';
import { Header } from '../../components/@shared/header/header';

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
