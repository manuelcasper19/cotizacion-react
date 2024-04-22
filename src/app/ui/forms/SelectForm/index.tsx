import './style.css';

interface SelectProps {
  name: string;
  placeholder: string;
  options: { value: number; label: string }[];
}

const Select: React.FC<SelectProps> = ({ name, placeholder, options }) => {
  return (
    <select name={name} className="form__select">
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
