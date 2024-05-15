import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min (1).css'
import { BrowserRouter } from 'react-router-dom'
import ContextAPI from './contests/ContextAPI.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAPI>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextAPI>

  </React.StrictMode>,
)
