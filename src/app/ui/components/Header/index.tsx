// Sidebar.jsx
import { useContext, useState } from 'react';
import { FaBars, FaShoppingCart, FaSignOutAlt, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';
import Sidebar from '../Sidebar';
import { FaUser } from 'react-icons/fa6';

interface IHeaderProps {
  close: boolean;
  showSidebar: () => void;
  userName?: string;
  formatName: (name: string) => string;
  showSubMenu: boolean;
  toggleSubMenu: () => void;
  closeSubMenu: () => void;
  handleLogout: () => void;
  getTotalItems: () => number;
}

export const Header = ({
  close,
  showSidebar,
  userName,
  formatName,
  showSubMenu,
  toggleSubMenu,
  closeSubMenu,
  handleLogout,
  getTotalItems
}: IHeaderProps) => {
  return (
    <>
      <div className="header">
        <Link to="#" className="menu-icon__open" onClick={showSidebar}>
          <FaBars />
        </Link>

        <div className="login__menu">
          {userName ? (
            <>              
              <button className="submenu__icon" onClick={toggleSubMenu}>
                <FaUser className="user__icon" />
              </button>
              {showSubMenu && (
                <div className="submenu">
                  <button onClick={handleLogout}><FaSignOutAlt /></button>
                  <button onClick={closeSubMenu}><FaTimes /></button>
                </div>
              )}
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