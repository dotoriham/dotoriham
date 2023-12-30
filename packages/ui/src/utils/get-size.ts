export type DotorihamSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const getSize = (prefix: string, size: unknown) => {
  if (size === undefined) {
    return undefined;
  }

  if (typeof size === 'number') {
    return `${size}px`;
  }

  return `var(--${prefix}-${size})`;
};
