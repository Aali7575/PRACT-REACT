import React from 'react'
import Home from '../app/homeFile'
import FrequentlyAskedQ from '../app/frequent'
import HappyClients from '../app/happy'
import CallTo from './callto'
import TransparencyPage from './transparencypage'

function HomePageFunc() {
  return (
    <div>
      {/* <Home/> */}
      <CallTo/>
      <HappyClients/>
      <TransparencyPage/>
      <FrequentlyAskedQ/>
    </div>
  )
}

export default HomePageFunc
