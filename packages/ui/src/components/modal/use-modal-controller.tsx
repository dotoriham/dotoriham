import { useUncontrolled } from '../../hooks';

interface UseModalControllerProps {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onClose?: () => void;
}

export const useModalController = ({
  defaultIsOpen,
  isOpen: _isOpen,
  onClose: _onClose,
}: UseModalControllerProps) => {
  const [isOpen, onChange] = useUncontrolled({
    defaultValue: defaultIsOpen,
    onChange: _onClose,
    value: _isOpen,
  });

  return {
    isOpen,
    onChange,
  };
};
