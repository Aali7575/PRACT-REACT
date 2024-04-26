import React from 'react'
import Home from '../app/homeFile'
import FrequentlyAskedQ from '../app/frequent'
import HappyClients from '../app/happy'
import CallTo from './callto'

function HomePageFunc() {
  return (
    <div>
      {/* <Home/> */}
      <CallTo/>
      <HappyClients/>
      <FrequentlyAskedQ/>
    </div>
  )
}

export default HomePageFunc
