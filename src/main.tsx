import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App';
import { AppTheme } from './theme/AppTheme';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppTheme>
    </Provider>
  </React.StrictMode>
)