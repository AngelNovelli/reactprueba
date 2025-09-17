import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import YourChannel from './pages/YourChannel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    {/* <YourChannel /> */}
  </StrictMode>,
)
