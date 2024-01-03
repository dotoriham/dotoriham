import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import classes from './button.module.css';
import {
  DotorihamSize,
  getClassNames,
  getDataProps,
  getSize,
} from '../../utils';
import { DotorihamColors } from '../../styles';
import { computedButtonColor } from './button.utils';
import { getRadius } from '../../utils/get-radius';

const cx = getClassNames(classes);

export type ButtonVariant = 'filled' | 'light' | 'outline' | 'text';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
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
  className?: string;
}

export const Button = ({
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
    '--button-radius': radius === undefined ? undefined : getRadius(radius),
    ...style,
  } as CSSProperties;

  return (
    <button
      className={cx('root', className)}
      style={buttonStyles}
      {...getDataProps({
        loading: true,
        variant,
        full: fullWidth,
      })}
      {...props}>
      {children}
    </button>
  );
};
