import { createBrowserRouter } from 'react-router-dom';
import { LayoutMain } from '../ui/Layout/LayoutMain';
import Quotion from '../pages/Cotizacion';
import Home from '../pages/Home';
import Recommendation from '../pages/Recommendation';
import Login from '../pages/Login';
import LiteryWork from '../pages/LiteryWork';
import CartShopping from '../pages/CartShopping';

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
          path: 'cotizacion',
          Component: Quotion,
          // element: <Guard><Dashboard /></Guard>
        },        
        {
          path: 'createbook',
          Component: LiteryWork,
          // element: <Guard><Dashboard /></Guard>
        },        
        
        {
          path: 'recommendation',
          Component: Recommendation
          // element: <Guard><Dashboard /></Guard>
        },
        {
          path: 'cart',
          Component: CartShopping
          // element: <Guard><Dashboard /></Guard>
        },
        {
          path: 'auth',
          Component: Login
          // element: <Guard><Dashboard /></Guard>
        },
      ]
    }
    // {
    //   path: 'admin',
    //   // Component: LayoutAdmin,
    //   children: [
    //     {
    //       path: '',
    //       // Component: Home
    //     },
    //     {
    //       path: 'dashboard',
    //       // element: <Guard><Dashboard /></Guard>
    //     }
    //   ]
    // }
  ]);