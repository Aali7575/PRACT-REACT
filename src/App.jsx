import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/mainLayoutFile'
import HomePageFunc from './components/pages/homePage';
import ContactPages from './components/pages/contactpages';
import AboutPage from './components/pages/aboutPage';
import ServicesPage from './components/pages/servicesPage';
import BookingPage from './components/pages/bookingPage';

function App() {
  
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path = "/" element = {<MainLayout/>}>
              <Route path = "/home" element = {<HomePageFunc/>}/>
              <Route path = "/contact" element = {<ContactPages/>}/>
              <Route path = "/about" element = {<AboutPage/>}/>
              <Route path = "/services" element = {<ServicesPage/>}/>
              <Route path = "/book" element = {<BookingPage/>}/>
              </Route> 
            
            
          </Routes>
        </Router>
      </div>
     
    </>
  )
}

export default App
