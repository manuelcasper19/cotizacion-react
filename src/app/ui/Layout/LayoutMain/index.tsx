import { ReactElement } from 'react';
import './style.css';
import { Header } from '../../components/Header';



export const LayoutMain = (): ReactElement => {
    return (
      <>
        <Header />
       
        {/* <main>
          <Outlet />
        </main> */}
        {/* <Footer /> */}
      </>
    );
  };