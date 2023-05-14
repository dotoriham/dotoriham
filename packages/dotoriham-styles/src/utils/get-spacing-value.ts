import { DotorihamNumberSize } from '../types';

export function getSpacingValue(size: number | string): DotorihamNumberSize {
  if (!isNaN(Number(size))) {
    return `${size}px`;
  }
  return size;
}
