import { colors } from './colors';
import { fontSize, spacing, radius } from './size';
import { zIndex } from './zindex';

export const theme = {
  colors,
  fontSize,
  radius,
  spacing,
  zIndex,
} as const;

export type Theme = typeof theme;
