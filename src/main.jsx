import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Home from './views/Home'
// import YourChannel from './views/YourChannel.jsx'
import Trending from './views/Trending.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home /> */}
    {/* <YourChannel /> */}
    <Trending/>
  </StrictMode>,
)
