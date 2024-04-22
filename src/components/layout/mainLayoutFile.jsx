import React from 'react'

import { Outlet } from 'react-router-dom';
import NavBar from './navBarFile';

function MainLayout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout