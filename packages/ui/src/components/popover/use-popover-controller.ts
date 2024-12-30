import { useRef } from 'react';

import { useUncontrolled } from '../../hooks';

interface UsePopoverControllerProps {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onClose?: () => void;
}

export const usePopoverController = ({
  defaultIsOpen,
  isOpen: _isOpen,
  onClose: _onClose,
}: UsePopoverControllerProps) => {
  const [isOpen, onChange] = useUncontrolled({
    defaultValue: defaultIsOpen,
    onChange: _onClose,
    value: _isOpen,
  });

  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return {
    contentRef,
    isOpen,
    onChange,
    targetRef,
  };
};
