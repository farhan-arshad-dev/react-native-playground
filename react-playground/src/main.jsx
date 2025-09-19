import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Detecting impure calculations with StrictMode, React offers a “Strict Mode”
  // in which it calls each component’s function twice during development.
  // By calling the component functions twice, Strict Mode helps find components
  // that break these rules.
  // e.g  place the statment console.log("Rendering Counter"); in any function, will displayed 2 tmes in console.
  <StrictMode>
    <App />
  </StrictMode>,
)
