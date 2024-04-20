import { useContext, useState } from 'react';
import { AppContext } from '../states/Appcontext';
import { authService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';


export const useAuth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const authenticate = (email: string, password: string) => authService({ email, password })
    .then((isAuthenticated) => {
      if (isAuthenticated) {
        dispatch({ type: 'USER_LOGGED' });
        navigate('/');
      } else {
        setError('Las credenciales son incorrectas');
      }
    });
  return { authenticate, error };
};