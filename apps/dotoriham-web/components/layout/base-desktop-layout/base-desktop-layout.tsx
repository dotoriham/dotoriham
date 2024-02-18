import { PropsWithChildren } from 'react';

import { getClassNames } from '@dotoriham/ui';

import styles from './base-desktop-layout.module.css';
const cx = getClassNames(styles);

export const BaseDesktopLayout = ({ children }: PropsWithChildren) => {
  return <div className={cx('root')}>{children}</div>;
};
