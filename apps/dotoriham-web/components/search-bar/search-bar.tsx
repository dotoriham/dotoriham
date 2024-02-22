import { SearchIcon } from '@dotoriham/icons';
import { Flex, Input, color, getClassNames } from '@dotoriham/ui';

import classes from './search-bar.module.css';

const cx = getClassNames(classes);

export const SearchBar = () => {
  return (
    <div className={cx('root')}>
      <Flex as="button" align="center" justify="center">
        <SearchIcon fontSize={24} />
      </Flex>

      <Input
        placeholder="도토리함 검색.."
        bg={color.gray1}
        variant="text"
        size="xs"
      />
    </div>
  );
};
