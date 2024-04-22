import  { ReactElement, useContext } from 'react';
import ShoppingCart from '../ui/components/ShoppingCart';
import { AppContext } from '../core/states/Appcontext';
import { useShoppingCart } from '../core/hooks/useShoppingCart';

export const CartShoppingContainer = (): ReactElement => {
  const { state } = useContext(AppContext);
  const { handleQuote } = useShoppingCart();
  return (
    <ShoppingCart shoppingCart={state.quote} totalItems={state.quote.length} handleQuote={handleQuote} />
  );
};