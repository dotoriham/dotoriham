import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { getClassNames } from '../../utils';
import { DefaultComponentProps } from '../../utils/style-props';
import classes from './flex.module.css';
import { Box, BoxProps } from '../box';

const cx = getClassNames(classes);

export interface FlexProps extends BoxProps {
  children?: ReactNode;

  gap?: CSSProperties['gap'];

  rowGap?: CSSProperties['rowGap'];

  columnGap?: CSSProperties['columnGap'];

  align?: CSSProperties['alignItems'];

  justify?: CSSProperties['justifyContent'];

  wrap?: CSSProperties['flexWrap'];

  direction?: CSSProperties['flexDirection'];
}

export const Flex = ({
  children,
  className,
  gap,
  rowGap,
  columnGap,
  align,
  justify,
  wrap,
  direction,
  style,
  ...rest
}: FlexProps) => {
  const flexStyles = {
    '--flex-direction': direction,
    '--flex-gap': gap,
    '--flex-row-gap': rowGap,
    '--flex-column-gap': columnGap,
    '--flex-align': align,
    '--flex-justify': justify,
    '--flex-wrap': wrap,
    ...style,
  } as CSSProperties;

  return (
    <Box
      as="div"
      style={flexStyles}
      className={cx('root', className)}
      {...rest}>
      {children}
    </Box>
  );
};
