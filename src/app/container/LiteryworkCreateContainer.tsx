import { ReactElement } from 'react';
import { useCreateBook } from '../core/hooks/useLiteryWork';
import LiteryWorkForm from '../ui/forms/LiteryWorkForm';

export const LiteryworkCreateContainer = (): ReactElement => {
  const { createBook } = useCreateBook();
  return <LiteryWorkForm createBook={createBook} />;
};