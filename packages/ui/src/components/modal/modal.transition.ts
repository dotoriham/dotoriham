import { Variants } from '@dotoriham/animate';

export type ModalTransition = 'popInFromBottom' | 'fadeIn';

export const modalTransitionMap: Record<ModalTransition, Variants> = {
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
      transition: {
        duration: 0.3,
      },
      x: '-50%',
      y: '100vh',
    },
    hidden: {
      opacity: 0,
      x: '-50%',
      y: '100vh',
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.4,
        type: 'spring',
      },
      x: '-50%',
      y: '-50%',
    },
  },
};
