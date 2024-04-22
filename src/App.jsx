import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/mainLayoutFile'

function App() {
  
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path = "/" element = {<MainLayout/>}>
              
              </Route> 
            
            
          </Routes>
        </Router>
      </div>
     
    </>
  )
}

export default App
