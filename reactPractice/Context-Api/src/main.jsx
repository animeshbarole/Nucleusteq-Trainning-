import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { CartProvider } from './context/Cart.jsx'
import { CounterProvider } from './context/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
