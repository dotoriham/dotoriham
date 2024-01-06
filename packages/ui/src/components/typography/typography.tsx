import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { DotorihamTypography } from '../../styles/typography';
import { getClassNames } from '../../utils';
import { DefaultComponentProps } from '../../utils/style-props';
import classes from './typography.module.css';
import { DotorihamColorKeys, getColorVariable } from '../../styles';

const cx = getClassNames(classes);

interface TypographyProps
  extends DefaultComponentProps,
    HTMLAttributes<HTMLParagraphElement> {
  type: DotorihamTypography;
  children: ReactNode;
  color?: DotorihamColorKeys | (string & {});
}

export const Typography = ({
  type,
  className,
  children,
  style,
  color = 'black',
  as,
  ...rest
}: TypographyProps) => {
  const Element = as || 'p';

  const typographyStyles = {
    '--typography-color': getColorVariable(color),
    ...style,
  } as CSSProperties;

  return (
    <Element
      style={typographyStyles}
      className={cx('root', type, className)}
      {...rest}>
      {children}
    </Element>
  );
};
