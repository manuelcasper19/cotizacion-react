import { ReactElement } from 'react';
import { useLiteryWork } from '../core/hooks/useLiteryWork';
import LiteryWorkForm from '../ui/forms/LiteryWorkForm';


export const LiteryworkCreateContainer = (): ReactElement => {
  const { literywork } = useLiteryWork();    
  return (
        <LiteryWorkForm/>
    );
  };