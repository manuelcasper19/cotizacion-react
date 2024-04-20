// Sidebar.jsx
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';


import * as FaIcons from 'react-icons/fa' 
import { ItemMenu } from '../../elements/itemMenu';
import { IItemMenu } from '../../../core/models/item-menu.model';

type SidebarProps = {
  close: boolean;
  showSidebar: () => void; 
};

export const SidebarMenu: IItemMenu[] = [
  {
      title: 'Home',
      url: '/',
      icon: FaIcons.FaHome
  },
  {
      title: 'Cotizacion',
      url: '/cotizacion',
      icon: FaIcons.FaCalculator
  },
  {
      title: 'Simular',
      url: '/recommendation',
      icon: FaIcons.FaSlideshare
  }
];

const Sidebar = ({ close, showSidebar }: SidebarProps) => {

  return (
    <>
      <div className={`sidebar__menu ${close ? '' : 'close'}`}>
      <Link to="#" className="menu-icon__close" onClick={showSidebar}>
        <FaTimes />
      </Link>
      <ul>
        {SidebarMenu.map((item) => (
          <ItemMenu key={item.title} icon={item.icon} title={item.title} url={item.url} />
        ))}
      </ul>
    </div>
    </>
  );
};

export default Sidebar;