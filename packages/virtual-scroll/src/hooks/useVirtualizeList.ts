'use client';

import { useEffect, useMemo } from 'react';

import useScrollAware from './useScrollAware';
import { chunk, findEndNode, findStartNode } from '../core';

export interface useVirtualizeProps<T> {
  data: T[];
  defaultItemHeight: number;
  rootTagElement?: Element;
  renderAhead?: number;
  columns: number;
}

const heightMap = new Map<string, number>();
const makeVirtualKey = (index: number) => `virtual-key-${index}`;
const containerHeight =
  typeof window !== 'undefined' ? window.innerHeight : 1200;

export const useVirtualizeList = <T extends unknown>({
  data: _data,
  defaultItemHeight,
  renderAhead = 20,
  columns,
  rootTagElement,
}: useVirtualizeProps<T>) => {
  const heights = Array.from(heightMap.values());
  const data = useMemo(
    () =>
      chunk(_data, columns).map((item, index) => ({
        key: makeVirtualKey(index),
        list: item,
        itemProps: {
          'data-index': makeVirtualKey(index),
        },
      })),
    [_data, columns],
  );
  const itemCount = data.length;

  const childPositions = useMemo(() => {
    const results = [0];
    for (let i = 1; i < itemCount; i++) {
      results.push(results[i - 1] + (heights[i - 1] ?? defaultItemHeight));
    }
    return results;
  }, [heights, itemCount, defaultItemHeight]);

  const { scrollTop } = useScrollAware(rootTagElement);
  const totalHeight =
    childPositions[itemCount - 1] + heights[heights.length - 1] || 0;

  const firstVisibleNode = useMemo(
    () => findStartNode(scrollTop, childPositions, itemCount),
    [scrollTop, childPositions, itemCount],
  );

  const lastVisibleNode = useMemo(
    () =>
      findEndNode(childPositions, firstVisibleNode, itemCount, containerHeight),
    [childPositions, firstVisibleNode, itemCount, containerHeight],
  );

  const startNode = Math.max(0, firstVisibleNode - renderAhead);
  const endNode = Math.min(itemCount, lastVisibleNode + renderAhead);
  const offsetY = childPositions[startNode];

  const visibleList = useMemo(
    () => data.slice(startNode, endNode),
    [data, endNode, startNode],
  );

  useEffect(() => {
    visibleList.forEach(({ key }) => {
      const vi = document.querySelector(`[data-index="${key}"]`);
      const viHeight = vi?.getBoundingClientRect().height ?? 0;
      const floorHeight = Math.floor(viHeight);
      heightMap.set(key, floorHeight);
    });
  }, [visibleList]);

  return {
    totalHeight,
    offsetY,
    visibleList,
  };
};
