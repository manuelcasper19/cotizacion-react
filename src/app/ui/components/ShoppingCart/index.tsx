import  { ReactElement, useState } from 'react';
import './style.css';
import { ILiteryworkToQuote } from '../../../core/models/literywork.model';
import Modal from '../Modal';
import { useBudget } from '../../../core/hooks/useBudget';
import { ButtonLiterywork } from '../../elements/Buttons';

interface ShoppingCartProps {
  shoppingCart: ILiteryworkToQuote[];
  totalItems: number;
  handleQuote: () => void;
}

const ShoppingCart = ({ shoppingCart, totalItems, handleQuote }: ShoppingCartProps): ReactElement => {
  const [budgetValue, setBudgetValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
 const { budget } = useBudget();

  const handleRecommend = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setBudgetValue(0);
  };

  const handleSubmitBudget = () => {
    budget(shoppingCart, budgetValue);
    handleCloseModal();
  };

  return (
    <section className="shopping__cart">
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
          <ButtonLiterywork title="Cotizar" onClick={handleQuote} />
          <ButtonLiterywork title="Recomendarme" onClick={handleRecommend} />
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
                className="modal__input"
                type="number"
                value={budgetValue}
                onChange={(e) => setBudgetValue(parseInt(e.target.value))}
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