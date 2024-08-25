import { ReactNode } from 'react';

import { motion } from '@dotoriham/animate';

import { useModalContext } from './modal-context';
import classes from './modal.module.css';
import { modalTransitionMap } from './modal.transition';
import { Popover } from '../popover';

interface ModalContentProps {
  children: ReactNode;
}

export const ModalContent = ({ children }: ModalContentProps) => {
  const ctx = useModalContext();

  return (
    <Popover.Content>
      <motion.div
        variants={modalTransitionMap[ctx.transitionVariant]}
        initial="hidden"
        animate="visible"
        className={classes['modal-content']}
        onClick={() => ctx.onChange(false)}
        exit="exit">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}>
          {children}
        </div>
      </motion.div>
    </Popover.Content>
  );
};
