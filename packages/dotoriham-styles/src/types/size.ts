export type DotorihamSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type DotorihamNumberSize = DotorihamSize | number | (string & {});
export type DotorihamSizes = Record<DotorihamSize, string>;
