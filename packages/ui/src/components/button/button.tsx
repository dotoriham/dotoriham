import { ReactNode } from 'react';
import { getClassNames, getDataProps } from '../../styles';
import styles from './button.module.css';

const cx = getClassNames(styles);

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className={cx('root')}
      {...getDataProps({
        loading: true,
      })}>
      {children}
    </button>
  );
};
