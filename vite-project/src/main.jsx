import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CarsApp } from './CarsApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarsApp />
    </BrowserRouter>
  </React.StrictMode>
)
