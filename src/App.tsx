import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'

import Header from './layout/Header'
import Home from './pages/Home'
import Footer from 'layout/Footer'

import SmoothScroll from './components/MSmoothScroll'
import MintPage from 'pages/Mint'
// import MParticles from 'components/MParticles'

function App() {
  return (
    <>
      {/* <MParticles /> */}
      <Header />
      <Routes>
        <Route path='mint' element={<MintPage />} />
        <Route
          path='/'
          element={
            <>
              <SmoothScroll>
                <Home />
                <Footer />
              </SmoothScroll>
            </>
          }
        ></Route>
      </Routes>
    </>
  )
}

export default App
