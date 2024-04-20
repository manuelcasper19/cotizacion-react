import React from 'react';
import {  RouterProvider } from 'react-router-dom';

import { router } from '../routes/router';
import { AppProvider } from './states/Appcontext';

const App: React.FunctionComponent = () => {
  return (
    <>
    <AppProvider>
      <RouterProvider router={router}/>
      </AppProvider>
    </>
  );
};

export default App;