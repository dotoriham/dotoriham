import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { getClassNames } from '../../utils';
import { DefaultComponentProps } from '../../utils/style-props';
import classes from './flex.module.css';

const cx = getClassNames(classes);

interface FlexProps
  extends DefaultComponentProps,
    HTMLAttributes<HTMLDivElement> {
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
  as,
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
  const Element = as || 'div';

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
    <Element style={flexStyles} className={cx('root', className)} {...rest}>
      {children}
    </Element>
  );
};
