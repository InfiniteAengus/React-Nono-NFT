import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { createRoot } from 'react-dom/client'

import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'
import './styles/styles.scss'

// createRoot(document.getElementById('root') as any).render(<App />)
createRoot(document.getElementById('root') as any).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
