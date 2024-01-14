import { CSSProperties, HTMLAttributes } from 'react';
import {
  DotorihamSize,
  getClassNames,
  getDataProps,
  getSize,
} from '../../utils';
import { DefaultComponentProps } from '../../utils/style-props';
import classes from './input.module.css';
import { Box } from '../box';
import { getRadius } from '../../utils/get-radius';

const cx = getClassNames(classes);

export type InputVariant = 'default' | 'filled' | 'text';

export interface InputProps
  extends DefaultComponentProps,
    HTMLAttributes<HTMLInputElement> {
  /**
   * 인풋 타입 default: default
   */
  variant?: InputVariant;
  /**
   * 인풋 사이즈 default: sm
   */
  size?: DotorihamSize;
  /**
   * 인풋 비활성화
   */
  disabled?: boolean;
  /**
   * 인풋 둥글기 default: sm
   */
  radius?: DotorihamSize | number;
}

export const Input = ({
  variant = 'default',
  size,
  radius,
  className,
  style,
  disabled,
  ...props
}: InputProps) => {
  const inputStyles = {
    '--input-height': getSize('input-height', size),
    '--input-padding-y': getSize('input-padding-y', size),
    '--input-font-size': getSize('dotoriham-font-size', size),
    '--input-border-radius': getRadius(radius),
    ...style,
  } as CSSProperties;

  return (
    <Box
      as="input"
      disabled={disabled}
      style={inputStyles}
      className={cx('root', className)}
      type="text"
      {...props}
      {...getDataProps({
        variant,
      })}
    />
  );
};
