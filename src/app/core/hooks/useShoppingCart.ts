import { useContext, useState } from 'react';
import { ILiteryworkToQuote } from '../models/literywork.model';
import { AppContext } from '../states/Appcontext';
import { submitQuote } from '../services/quotion-literywork.service';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<ILiteryworkToQuote[]>([]);
    const { dispatch } = useContext(AppContext);
  
    const addToCart = (bookId: number, quantity: number) => {
      setShoppingCart([...shoppingCart, { id: bookId, quantity }]);
    };
  
    const handleQuote = async () => {
      try {
        const response = await submitQuote(shoppingCart);
        dispatch({ type: 'QUOTE_SUBMITTED', payload: response });
      } catch (err) {
        console.error('Error al enviar la cotización');
      }
    };
  
    const getTotalItems = () => shoppingCart.reduce((total, book) => total + book.quantity, 0);
  
    return { addToCart, handleQuote, getTotalItems, shoppingCart };
  };