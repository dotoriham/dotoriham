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
          variants={slideUpToCenter}
          initial="hidden"
          animate="visible"
          style={{
            position: 'absolute',
            zIndex: 50, // TODO z-index를 상수로 관리 + 해당 코드를 module css로 분리
          }}
          exit="exit">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
