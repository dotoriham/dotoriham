import { getClassNames } from '@dotoriham/ui';

import classes from './header.module.css';

const cx = getClassNames(classes);

export const Header = () => {
  return <header className={cx('root')}>헤더</header>;
};
