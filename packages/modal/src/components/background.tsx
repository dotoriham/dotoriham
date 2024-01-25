import { motion } from '@dotoriham/animate';

interface BackgroundProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Background = ({ isOpen, onClick }: BackgroundProps) => {
  if (isOpen === false) {
    return null;
  }

  return (
    <motion.div
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
  );
};
