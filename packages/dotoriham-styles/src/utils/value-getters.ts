import { getColorValue } from './get-color-value';
import { getDefaultValue } from './get-default-value';
import { getSpacingValue } from './get-spacing-value';

export const valueGetters = {
  color: getColorValue,
  default: getDefaultValue,
  spacing: getSpacingValue,
};

export type SystemValueType = keyof typeof valueGetters;
