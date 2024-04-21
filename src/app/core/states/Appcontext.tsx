import { ReactElement, ReactNode, createContext, useReducer } from 'react';
import { ILiteryWork, ILiteryworkToQuote } from '../models/literywork.model';

export const initialState: IState = {
  isUserLogged: false,
  literyWork: [],
  userFullName: '',
  quote: [],
  recommendationWithBudget: null
};
interface IAppContext {
  state: IState;
  dispatch: (action: IAction) => void;
}
export const AppContext = createContext<IAppContext>({ state: initialState, dispatch: () => {} });

interface IAppProviderProps {
  children: ReactNode;
}

interface IState {
  isUserLogged: boolean;
  literyWork: string[];
  userFullName: string;
  quote: ILiteryworkToQuote[] |  ILiteryWork[];
  recommendationWithBudget: any;
}

interface IAction {
  type: string;
  payload?: any;
}


export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'USER_LOGGED':
      return { ...state, isUserLogged: true };
    case 'LITERYWORK_GOTTEN':
      return { ...state, literyWork: action.payload };
    case 'ADD_BOOK':
      return { ...state, literyWork: [...state.literyWork, action.payload] };
    case 'QUOTION_CHOICE':
    return { ...state, quote: action.payload };
    case 'RECOMMENDATION_WITH_BUDGET': 
    return { ...state, recommendationWithBudget: action.payload };
    default:
    return state;
  }
};

export const AppProvider = ({ children }: IAppProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};