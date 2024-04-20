// Sidebar.jsx
import { useState } from 'react';
import { FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';
import Sidebar from '../Sidebar';
import { FaUser } from 'react-icons/fa6';
import { useUserFullName } from '../../../core/hooks/useAuth';


 export const Header = () => {
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);
  const userName = useUserFullName();
  const formatName = (name) => {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  return (
    <>
       <div className="header">
        <Link to="#" className="menu-icon__open" onClick={showSidebar}>
          <FaBars />
        </Link>
        <div className="login__menu">
          {userName ? (
            <>
              {formatName(userName)}
            </>
          ) : (
            <Link to="/auth" className="login__link">
              <FaUser className="user-icon" /> Login
            </Link>
          )}
        </div>
      </div>
      <Sidebar close={close} showSidebar={showSidebar} />
    </>
  );
};

