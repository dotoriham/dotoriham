export type ColorVariant<
  C extends string,
  V extends string | number,
> = `${C}_${V}`;

export const makeVariant = <K extends string, O extends Record<string, string>>(
  color: K,
  colorSet: O,
) => {
  return Object.entries(colorSet).reduce((acc, [v, code]) => {
    acc[`${color}_${v}`] = code as typeof colorSet[keyof typeof v & string];
    return acc;
    // TODO make types
    // }, {} as { [KEY in ColorVariant<K, keyof O>]: O[keyof O] });
  }, {} as { [KEY in ColorVariant<K, keyof O & string>]: string });
};
