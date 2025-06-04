import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Abc from './Abc.jsx'
import Xyz from './Xyz.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Abc />
    <Xyz />
  </StrictMode>,
)
