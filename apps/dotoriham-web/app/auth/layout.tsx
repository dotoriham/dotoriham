import { PropsWithChildren } from 'react';

import { getClassNames } from '@dotoriham/ui';

import classes from './layout.module.css';

const cx = getClassNames(classes);

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className={cx('layout')}>{children}</div>
    </>
  );
}

export default AuthLayout;
