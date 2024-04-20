// Sidebar.jsx
import { useState } from 'react';
import { FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';
import Sidebar from '../Sidebar';

 export const Header = () => {
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);

  return (
    <>
       <div className="header">
        <Link to="#" className="menu-icon__open" onClick={showSidebar}>
          <FaBars />
        </Link>
      </div>
      <Sidebar close={close} showSidebar={showSidebar} />
    </>
  );
};

