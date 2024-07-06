import { useToggle } from '@dotoriham/hooks';

export const usePopover = () => {
  const [isOpen, toggle] = useToggle();

  return {
    close: () => toggle(false),
    isOpen,
    open: () => toggle(true),
  };
};
