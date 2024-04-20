import  { ReactElement } from 'react';
import './style.css';


interface IButtonProps{
  title: string
}

export const FormInput= ({ title }: IButtonProps): ReactElement => {
    return (
      
   <>  
    <input className="input" type="email" name="email" placeholder="Email" /> 
    <input className="input" type="password" name="pswd" placeholder="Password" />
   </>   
  );
  };