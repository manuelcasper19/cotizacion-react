import  { ReactElement } from 'react';
import './style.css';
import { useShoppingCart } from '../../../core/hooks/useShoppingCart';


const ShoppingCart = (): ReactElement => {
  const { shoppingCart, handleQuote, getTotalItems } = useShoppingCart();
  return (
    <section>
      <h2>Carrito de compras ({getTotalItems()} libros)</h2>
      {shoppingCart.length > 0 ? (
        <ul>
          {shoppingCart.map((book) => (
            <li key={book.id}>
              Libro ID: {book.id} - Cantidad: {book.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay libros en el carrito</p>
      )}
      <button onClick={handleQuote}>Cotizar</button>
    </section>
  );
};
  export default ShoppingCart;