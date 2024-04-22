import  { ReactElement, useEffect, useState } from 'react';
import './style.css';
import { ILiteryWork, ILiteryworkToQuote } from '../../../core/models/literywork.model';
import Modal from '../Modal';
import { useBudget } from '../../../core/hooks/useBudget';
import { ButtonLiterywork } from '../../elements/Buttons';
import { useGetBook } from '../../../core/hooks/useLiteryWork';
import { getLiteryWorkById } from '../../../core/services/literywork.service';

interface ShoppingCartProps {
  shoppingCart: ILiteryworkToQuote[];
  totalItems: number;
  handleQuote: () => void;
}

const ShoppingCart = ({ shoppingCart, totalItems, handleQuote }: ShoppingCartProps): ReactElement => {
  const [budgetValue, setBudgetValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
 const { budget } = useBudget();
 const [books, setBooks] = useState<ILiteryWork[]>([]);

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

  useEffect(() => {
    const fetchBooks = async () => {
      const bookPromises = shoppingCart.map(async (item) => {
        try {
          const book = await getLiteryWorkById(item.id);
          return book;
        } catch (error) {
          console.error(error);
          return null;
        }
      });

      const fetchedBooks = await Promise.all(bookPromises);
      setBooks(fetchedBooks.filter((book) => book !== null) as ILiteryWork[]);
    };
    fetchBooks();
  }, []);

  return (
    <section className="shopping__cart">
      <h2 className="cart__title">Carrito de compras ({totalItems} libros)</h2>
      {books.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>img</th>
                <th>Título</th>
                <th>Cantidad</th>                
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td><img src={book.url} alt={book.title} className="literywork-img__cart" /></td>
                  <td>{book.title}</td>                  
                  <td>
                    {shoppingCart.find((item) => item.id === book.id)?.quantity || 0}
                  </td>                  
                 </tr>
              ))}
            </tbody>
          </table>
          <div className="table__button">
          <ButtonLiterywork title="Cotizar" onClick={handleQuote} />
          <ButtonLiterywork title="Recomendarme" onClick={handleRecommend} />
          </div>

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