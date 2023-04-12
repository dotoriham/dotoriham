export type DotorihamSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
export type DotorihamNumberSize = DotorihamSize | number | (string & {});
export type DotorihamSizes = Record<DotorihamSize, string>;
