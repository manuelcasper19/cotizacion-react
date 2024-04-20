import { useContext, useEffect, useState } from 'react';
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

export const useUserFullName = () => {
  const [userFullName, setUserFullName] = useState<string>();

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (token) {
      const userData = parseToken(token);
      if (userData && userData.FirstName && userData.LastName) {
        const { FirstName, LastName } = userData;
        const fullName = `${FirstName} ${LastName}`;
               setUserFullName(fullName);
      } 
    } 
  }, []);

  const parseToken = (token: string) => {
    try {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      return tokenData;
    } catch (error) {
      console.error('error leyendo el token:', error);
      return null;
    }
  };

  return userFullName;
};