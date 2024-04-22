import { FormEvent, useState } from 'react';
import FormRegister from '../ControlForm';
import './style.css';
import { IUserCredentials } from '../../../core/models/user-crential';

interface IFormSectionProps {
  authenticate: (user: IUserCredentials) => void;
  error?: string;
}

const FormSection = ({ authenticate, error }: IFormSectionProps) => {
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
  const [literyWorkType, setLiteryWorkType] = useState<number>(0);
  const loginInputs = [
    { type: 'email', name: 'email', placeholder: 'Email' },
    { type: 'password', name: 'password', placeholder: 'Password' },
  ];

  const registerInputs = [
    { type: 'text', name: 'firstname', placeholder: 'john' },
    { type: 'text', name: 'lastname', placeholder: 'doe' },
    { type: 'email', name: 'email', placeholder: 'john.doe@email.com' },
    { type: 'password', name: 'password', placeholder: 'Password' },
  ];

  
  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const errors: { [key: string]: string } = {};
    if (!email) {
      errors.email = 'El email es obligatorio';
    }
    if (!password) {
      errors.password = 'El password es obligatorio';
    }
    if (Object.keys(errors).length === 0) {
      const data : IUserCredentials = {
        email,
        password
      }
      authenticate(data);
      setValidationErrors({});
    } else {
      setValidationErrors(errors);
    }
  };

  const handleRegisterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    const errors: { [key: string]: string } = {};
    if (!email) {
      errors.email = 'El email es obligatorio';
    }
    if (!password) {
      errors.password = 'El password es obligatorio';
    }
    if (!firstname) {
      errors.firstname = 'El nombre es obligatorio';
    }
    if (!lastname) {
      errors.lastname = 'El apellido es obligatorio';
    }
    if (Object.keys(errors).length === 0) {
      const data : IUserCredentials = {
        email,
        password,
        firstname,
        lastname
      }
      authenticate(data);
      setValidationErrors({});
    } else {
      setValidationErrors(errors);
    }
  };

  return (
    <section className="form__auth">
      <div className="form__main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="form__login">
          <FormRegister
            title="Iniciar Sesion"
            onSubmit={handleLoginSubmit}
            inputs={loginInputs}
            validationErrors={validationErrors}
            literyWorkType={literyWorkType}
            setLiteryWorkType={setLiteryWorkType}
          />
        </div>
        <div className="register">
          <FormRegister
            title="Register"
            onSubmit={handleRegisterSubmit}
            inputs={registerInputs}
            validationErrors={validationErrors}
            literyWorkType={literyWorkType}
            setLiteryWorkType={setLiteryWorkType}
          />
        </div>
      </div>
    </section>
  );
};

export default FormSection;