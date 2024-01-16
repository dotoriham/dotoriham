import { SymbolCharacterIcon } from '@dotoriham/icons';
import { getClassNames } from '@dotoriham/ui';

import classes from './sign-up-title.module.css';

const cx = getClassNames(classes);

export const SignUpTitle = () => {
  return (
    <div className={cx('root', 'ssurround_20_700')}>
      <SymbolCharacterIcon fontSize={30} className={cx('icon')} />
      편리한 북마크 생활을 시작해 보세요!
    </div>
  );
};
