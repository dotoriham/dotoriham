import { getClassNames } from '@dotoriham/ui';

import classes from './desktop-header.module.css';

const cx = getClassNames(classes);

export const DesktopHeader = () => {
  return <header className={cx('root')}>헤더</header>;
};
