import { motion, AnimatePresence } from '@dotoriham/animate';

export interface DimmedProps {
  open: boolean;
  onClick: () => void;
  opacity?: number;
}

export const Dimmed = ({ open, onClick, opacity = 0.6 }: DimmedProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity }}
          exit={{ opacity: 0 }}
          style={{
            backgroundColor: 'black',
            height: '100%',
            left: 0,
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 10,
          }}
        />
      )}
    </AnimatePresence>
  );
};
