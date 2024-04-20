import  { ReactElement } from 'react';
import './style.css';


interface IButtonProps{
  title: string
}

export const ButtonLiterywork = ({ title }: IButtonProps): ReactElement => {
    return (
      <button>
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label">{title}</span>
      </button>
        );
  };