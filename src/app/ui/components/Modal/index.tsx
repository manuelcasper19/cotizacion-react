import  { ReactElement, useState } from 'react';
import './style.css';
import Modal from './ModalGeneric';


interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (bookId: number, quantity: number) => void;
  bookId: number;
}

const ModalLiteryWork = ( { isOpen, onClose, onAddToCart, bookId }: IModalProps): ReactElement => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    onAddToCart(bookId, quantity);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2>Cantidad de libros a agregar</h2>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </Modal>
  );
};

export default ModalLiteryWork;