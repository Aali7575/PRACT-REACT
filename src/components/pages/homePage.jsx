import React from 'react'
import Home from '../app/homeFile'
import FrequentlyAskedQ from '../app/frequent'
import HappyClients from '../app/happy'

function HomePageFunc() {
  return (
    <div>
      <Home/>
      <HappyClients/>
      <FrequentlyAskedQ/>
    </div>
  )
}

export default HomePageFunc
