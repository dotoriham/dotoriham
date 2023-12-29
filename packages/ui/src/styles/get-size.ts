export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const getSize = (prefix: string, size: Size) => {
  return `var(--${prefix}-${size})`;
};
