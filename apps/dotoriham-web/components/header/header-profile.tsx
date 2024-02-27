import { getClassNames } from '@dotoriham/ui';

import classes from './header-profile.module.css';

const cx = getClassNames(classes);

export const HeaderProfile = () => {
  return <div className={cx('root')}>도</div>;
};
