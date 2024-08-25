import { ReactNode } from 'react';

import { AnimatePresence, motion } from '@dotoriham/animate';

import classes from './modal.module.css';
import {
  ModalTransition,
  modalTransitionMap,
  modalTransitions,
} from './modal.transition';

export interface ModalProps {
  header?: ReactNode | string;

  open?: boolean;

  onClose?: () => void;

  children: ReactNode;

  transitionVariant?: ModalTransition;
}

export const Modal = ({
  header,
  onClose,
  open,
  children,
  transitionVariant = 'popInFromBottom',
}: ModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={modalTransitionMap[transitionVariant]}
          initial="hidden"
          animate="visible"
          className={classes.root}
          onClick={onClose}
          exit="exit">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
