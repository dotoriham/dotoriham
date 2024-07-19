import { CSSProperties, ReactNode } from 'react';

import classes from './flex.module.css';
import { createPolymorphicComponent, getClassNames } from '../../utils';
import { Box, BoxProps } from '../box';

const cx = getClassNames(classes);

export interface FlexProps extends BoxProps {
  children?: ReactNode;

  gap?: CSSProperties['gap'];

  align?: CSSProperties['alignItems'];

  justify?: CSSProperties['justifyContent'];

  wrap?: CSSProperties['flexWrap'];

  direction?: CSSProperties['flexDirection'];
}

const _Flex = ({
  children,
  className,
  gap,
  align,
  justify,
  wrap,
  direction,
  style,
  ...rest
}: FlexProps) => {
  const flexStyles = {
    '--flex-align': align,
    '--flex-direction': direction,
    '--flex-gap': `${gap}px`,
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

export const Flex = createPolymorphicComponent<'div', FlexProps>(_Flex);
