import  { ReactNode } from 'react';
import './style.css';


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
    <dialog open={isOpen} onClick={handleOutsideClick} className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        {children}
        <div className="modal-buttons">
          <button onClick={onConfirm}>{confirmText}</button>
          <button onClick={onCancel}>{cancelText}</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;

