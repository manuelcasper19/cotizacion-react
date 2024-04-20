import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../states/Appcontext';
import { createLiteryWork, getLiteryWork } from '../services/literywork.service';
import { ILiteryWork } from '../models/literywork.model';
import { useNavigate } from 'react-router-dom';


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


export const useCreateBook = () => {
  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const createBookHandler = async (book: ILiteryWork) => {
    try {
      const newBook = await createLiteryWork(book);
      console.log(newBook)
      dispatch({ type: 'ADDED_LITERYWORK', payload: newBook });
      navigate('/');
    } catch (err) {
      setError('Error al crear el libro');
    }
  };
  return { createBook: createBookHandler, error };
};