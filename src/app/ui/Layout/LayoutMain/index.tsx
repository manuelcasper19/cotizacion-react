import { ReactElement } from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../../../container/HeaderContainer';

export const LayoutMain = (): ReactElement => {
    return (
      <>
        <HeaderContainer />       
        <main>
          <Outlet />
        </main>    
      </>
  );
};