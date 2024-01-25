import { ReactNode } from 'react';

import { AnimatePresence, motion } from '@dotoriham/animate';

interface ModalContainerProps {
  children: ReactNode;
  isOpen: boolean;
}

const slideUpToCenter = {
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
    y: '40vh',
  },
};

export const ModalContainer = ({ children, isOpen }: ModalContainerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal"
          variants={slideUpToCenter}
          initial="hidden"
          animate="visible"
          exit="exit">
          <div
            style={{
              bottom: 0,
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
            }}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
