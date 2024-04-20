import  { ReactElement, useState } from 'react';
import './style.css';


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

 return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Cantidad de libros a agregar</h2>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  ) : null;
};
export default ModalLiteryWork;