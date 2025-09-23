import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Home from './views/Home'
// import YourChannel from './views/YourChannel.jsx'
// import Trending from './views/Trending.jsx'
// import Catscribers from './views/Catscribers'
import Studio from './views/Studio'
// import Education from './views/Education'
// import You from './views/You'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home /> */}
    {/* <YourChannel /> */}
    {/* <Trending/> */}
    {/* <Catscribers/> */}
    <Studio/>
    {/* <Education/> */}
    {/* <You/> */}
  </StrictMode>,
)
