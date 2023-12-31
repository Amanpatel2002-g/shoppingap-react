import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from './context/shoppingCartContext.tsx';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShoppingCartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ShoppingCartProvider>
  </React.StrictMode>
)
