import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/globalStyles'

import Router from './routes/Routes'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Router/>
   </BrowserRouter>
   <GlobalStyles/>
  </React.StrictMode>,
)
