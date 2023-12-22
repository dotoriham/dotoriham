'use client';

import { ReactNode, memo, useEffect, useMemo, useState } from 'react';
import { chunk } from '../core/util';
import { useVirtualizeList } from '../hooks/useVirtualizeList';
import { useMount } from '../hooks/use-mount';

interface VirtualScrollProps<T> {
  /**
   * @description List of items to be rendered
   */
  data: T[];
  /**
   * @description Number of columns to be rendered
   * @default 1
   */
  columns?: number;
  renderItem: (props: T, index: number) => JSX.Element;
  itemHeight: number;
  itemGap?: number;
  rootTagElement?: Element;
  renderAhead?: number;
  loadMore?: () => void;
  intersectionObserverOptions?: IntersectionObserverInit;
}

export const VirtualScroll = <T extends unknown>({
  data,
  renderItem,
  columns = 1,
  loadMore,
  rootTagElement,
  itemGap = 5,
  itemHeight,
  intersectionObserverOptions,
  renderAhead = 20,
}: VirtualScrollProps<T>) => {
  const isMount = useMount();

  const { offsetY, totalHeight, visibleList } = useVirtualizeList({
    data,
    columns,
    defaultItemHeight: itemHeight,
    renderAhead,
    rootTagElement,
  });

  const containerStyle = isMount
    ? ({
        overflow: 'visible',
        position: 'relative',
        height: `${totalHeight}px`,
      } as const)
    : undefined;

  const innerStyle = isMount
    ? ({
        willChange: 'transform',
        transform: `translateY(${offsetY}px)`,
      } as const)
    : undefined;

  return (
    <>
      <div style={containerStyle}>
        <ul style={innerStyle}>
          {visibleList.map(({ list, key, itemProps }) => (
            <Item columns={columns} gap={itemGap} key={key} {...itemProps}>
              {list.map((_item, idx) => {
                const { _index, ...item } = _item;
                return (
                  <ItemComp
                    key={idx}
                    item={item}
                    index={_index}
                    renderItem={renderItem as any}
                  />
                );
              })}
            </Item>
          ))}
        </ul>
      </div>
    </>
  );
};

interface ItemComp<T extends object> {
  item: T;
  index: number;
  renderItem: (props: T, index: number) => JSX.Element;
}

const ItemComp = memo(
  <T extends object>({ item, index, renderItem }: ItemComp<T>) => {
    return <>{renderItem(item, index)}</>;
  },
);

const Item = ({
  columns,
  gap,
  children,
  ...props
}: {
  columns: number;
  gap: number;
  children: ReactNode;
}) => {
  return (
    <li
      {...props}
      style={{
        display: 'grid',
        gridGap: `${gap}px`,
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}>
      {children}
    </li>
  );
};
