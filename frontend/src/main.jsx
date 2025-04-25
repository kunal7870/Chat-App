import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Authprovider}  from './context/Authprovider'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Authprovider>
    <App />
  </Authprovider>
  </BrowserRouter>
)
