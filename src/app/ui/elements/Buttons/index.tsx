import { ReactElement } from 'react';
import './style.css';

interface IButtonProps {
  title?: string;
  onClick?: () => void;
}

export const ButtonLiterywork = ({ title, onClick }: IButtonProps): ReactElement => {
  return (
    <button onClick={onClick}>
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label">{title}</span>
    </button>
  );
};