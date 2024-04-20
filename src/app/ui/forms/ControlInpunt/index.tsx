import { ReactElement } from 'react';
import './style.css';



const Input = ({ type, name, placeholder }): ReactElement => {
  return (
    <input className="input" type={type} name={name} placeholder={placeholder} />
  );
};

export default Input;