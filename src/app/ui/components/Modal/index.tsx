import  { ReactNode } from 'react';
import './style.css';
import { ButtonLiterywork } from '../../elements/Buttons';


interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  children: ReactNode;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
  children,
}) => {
  if (!isOpen) return null;
  const handleOutsideClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog open={isOpen} onClick={handleOutsideClick} className="modal__overlay">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>
        {children}
        <div className="modal__buttons">
        <ButtonLiterywork title={confirmText} onClick={onConfirm} />
        <ButtonLiterywork title={cancelText} onClick={onCancel} />
        </div>
      </div>
    </dialog>
  );
};

export default Modal;

