import { CSSProperties, ReactNode } from 'react';

import classes from './typography.module.css';
import { DotorihamColorKeys, getAdaptiveColorVariable } from '../../styles';
import { DotorihamTypography } from '../../styles/typography';
import { createPolymorphicComponent, getClassNames } from '../../utils';
import { Box, BoxProps } from '../box';

const cx = getClassNames(classes);

type Weight = 'regular' | 'medium' | 'bold';

export interface TypographyProps extends BoxProps {
  type: DotorihamTypography;
  weight?: Weight | (number & {});
  children: ReactNode;
  color?: DotorihamColorKeys | (string & {});
}

const _Typography = ({
  type,
  className,
  children,
  style,
  weight = 'regular',
  color = 'black',
  ...rest
}: TypographyProps) => {
  const typographyStyles = {
    '--typography-color': getAdaptiveColorVariable(color),
    '--typography-weight':
      typeof weight === 'string' ? weightMap[weight] : weight,
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

const weightMap: Record<Weight, number> = {
  bold: 700,
  medium: 500,
  regular: 400,
};
