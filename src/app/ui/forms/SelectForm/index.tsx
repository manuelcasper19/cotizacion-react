import { ReactElement, useState } from 'react';
import './style.css';


interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  options: Option[];
  onChange: (value: number) => void;
}

const SelectInput = ({ options, onChange }: SelectInputProps): ReactElement => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
   
    setSelectedOption(value);
    onChange(parseInt(value)); // Convertir el valor a un número
  };

  return (
    <select className="select__input" value={selectedOption} onChange={handleChange}>
      <option value="">Seleccione una opción</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
