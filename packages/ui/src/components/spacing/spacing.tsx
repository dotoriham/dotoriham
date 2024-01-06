import { CSSProperties } from 'react';
import { getClassNames } from '../../utils';
import classes from './spacing.module.css';

const cx = getClassNames(classes);

interface SpacingProps {
  size: number;
}

export const Spacing = ({ size }: SpacingProps) => {
  const spacingStyles = {
    '--spacing-size': `${size}px`,
  } as CSSProperties;

  return <div style={spacingStyles} className={cx('root')} />;
};
