import { FormEvent, useState } from 'react';
import FormRegister from '../ControlForm';
import './style.css';

interface IFormSectionProps {
  authenticate: (email: string, password: string) => void;
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
    { type: 'text', name: 'username', placeholder: 'Username' },
    { type: 'email', name: 'email', placeholder: 'Email' },
    { type: 'password', name: 'password', placeholder: 'Password' },
  ];
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    
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
      authenticate(email, password);
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
            title="Log in"
            onSubmit={handleSubmit}
            inputs={loginInputs}
            validationErrors={validationErrors}
            literyWorkType={literyWorkType}
            setLiteryWorkType={setLiteryWorkType}
          />
        </div>
        <div className="register">
          <FormRegister
            title="Register"
            onSubmit={handleSubmit}
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