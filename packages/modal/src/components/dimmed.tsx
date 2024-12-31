import { Animate, AnimatePresence } from '@dotoriham/animate';

interface DimmedProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Dimmed = ({ isOpen, onClick }: DimmedProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Animate
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
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
