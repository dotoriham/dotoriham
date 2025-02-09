import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import classes from './button.module.css';
import { computedButtonColor } from './button.utils';
import { DotorihamColors } from '../../styles';
import {
  DotorihamSize,
  createPolymorphicComponent,
  getClassNames,
  getDataProps,
  getSize,
} from '../../utils';
import { getRadius } from '../../utils/get-radius';
import { DefaultComponentProps } from '../../utils/style-props';
import { Box } from '../box';

const cx = getClassNames(classes);

export type ButtonVariant = 'filled' | 'light' | 'outline' | 'text';

export interface ButtonProps
  extends DefaultComponentProps,
    HTMLAttributes<HTMLButtonElement> {
  /**
   *  버튼 내용
   */
  children: ReactNode;
  /**
   * 버튼 가로 100% default: false
   */
  fullWidth?: boolean;
  /**
   * 버튼 크기 default: sm
   */
  size?: DotorihamSize | `compact-${DotorihamSize}` | (string & {});
  /**
   * 버튼 타입 default: filled
   */
  variant?: ButtonVariant;
  /**
   * 버튼 색상 default: green
   */
  color?: DotorihamColors;
  /**
   * 버튼 둥글기
   */
  radius?: DotorihamSize | number;
}

const _Button = ({
  children,
  fullWidth = false,
  color = 'green',
  variant = 'filled',
  radius,
  size = 'sm',
  className,
  style,
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    '--button-height': getSize('button-height', size),
    '--button-padding-x': getSize('button-padding-x', size),
    ...computedButtonColor(variant, color),
    '--button-font-size': getSize('dotoriham-font-size', size),
    '--button-radius': radius === undefined ? undefined : getRadius(radius),
    ...style,
  } as CSSProperties;

  return (
    <Box
      as="button"
      className={cx('root', className)}
      style={buttonStyles}
      {...getDataProps({
        full: fullWidth,
        loading: true,
        variant,
      })}
      {...props}>
      {children}
    </Box>
  );
};

export const Button = createPolymorphicComponent<'button', ButtonProps>(
  _Button,
);
