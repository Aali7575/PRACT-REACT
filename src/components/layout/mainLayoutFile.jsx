import React from 'react'

import { Outlet } from 'react-router-dom';
import NavBar from './navBarFile';
import Footer from './footerFile';

function MainLayout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
