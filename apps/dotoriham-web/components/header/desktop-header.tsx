import { BellIcon, DotorihamLogoIcon } from '@dotoriham/icons';
import { Flex, color, getClassNames } from '@dotoriham/ui';

import classes from './desktop-header.module.css';
import { HeaderProfile } from './header-profile';
import { SearchBar } from '../search-bar';

const cx = getClassNames(classes);

export interface DesktopHeaderProps {}

export const DesktopHeader = ({}: DesktopHeaderProps) => {
  return (
    <header className={cx('root')}>
      <div className={cx('container')}>
        <Flex align="center" justify="space-between" className={cx('inner')}>
          <DotorihamLogoIcon width={88} height={20} />

          <Flex>
            <SearchBar />

            <Flex ml={28}>
              <BellIcon
                fontSize={24}
                color={color.gray6}
                style={{
                  marginRight: 24,
                }}
              />
              <HeaderProfile />
            </Flex>
          </Flex>
        </Flex>
      </div>
    </header>
  );
};
