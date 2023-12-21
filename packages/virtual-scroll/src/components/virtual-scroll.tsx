import { useMemo } from 'react';

import { chunk } from '../core/util';

interface VirtualScrollProps<T> {
  list: T[];
  columns?: number;
}

export const VirtualScroll = <T,>({
  list,
  columns = 1,
}: VirtualScrollProps<T>) => {
  const chunkedList = useMemo(() => chunk(list, columns), [list, columns]);
  console.log(chunkedList);

  return <div>VirtualScroll</div>;
};
