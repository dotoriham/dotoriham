import { ReactNode } from 'react';

import { AnimatePresence, motion } from '@dotoriham/animate';

import { ModalVariantType, modalVariants } from './modal-utils';
import classes from './modal.module.css';

export interface ModalContainerProps {
  children: ReactNode;
  /**
   * modal open 여부
   */
  isOpen: boolean;
  /**
   * modal close 함수
   */
  onClose: () => void;
  /**
   * modal animation variant
   * @default 'popInFromBottom'
   */
  variant?: ModalVariantType;
}

export const ModalContainer = ({
  children,
  isOpen,
  onClose,
  variant = 'popInFromBottom',
}: ModalContainerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants[variant]}
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
