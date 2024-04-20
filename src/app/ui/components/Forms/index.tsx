import  { ReactElement } from 'react';
import './style.css';


 const FormSingup = (): ReactElement => {
    return (
      <div className="login">
      <form className="form">
        <label htmlFor="chk" aria-hidden="true">Log in</label>
        <input className="input" type="email" name="email" placeholder="Email" /> 
        <input className="input" type="password" name="pswd" placeholder="Password" />
        <button>Log in</button>
      </form>
    </div>
        );
  };

  export default FormSingup;