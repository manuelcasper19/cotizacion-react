import  { ReactElement } from 'react';
import './style.css';


interface IButtonProps{
  title: string
}

export const LabelForm= ({ title }: IButtonProps): ReactElement => {
    return (      

    <label for="chk" aria-hidden="true">Log in</label>   
  );
  };