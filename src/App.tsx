import React from 'react'
import './App.scss'

import Header from './layout/Header'
import Home from './pages/Home'
import Footer from 'layout/Footer'

import SmoothScroll from './components/MSmoothScroll'
// import MParticles from 'components/MParticles'

function App() {
  return (
    <>
      {/* <MParticles /> */}
      <Header />
      <SmoothScroll>
        <Home />
        <Footer />
      </SmoothScroll>
    </>
  )
}

export default App
