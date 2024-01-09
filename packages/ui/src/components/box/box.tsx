import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { DefaultComponentProps } from '../../utils/style-props';
import { SystemProps, extractSystemStyles } from './box.utils';
import { createPolymorphicComponent } from '../../utils';

export interface BoxProps extends SystemProps, DefaultComponentProps {
  children?: ReactNode;
}

const _Box = ({
  children,
  as,
  style,
  className,
  ...rest
}: BoxProps & { as: any }) => {
  const Element = as || 'div';

  const { systemStyles, ...props } = extractSystemStyles(rest);

  const boxStyles = {
    ...style,
    ...systemStyles,
  } as CSSProperties;

  return (
    <Element className={className} style={boxStyles} {...props}>
      {children}
    </Element>
  );
};

export const Box = createPolymorphicComponent<'div', BoxProps>(_Box);
