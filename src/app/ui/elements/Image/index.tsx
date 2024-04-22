import { ReactElement } from 'react';
import './style.css';


interface IImageProps {
  url: string;
  title: string
}

export const ImageLiteryWork = ({ url, title }: IImageProps): ReactElement => {
  return (
    <img className='image__literywork' src={url} alt={title}></img>
  );
};