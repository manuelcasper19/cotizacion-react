import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../core/hooks/useAuth';

interface IGuardProps {
  children: ReactNode;
}
export const Guard = ({ children }: IGuardProps) => {
  const getToken = useAuth().getToken; 
  const token = getToken();
  if (!token) {
    return <Navigate to='/' replace />
  }
  return children;
};
