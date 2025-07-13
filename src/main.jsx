import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App className=" bg-gradient-to-br from-gray-100 via-blue-100 to-white" />
  </StrictMode>,
)
