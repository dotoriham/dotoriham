import { ArrowIcon } from '@dotoriham/icons';
import { Flex, Typography, getClassNames } from '@dotoriham/ui';

import classes from './index.module.css';
import { Profile } from './profile';

const cx = getClassNames(classes);

export const SidebarProfileSection = () => {
  return (
    <Flex align="center" className={cx('block')}>
      <Profile src="https://yt3.ggpht.com/yti/ANjgQV_E-KE_Jw4UPwt87c3HehG1jPp81gVgrCCh3PhJ5coMY5Y=s88-c-k-c0x00ffffff-no-rj" />
      <Typography type="pretandard_16" ml={8}>
        siwha9808
      </Typography>
      <ArrowIcon
        fontSize={18}
        style={{
          marginLeft: '4px',
          transform: 'rotate(90deg)',
        }}
      />
    </Flex>
  );
};
