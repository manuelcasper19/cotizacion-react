import { FormEvent } from 'react';
import Input from '../ControlInpunt';
import './style.css';
import Select from '../SelectForm';
import { ButtonLiterywork } from '../../elements/Buttons';

interface IFormInput {
  type?: string;
  name: string;
  placeholder: string;
  options?: { value: number; label: string }[];
}
interface IValidationErrors {
  [key: string]: string;
}
interface ISubmitHandler {
  (e: FormEvent<HTMLFormElement>): void;
}

interface IFormRegisterProps {
  title: string;
  onSubmit: ISubmitHandler;
  inputs: IFormInput[];
  validationErrors: IValidationErrors;
  literyWorkType?: number;
  setLiteryWorkType?: (value: number) => void;
}

const FormRegister = ({ title, onSubmit, inputs, validationErrors }: IFormRegisterProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="chk" aria-hidden="true">{title}</label>
      {inputs.map((input, index) => (
        <div key={index}>
          {input.options ? (
            <Select
              name={input.name}
              placeholder={input.placeholder}
              options={input.options}
            />
          ) : (
            <Input
              type={input.type!}
              name={input.name}
              placeholder={input.placeholder}
            />
          )}
          {validationErrors[input.name] && <p className="error__message">{validationErrors[input.name]}</p>}
        </div>
      ))}
      <ButtonLiterywork title={title} key={title} />
    </form>
  );
};

export default FormRegister;