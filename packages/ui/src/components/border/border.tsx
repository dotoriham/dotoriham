import { CSSProperties } from 'react';

import classes from './border.module.css';
import { DotorihamColorKeys, getAdaptiveColorVariable } from '../../styles';
import { getClassNames } from '../../utils';

const cx = getClassNames(classes);

interface BorderProps {
  size?: number | `${number}px`;
  color?: DotorihamColorKeys | (string & {});
}

const getBorderSize = (size: number | `${number}px`) => {
  if (typeof size === 'number') {
    return `${size}px`;
  }
  return size;
};

export const Border = ({ color = 'black', size = 1 }: BorderProps) => {
  const borderStyles = {
    '--border-color': getAdaptiveColorVariable(color),
    '--border-size': getBorderSize(size),
  } as CSSProperties;

  return <div style={borderStyles} className={cx('root')} />;
};
