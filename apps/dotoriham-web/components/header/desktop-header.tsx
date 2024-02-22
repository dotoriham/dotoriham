import { DotorihamLogoIcon } from '@dotoriham/icons';
import { Flex, getClassNames } from '@dotoriham/ui';

import classes from './desktop-header.module.css';

const cx = getClassNames(classes);

export interface DesktopHeaderProps {}

export const DesktopHeader = ({}: DesktopHeaderProps) => {
  return (
    <header className={cx('root')}>
      <div className={cx('container')}>
        <Flex align="center" justify="space-between" className={cx('inner')}>
          <DotorihamLogoIcon width={88} height={20} />

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
