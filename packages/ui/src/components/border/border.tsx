import { CSSProperties } from 'react';
import { DotorihamColorKeys, getColorVariable } from '../../styles';
import { getClassNames } from '../../utils';
import classes from './border.module.css';

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
    '--border-size': getBorderSize(size),
    '--border-color': getColorVariable(color),
  } as CSSProperties;

  return <div style={borderStyles} className={cx('root')} />;
};
