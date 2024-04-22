import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../core/states/Appcontext';

interface IGuardProps {
  children: ReactNode;
}
export const Guard = ({ children }: IGuardProps) => {
  const { state } = useContext(AppContext);
  
  if (!state.isUserLogged) {
    return <Navigate to='/' replace />
  }
  return children;
};
