import  { FormEvent, ReactElement } from 'react';
import './style.css';
import { useAuth } from '../../../../core/hooks/useAuth';


export const FormLogin = (): ReactElement => {
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
				<form className="form" onSubmit={handleSubmit}>
					<label htmlFor="chk" aria-hidden="true">Log in</label>
					<input className="input" type="email" name="email" placeholder="Email" /> 
					<input className="input" type="password" name="password" placeholder="Password" />
					<button>Log in</button>
				</form>
			</div>

      <div className="register">
				<form className="form">
					<label htmlFor="chk" aria-hidden="true">Register</label>
					<input className="input" type="text" name="txt" placeholder="Username" />
					<input className="input" type="email" name="email" placeholder="Email" />
					<input className="input" type="password" name="password" placeholder="Password" />
					<button>Register</button>
				</form>
			</div>
	</div>
        </section>

        );
  };