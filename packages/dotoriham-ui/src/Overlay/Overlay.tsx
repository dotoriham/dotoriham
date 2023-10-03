import { CSSProperties, ReactNode } from 'react';
import { DefaultProps } from '@dotoriham/styles';
import { createStyles } from './Overlay.styles';

export interface OverlayProps extends DefaultProps {
  opacity?: number;
  color?: CSSProperties['backgroundColor'];
  zIndex?: CSSProperties['zIndex'];
  onClick?: () => void;
  visible?: boolean;
  children?: ReactNode;
}

export const Overlay = (props: OverlayProps) => {
  const { styles, children, as, visible, ...rest } = createStyles(props);
  const Element = as || 'div';

  if (!visible) {
    return null;
  }

  return (
    <Element css={styles} {...rest}>
      {children}
    </Element>
  );
};
