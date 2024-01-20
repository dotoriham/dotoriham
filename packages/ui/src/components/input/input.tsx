import { CSSProperties } from 'react';
import {
  DotorihamSize,
  createPolymorphicComponent,
  getClassNames,
  getDataProps,
  getSize,
} from '../../utils';
import classes from './input.module.css';
import { Box, BoxProps } from '../box';
import { getRadius } from '../../utils/get-radius';
import { extractSystemStyles } from '../box/box.utils';

const cx = getClassNames(classes);

export type InputVariant = 'default' | 'filled' | 'text';

export interface InputProps extends BoxProps {
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
  /**
   * 오른쪽 영역에 보여질 컴포넌트
   */
  rightComponent?: JSX.Element;
  /**
   * 왼쪽 영역에 보여질 컴포넌트
   */
  leftComponent?: JSX.Element;
}

const _Input = ({
  variant = 'default',
  size,
  radius,
  className,
  style,
  rightComponent,
  leftComponent,
  disabled,
  ...rest
}: InputProps) => {
  const { systemStyles, ...props } = extractSystemStyles(rest);

  const inputStyles = {
    '--input-height': getSize('input-height', size),
    '--input-padding-y': getSize('input-padding-y', size),
    '--input-font-size': getSize('dotoriham-font-size', size),
    '--input-border-radius': getRadius(radius),
    ...systemStyles,
    ...style,
  } as CSSProperties;

  return (
    <Box
      className={cx('root', className)}
      style={inputStyles}
      {...getDataProps({
        variant,
        disabled,
      })}>
      {leftComponent && (
        <Box className={cx('left-component')}>{leftComponent}</Box>
      )}

      <Box as="input" type="text" {...props} disabled={disabled} />

      {rightComponent && (
        <Box className={cx('right-component')}>{rightComponent}</Box>
      )}
    </Box>
  );
};

export const Input = createPolymorphicComponent<'input', InputProps>(_Input);
