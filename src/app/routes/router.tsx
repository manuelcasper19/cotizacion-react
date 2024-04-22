import { createBrowserRouter } from 'react-router-dom';
import { LayoutMain } from '../ui/Layout/LayoutMain';
import Quotion from '../pages/Cotizacion';
import Home from '../pages/Home';
import Recommendation from '../pages/Recommendation';
import Login from '../pages/Login';
import LiteryWork from '../pages/LiteryWork';
import CartShopping from '../pages/CartShopping';
import { Guard } from './Guard';

export const router = createBrowserRouter([
    {
      path: '',
      Component: LayoutMain,
      children: [
        {
          path: '/',
           Component: Home
        },
        {
          path: 'quotion',
          element: <Guard> <Quotion/> </Guard>
        },        
        {
          path: 'createbook',
          element: <Guard> <LiteryWork/> </Guard>
        },        
        
        {
          path: 'recommendation',
          element: <Guard> <Recommendation/> </Guard>
        },
        {
          path: 'cart',
          element: <Guard> <CartShopping/> </Guard>
        },
        {
          path: 'auth',
          Component: Login
         },
      ]
    }
  ]);