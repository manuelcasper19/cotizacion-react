import { useNavigate } from 'react-router-dom';
import { ILiteryworkToBudget, ILiteryworkToQuote } from '../models/literywork.model';
import { submitBudget } from '../services/quotion-literywork.service';
import { AppContext } from '../states/Appcontext';
import { useContext } from 'react';

export const useBudget =  () => {
const { dispatch } = useContext(AppContext);
const navigate = useNavigate();
const budget = async (optiones : ILiteryworkToQuote[], budget: number) =>{
try {
  console.log(budget);
  const literyWorskId: number[] = optiones.map( option => option.id);
  const budgetObj: ILiteryworkToBudget = {
    budget: budget,
    literyWorksId: literyWorskId
  };
  const response = await submitBudget(budgetObj);
  dispatch({ type: 'RECOMMENDATION_WITH_BUDGET', payload: response });
  navigate('/recommendation');
  console.log(response);
  return response;
} catch (error) {
    console.error(error);
    throw new Error('Error al enviar la cotización');
  }
};
  return { budget };
};