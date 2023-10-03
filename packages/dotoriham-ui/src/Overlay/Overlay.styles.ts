import { css } from '@emotion/react';
import { OverlayProps } from './Overlay';
import {
  extractSystemStyles,
  useDotorihamTheme,
  Theme,
} from '@dotoriham/styles';
import { CSSProperties } from 'react';

const overlayStyle = (
  opacity: number,
  color: CSSProperties['backgroundColor'],
  zIndex: CSSProperties['zIndex'],
) => css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex};
  width: 100%;
  height: 100%;
  background-color: ${color};
  opacity: ${opacity};
`;

export const createStyles = (props: OverlayProps) => {
  const { theme } = useDotorihamTheme();

  const {
    opacity = 0.5,
    color = 'black',
    zIndex = theme.zIndex.overlay,
    ...others
  } = props;

  const { systemStyles, rest } = extractSystemStyles(others);
  const styles = [systemStyles, overlayStyle(opacity, color, zIndex)];

  return {
    styles,
    ...rest,
  };
};
