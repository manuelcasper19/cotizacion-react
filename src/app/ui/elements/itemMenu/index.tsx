import React, { ReactElement } from 'react';
import { IItemMenu } from '../../../core/models/item-menu.model';
import './style.css';
import { Link } from 'react-router-dom';


export const ItemMenu = ({ title, url, icon }: IItemMenu): ReactElement => {
    return (
        <li key={title} className="menu__items">
        <Link to={url} className="menu-item__links">
          {React.createElement(icon)}
          <span style={{ marginLeft: '16px' }}>{title}</span>
        </Link>
      </li>
    );
  };