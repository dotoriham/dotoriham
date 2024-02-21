import { Flex, getClassNames } from '@dotoriham/ui';

import classes from './desktop-header.module.css';

const cx = getClassNames(classes);

export interface DesktopHeaderProps {}

export const DesktopHeader = ({}: DesktopHeaderProps) => {
  return (
    <header className={cx('root')}>
      <div className={cx('container')}>
        <Flex align="center" justify="space-between" className={cx('inner')}>
          <div>로고</div>

          <Flex>
            <div>검색바</div>
            <Flex>
              <div>알림아이콘</div>
              <div>프로필아이콘</div>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </header>
  );
};
