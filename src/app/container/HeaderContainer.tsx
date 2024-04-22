import { useContext, useState } from 'react';
import { useAuth, useUserFullName } from '../core/hooks/useAuth';
import { Header } from '../ui/components/Header';
import { AppContext } from '../core/states/Appcontext';

const HeaderContainer = () => {
  const [close, setClose] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const userName = useUserFullName();
  const { state } = useContext(AppContext);
  const { logout } = useAuth();

  const showSidebar = () => setClose(!close);

  const formatName = (name) => {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const closeSubMenu = () => {
    setShowSubMenu(false);
  };

  const handleLogout = () => {
    logout();
  };

  const getTotalItems = () => {
    if (Array.isArray(state.quote)) {
      return state.quote.reduce((total, book) => total + book.quantity, 0);
    } else {
      return 0;
    }
  };

  return (
    <Header
      close={close}
      showSidebar={showSidebar}
      userName={userName}
      formatName={formatName}
      showSubMenu={showSubMenu}
      toggleSubMenu={toggleSubMenu}
      closeSubMenu={closeSubMenu}
      handleLogout={handleLogout}
      getTotalItems={getTotalItems}
    />
  );
};

export default HeaderContainer;