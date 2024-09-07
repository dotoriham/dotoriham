import { motion, AnimatePresence } from '@dotoriham/animate';

import { zIndex } from '../../styles/z-index';

export interface DimmedProps {
  isOpen: boolean;
  onClick: () => void;
  opacity?: number;
}

export const Dimmed = ({ isOpen, onClick, opacity = 0.6 }: DimmedProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity }}
          exit={{ opacity: 0 }}
          style={{
            backgroundColor: 'black',
            inset: 0,
            position: 'fixed',
            zIndex: zIndex.dimmed,
          }}
        />
      )}
    </AnimatePresence>
  );
};
