import React, { ReactElement } from 'react';
import { ILiteryWork } from '../../../core/models/literywork.model';
import './style.css';


export const CardLiteryWork = ( { title, url, incrasePrice} : ILiteryWork) : ReactElement => {
  return (
    <div className="card">
      <div className="card2">
        {title}
      </div>
    </div>
  );
};
