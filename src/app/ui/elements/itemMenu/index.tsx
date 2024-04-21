import React, { ReactElement } from 'react';
import { IItemMenu } from '../../../core/models/item-menu.model';
import './style.css';
import { Link } from 'react-router-dom';


export const ItemMenu = ({ title, url, icon, closeSidebar }: IItemMenu): ReactElement => {
  const handleClick = () => {
    closeSidebar!();
  };

    return (
        <li key={title} className="menu__items">
        <Link to={url} className="menu-item__links" onClick={handleClick}>
          {React.createElement(icon)}
          <span style={{ marginLeft: '16px' }}>{title}</span>
        </Link>
      </li>
    );
  };