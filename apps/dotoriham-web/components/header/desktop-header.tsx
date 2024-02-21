import { getClassNames } from '@dotoriham/ui';

import classes from './desktop-header.module.css';

const cx = getClassNames(classes);

export interface DesktopHeaderProps {
  showSearchBar?: boolean;
}

export const DesktopHeader = ({ showSearchBar }: DesktopHeaderProps) => {
  return (
    <header className={cx('root')}>
      헤더
      {showSearchBar && <div>검색바</div>}
    </header>
  );
};
