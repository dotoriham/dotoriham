import { DotorihamColors } from '../../styles';
import { ButtonVariant } from './button';

export function computedButtonColor(
  variant: ButtonVariant = 'filled',
  color: DotorihamColors = 'green',
) {
  switch (variant) {
    case 'filled':
      return {
        '--button-bg': `var(--dotoriham-color-${color}-${variant})`,
        '--button-bd': `1px solid transparent`,
        '--button-color': `var(--dotoriham-color-white)`,
        '--button-hover': `var(--dotoriham-color-${color}-${variant}-hover)`,
      };
    case 'light':
      return {
        '--button-bg': `var(--dotoriham-color-${color}-${variant})`,
        '--button-bd': `1px solid transparent`,
        '--button-color': `var(--dotoriham-color-${color}-${variant}-color)`,
        '--button-hover': `var(--dotoriham-color-${color}-${variant}-hover)`,
      };
    case 'outline':
      return {
        '--button-bg': `transparent`,
        '--button-bd': `1px solid var(--dotoriham-color-${color}-${variant})`,
        '--button-color': `var(--dotoriham-color-${color}-${variant})`,
        '--button-hover': `var(--dotoriham-color-${color}-${variant}-hover)`,
      };
    case 'text':
      return {
        '--button-bg': `transparent`,
        '--button-bd': `1px solid transparent`,
        '--button-color': `var(--dotoriham-color-${color}-light-color)`,
        '--button-hover': `var(--dotoriham-color-${color}-light-hover)`,
      };
  }
}
