import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Authprovider } from './context/Authprovider'
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './context/SocketContext'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Authprovider>
      <SocketProvider>

        <App />
      </SocketProvider>
    </Authprovider>
  </BrowserRouter>
)
