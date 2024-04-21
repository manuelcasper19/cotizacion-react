import  { ReactElement, useState } from 'react';
import './style.css';
import { ILiteryworkToQuote } from '../../../core/models/literywork.model';
import Modal from '../Modal2';

interface ShoppingCartProps {
  shoppingCart: ILiteryworkToQuote[];
  totalItems: number;
  handleQuote: () => void;
}

const ShoppingCart = ({ shoppingCart, totalItems, handleQuote }: ShoppingCartProps): ReactElement => {
  const [budget, setBudget] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleRecommend = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setBudget('');
  };

  const handleSubmitBudget = () => {
    console.log('Enviar presupuesto al backend:', budget);
    handleCloseModal();
  };

  return (
    <section className="shopping-cart">
      <h2>Carrito de compras ({totalItems} libros)</h2>
      {shoppingCart.length > 0 ? (
        <>
          <ol>
            {shoppingCart.map((book) => (
              <li key={book.id}>
                Libro ID: {book.id} - Cantidad: {book.quantity}
              </li>
            ))}
          </ol>
          <button onClick={handleQuote}>Cotizar</button>
          <button onClick={handleRecommend}>Recomendarme</button>
          <Modal
            isOpen={showModal}
            onClose={handleCloseModal}
            onConfirm={handleSubmitBudget}
            onCancel={handleCloseModal}
            confirmText="Presupuestar"
            cancelText="Cerrar"
            >
            <div>
              <h2>Ingrese su presupuesto</h2>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Ingrese su presupuesto"
              />
            </div>
          </Modal>
        </>
      ) : (
        <p>No hay libros en el carrito</p>
      )}
    </section>
  );
};


export default ShoppingCart;