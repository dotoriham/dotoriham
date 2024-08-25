import { ReactNode } from 'react';

import { AnimatePresence, motion } from '@dotoriham/animate';

import classes from './modal.module.css';
import { ModalTransition, modalTransitionMap } from './modal.transition';
import { Dimmed } from '../dimmed';
import { Popover } from '../popover';

export interface ModalProps {
  header?: ReactNode | string;

  isOpen: boolean;

  onClose: () => void;

  children: ReactNode;

  transitionVariant?: ModalTransition;
}

export const Modal = ({
  header,
  onClose,
  isOpen,
  children,
  transitionVariant = 'popInFromBottom',
}: ModalProps) => {
  return (
    <>
      <Popover>
        <AnimatePresence>
          {isOpen && (
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
      </Popover>
      <Dimmed isOpen={isOpen} onClick={onClose} />
    </>
  );
};
