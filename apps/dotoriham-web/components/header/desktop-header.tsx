import { getClassNames } from '@dotoriham/ui';

import classes from './desktop-header.module.css';

const cx = getClassNames(classes);

export interface HeaderProps {
  showSearchBar?: boolean;
}

export const DesktopHeader = ({ showSearchBar }: HeaderProps) => {
  return (
    <header className={cx('root')}>
      헤더
      {showSearchBar && <div>검색바</div>}
    </header>
  );
};
