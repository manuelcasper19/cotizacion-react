import { useAuth } from  '../../../core/hooks/useAuth';
import { FormEvent } from 'react';
import FormRegister from '../ControlForm';
import './style.css';

const FormSection = () => {
  const loginInputs = [
    { type: 'email', name: 'email', placeholder: 'Email' },
    { type: 'password', name: 'password', placeholder: 'Password' },
  ];

  const registerInputs = [
    { type: 'text', name: 'username', placeholder: 'Username' },
    { type: 'email', name: 'email', placeholder: 'Email' },
    { type: 'password', name: 'password', placeholder: 'Password' },
  ];

	const { authenticate, error } = useAuth();
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		authenticate(email, password);
		}

  return (
    <section className="form__auth">
      <div className="form__main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="form__login">
          <FormRegister
            title="Log in"
            onSubmit={handleSubmit}
            inputs={loginInputs}
          />
        </div>
        <div className="register">
          <FormRegister
            title="Register"
            onSubmit={handleSubmit}
            inputs={registerInputs}
          />
        </div>
      </div>
    </section>
  );
};

export default FormSection;