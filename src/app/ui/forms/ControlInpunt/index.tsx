import { ReactElement } from 'react';
import './style.css';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
}
const Input = ({ type, name, placeholder }: InputProps): ReactElement => {
  return (
    <input className="input" type={type} name={name} placeholder={placeholder} />
  );
};

export default Input;