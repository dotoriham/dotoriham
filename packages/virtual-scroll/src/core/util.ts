type ChunkResult<T> = (T & { _index: number })[][];

export function chunk<T>(arr: T[], size: number): ChunkResult<T> {
  const chunkedArr: ChunkResult<T> = [];
  let index = 0;

  while (index < arr.length) {
    const chunkedItem = arr.slice(index, index + size).map((item, i) => ({
      ...item,
      _index: index + i,
    }));
    chunkedArr.push(chunkedItem);
    index += size;
  }

  return chunkedArr;
}

export function throttle(callback: (...args: any) => any, wait: number) {
  let waiting = false;
  return function (this: any, ...args: any[]) {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, wait);
    }
  };
}

export function findStartNode(
  scrollTop: number,
  nodePositions: number[],
  itemCount: number,
) {
  let start = 0;
  let end = itemCount || 0;

  while (end - start > 1) {
    const middle = Math.floor((start + end) / 2);

    if (nodePositions[middle] <= scrollTop) {
      start = middle;
    } else {
      end = middle;
    }
  }

  return end === itemCount ? end - 1 : end;
}

export function findEndNode(
  nodePositions: number[],
  startNode: number,
  itemCount: number,
  height: number,
) {
  let endNode = startNode;

  while (
    endNode < itemCount &&
    nodePositions[endNode] <= nodePositions[startNode] + height
  ) {
    endNode++;
  }

  return endNode;
}
