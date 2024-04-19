import { useContext, useEffect } from 'react';
import { AppContext } from '../states/Appcontext';
import { getLiteryWork } from '../services/customer.service';


export interface ILiteryWork {
  title: string;
  price: number;
  increasePrice: number;
}

export const useLiteryWork = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getLiteryWork()
      .then((literywork : ILiteryWork[]) => {
        dispatch({ type: 'LITERYWORK_GOTTEN', payload: literywork });
      });
  }, []);

  return { literywork: state.literyWork };
};