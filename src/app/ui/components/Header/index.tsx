// Sidebar.jsx
import { useContext, useState } from 'react';
import { FaBars, FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';
import Sidebar from '../Sidebar';
import { FaUser } from 'react-icons/fa6';
import { useUserFullName } from '../../../core/hooks/useAuth';
import { AppContext } from '../../../core/states/Appcontext';


 export const Header = () => {
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);
  const userName = useUserFullName();
  const { state } = useContext(AppContext);
  const formatName = (name) => {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getTotalItems = () => {
     if (Array.isArray(state.quote)) {
      return state.quote.reduce((total, book) => total + book.quantity, 0);
    } else {
      return 0;
    }
  }
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
              <Link to="/cart" className="cart__link">
                <FaShoppingCart />
                <span>{getTotalItems()}</span>
              </Link>
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

