import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { DotorihamTypography } from '../../styles/typography';
import { getClassNames } from '../../utils';
import { DefaultComponentProps } from '../../utils/style-props';
import classes from './typography.module.css';
import { DotorihamColorKeys, getColorVariable } from '../../styles';
import { Box, BoxProps } from '../box';

const cx = getClassNames(classes);

interface TypographyProps extends BoxProps {
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
  ...rest
}: TypographyProps) => {
  const typographyStyles = {
    '--typography-color': getColorVariable(color),
    ...style,
  } as CSSProperties;

  return (
    <Box
      as="p"
      style={typographyStyles}
      className={cx('root', type, className)}
      {...rest}>
      {children}
    </Box>
  );
};
