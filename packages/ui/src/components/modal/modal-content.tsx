import { ReactNode } from 'react';

import { Animate } from '@dotoriham/animate';

import { useModalContext } from './modal-context';
import classes from './modal.module.css';
import { modalTransitionMap } from './modal.transition';
import { zIndex } from '../../styles/z-index';
import { getClassNames } from '../../utils';
import { Popover } from '../popover';

const cx = getClassNames(classes);

interface ModalContentProps {
  children: ReactNode;
}

export const ModalContent = ({ children }: ModalContentProps) => {
  const ctx = useModalContext();

  return (
    <Popover.Content>
      <Animate
        variants={modalTransitionMap[ctx.transitionVariant]}
        initial="hidden"
        animate="visible"
        className={cx('modal-content')}
        style={{
          zIndex: zIndex.modal,
        }}
        onClick={() => ctx.onChange(false)}
        exit="exit">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}>
          {children}
        </div>
      </Animate>
    </Popover.Content>
  );
};
