import { CSSProperties, HTMLAttributes } from 'react';
import { DotorihamSize, getClassNames } from '../../utils';
import { DefaultComponentProps } from '../../utils/style-props';
import classes from './input.module.css';
import { Box } from '../box';

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
   * 인풋 둥글기 default: sm
   */
  radius?: DotorihamSize | number;
}

export const Input = ({
  variant,
  size,
  radius,
  className,
  style,
  ...props
}: InputProps) => {
  const inputStyles = {
    ...style,
  } as CSSProperties;

  return (
    <Box
      as="input"
      style={inputStyles}
      className={cx('root', className)}
      type="text"
      {...props}
    />
  );
};
