import { getClassNames } from '@dotoriham/ui';

import classes from './sign-in-top-section.module.css';

const cx = getClassNames(classes);

export const SignInTopSection = () => {
  return <div className={cx('root')}>SignInTopSection</div>;
};
