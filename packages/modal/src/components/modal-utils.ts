import { Variants } from '@dotoriham/animate';

export type ModalVariantType = 'popInFromBottom' | 'fadeIn';

export const modalVariants: Record<ModalVariantType, Variants> = {
  fadeIn: {
    exit: {
      opacity: 0,
    },
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        type: 'spring',
      },
    },
  },
  popInFromBottom: {
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
      y: '0vh',
    },
  },
};
