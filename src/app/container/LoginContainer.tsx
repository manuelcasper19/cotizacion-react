import { ReactElement } from 'react';
import FormSection from '../ui/forms/SectionForm';
import { useAuth,  } from '../core/hooks/useAuth';

export const LoginContainer = (): ReactElement => {
  const { authenticate, error } = useAuth();
  return (
    <FormSection authenticate={authenticate} error={error} />
  );
  };