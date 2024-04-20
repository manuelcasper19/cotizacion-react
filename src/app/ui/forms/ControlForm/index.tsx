import { FormEvent } from 'react';
import Input from '../ControlInpunt';
import './style.css';



const FormRegister = ({ title, onSubmit, inputs, validationErrors  }) => {
  const handleSubmit = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="chk" aria-hidden="true">{title}</label>
      {inputs.map((input, index) => (
        <div key={index}>
          <Input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
          />
          {validationErrors[input.name] && <p className="error__message">{validationErrors[input.name]}</p>}
        </div>
      ))}
      <button type="submit">{title}</button>
    </form>
  );
};

export default FormRegister;