import React from 'react'
import {  RouterProvider } from "react-router-dom";

import { router } from './app/routes/router';
import { AppProvider } from './app/core/states/Appcontext';

const App: React.FunctionComponent = () => {
  return (
    <>
    <AppProvider>
      <RouterProvider router={router}/>
      </AppProvider>
    </>
  )
}

export default App