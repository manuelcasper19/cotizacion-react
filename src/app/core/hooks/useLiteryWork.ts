import { useContext, useEffect } from 'react';
import { AppContext } from '../states/Appcontext';
import { getLiteryWork } from '../services/literywork.service';
import { ILiteryWork } from '../models/literywork.model';


export const useLiteryWork = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getLiteryWork()
      .then((literywork : ILiteryWork[]) => {
        console.log(literywork);
        dispatch({ type: 'LITERYWORK_GOTTEN', payload: literywork });
      });
  }, []);

  return { literywork: state.literyWork };
};