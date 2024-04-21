import { useContext, useState } from 'react';
import { ILiteryworkToQuote } from '../models/literywork.model';
import { AppContext } from '../states/Appcontext';
import { submitQuote } from '../services/quotion-literywork.service';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<ILiteryworkToQuote[]>([]);
    const { state, dispatch } = useContext(AppContext);
  
    const addToCart = (bookId: number, quantity: number) => {
      const updatedCart = [...state.quote, { id: bookId, quantity }];
      dispatch({ type: 'QUOTION_CHOICE', payload: updatedCart });
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