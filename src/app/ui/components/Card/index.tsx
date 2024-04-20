import  { ReactElement } from 'react';
import { ILiteryWork } from '../../../core/models/literywork.model';
import './style.css';
import { ImageLiteryWork } from '../../elements/Image';
import { ButtonLiterywork } from '../../elements/Buttons';


export const CardLiteryWork = ( { title, url, incrasePrice} : ILiteryWork) : ReactElement => {
  return (
    <article className="literywork__detail">
    <div className="literywork__card">
      <div className="literywork__card2">        
        <ImageLiteryWork url={url} title={title}/> 
        {/* <h6> {title}</h6> */}
        <footer className="literywork__header">
        <h2 className="literywork-card__price">{ "$ " +incrasePrice}</h2>
        <ButtonLiterywork title='Add'/>
        </footer>       
      </div>
    </div>
    </article>
  );
};
