import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'

createRoot(document.getElementById('root')).render(
  <Strict> 
    <App />
  </Strict>
)
