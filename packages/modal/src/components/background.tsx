interface BackgroundProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Background = ({ isOpen, onClick }: BackgroundProps) => {
  if (isOpen === false) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: 'black',
        bottom: 0,
        left: 0,
        opacity: isOpen ? 0.5 : 0,
        position: 'absolute',
        right: 0,
        top: 0,
        transition: 'opacity 0.2s ease-in-out',
      }}
      onClick={onClick}
    />
  );
};
