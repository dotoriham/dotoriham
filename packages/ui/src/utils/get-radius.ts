import { getSize } from './get-size';

export function getRadius(size: unknown) {
  if (size === undefined) {
    return 'var(--dotoriham-radius-default)';
  }

  return getSize('dotoriham-radius', size);
}
