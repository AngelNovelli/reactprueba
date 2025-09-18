import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Home from './views/Home'
import YourChannel from './views/YourChannel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home /> */}
    <YourChannel />
  </StrictMode>,
)
