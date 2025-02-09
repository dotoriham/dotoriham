import classes from './bottomsheet.module.css';
import { getClassNames } from '../../utils';

const cx = getClassNames(classes);

export const Bottomsheet = () => {
  return <div className={cx('root')}>Bottomsheet</div>;
};
