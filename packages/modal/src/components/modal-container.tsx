import { ReactNode } from 'react';

import { AnimatePresence, motion } from '@dotoriham/animate';

import classes from './modal.module.css';

interface ModalContainerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalContainer = ({
  children,
  isOpen,
  onClose,
}: ModalContainerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={{
            exit: {
              opacity: 0,
              y: '100vh',
            },
            hidden: {
              opacity: 0,
              y: '100vh',
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.5,
                type: 'spring',
              },
              y: '0vh',
            },
          }}
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
