import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Centralized stylesheet index that aggregates base, layout, components, pages and responsive modules
import './styles/index.css'

// main.jsx bootstraps the React application into the #root element created in index.html
// React.StrictMode helps spot potential problems in development (renders components twice in dev)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
