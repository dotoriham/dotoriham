import { CSSProperties, ReactNode } from 'react';
import { getClassNames, getDataProps } from '../../styles';
import classes from './button.module.css';
import { Size, getSize } from '../../styles/get-size';

const cx = getClassNames(classes);

type ButtonVariant = 'filled' | 'light' | 'outline' | 'text';

interface ButtonProps {
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
  size?: Size;
  /**
   * 버튼 타입
   */
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  fullWidth = false,
  variant = 'filled',
  size = 'sm',
}: ButtonProps) => {
  const buttonStyles = {
    '--button-height': getSize('button-height', size),
    '--button-padding-x': getSize('button-padding-x', size),
    // '--button-radius': radius === undefined ? undefined : getRadius(radius),
    // '--button-bg': color || variant ? colors.background : undefined,
    // '--button-hover': color || variant ? colors.hover : undefined,
    // '--button-color': color || variant ? colors.color : undefined,
    // '--button-bd': color || variant ? colors.border : undefined,
    // '--button-hover-color': color || variant ? colors.hoverColor : undefined,
  } as CSSProperties;

  return (
    <button
      className={cx('root')}
      style={buttonStyles}
      {...getDataProps({
        loading: true,
        variant,
        full: fullWidth,
      })}>
      {children}
    </button>
  );
};
