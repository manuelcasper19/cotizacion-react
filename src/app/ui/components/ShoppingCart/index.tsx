import  { ReactElement } from 'react';
import './style.css';
import { ILiteryworkToQuote } from '../../../core/models/literywork.model';

interface ShoppingCartProps {
  shoppingCart: ILiteryworkToQuote[];
  totalItems: number;
  handleQuote: () => void;
}

const ShoppingCart = ({ shoppingCart, totalItems, handleQuote }: ShoppingCartProps): ReactElement => {
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
          <button onClick={handleQuote}>Cotizar</button>
        </>
      ) : (
        <p>No hay libros en el carrito</p>
      )}
    </section>
  );
};
export default ShoppingCart;