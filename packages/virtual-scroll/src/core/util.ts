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
