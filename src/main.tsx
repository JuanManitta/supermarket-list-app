import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App';
import { AppTheme } from './theme/AppTheme';
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <AppTheme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppTheme>
  </React.StrictMode>
)