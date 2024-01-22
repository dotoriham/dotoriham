import { CSSProperties, ReactNode } from 'react';
import { DotorihamTypography } from '../../styles/typography';
import { createPolymorphicComponent, getClassNames } from '../../utils';
import classes from './typography.module.css';
import { DotorihamColorKeys, getAdaptiveColorVariable } from '../../styles';
import { Box, BoxProps } from '../box';

const cx = getClassNames(classes);

export interface TypographyProps extends BoxProps {
  type: DotorihamTypography;
  children: ReactNode;
  color?: DotorihamColorKeys | (string & {});
}

const _Typography = ({
  type,
  className,
  children,
  style,
  color = 'black',
  ...rest
}: TypographyProps) => {
  const typographyStyles = {
    '--typography-color': getAdaptiveColorVariable(color),
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

export const Typography = createPolymorphicComponent<'p', TypographyProps>(
  _Typography,
);
