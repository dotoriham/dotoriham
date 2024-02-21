import { ReactNode } from 'react';

import { getClassNames } from '@dotoriham/ui';

import styles from './base-desktop-layout.module.css';
import { DesktopFooter, DesktopFooterProps } from '../../footer';
import { DesktopHeader, DesktopHeaderProps } from '../../header';
const cx = getClassNames(styles);

interface DesktopLayoutProps {
  children: ReactNode;

  header?: boolean;
  footer?: boolean;

  headerOptions?: DesktopHeaderProps;
  footerOptions?: DesktopFooterProps;
}

export const BaseDesktopLayout = ({
  children,
  header,
  headerOptions,
  footer,
  footerOptions,
}: DesktopLayoutProps) => {
  return (
    <>
      {header === true && <DesktopHeader {...headerOptions} />}
      <main className={cx('root')}>{children}</main>
      {footer === true && <DesktopFooter {...footerOptions} />}
    </>
  );
};
