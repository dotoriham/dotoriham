export function chunk<T>(arr: T[], size: number): (T & { _index: number })[][] {
  const chunkedArr: (T & { _index: number })[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunkedItem = arr.slice(i, i + size).map((item) => ({
      ...item,
      _index: i,
    }));
    chunkedArr.push(chunkedItem);
  }
  return chunkedArr;
}
