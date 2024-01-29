import { Dimmed } from './dimmed';
import { ModalContainer, ModalContainerProps } from './modal-container';

type ModalProps = ModalContainerProps;

export const Modal = ({ isOpen, children, onClose, ...rest }: ModalProps) => {
  return (
    <>
      <ModalContainer isOpen={isOpen} onClose={onClose} {...rest}>
        {children}
      </ModalContainer>
      <Dimmed isOpen={isOpen} onClick={onClose} />
    </>
  );
};
