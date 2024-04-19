import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from './app/pages/Analytic';

import { Header } from './app/ui/components/Header';





const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Header></Header>
    
        <Routes>
          <Route path='/' element={<Analytics />} />
          {/* <Route path='/team' element={<Team />} />            
          <Route path='/tasks' element={<Tasks />} />    
          <Route path='/chats' element={<Chats />} /> */}
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App