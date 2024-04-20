import { ReactElement } from 'react';
import './style.css';
import { Header } from '../../components/Header';
import { Outlet } from 'react-router-dom';

export const LayoutMain = (): ReactElement => {
    return (
      <>
        <Header />       
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </>
    );
  };