import { ReactElement, ReactNode, createContext, useReducer } from 'react';

export const initialState: IState = {
  isUserLogged: false,
  literyWork: [],
  userFullName: ''
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
    case 'UPDATE_USERNAME': 
      return { ...state, userFullName: action.payload };
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