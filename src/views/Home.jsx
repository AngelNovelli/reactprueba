import '../styles/Home.css'
import '../styles/Global_components.css'
import NewButton from './components/home/Button.jsx'
import Ads from './components/home/Ads.jsx'
import Sidebar from './components/home/Sidebar.jsx'
import Footer from './components/home/Footer.jsx'
import Recommendations from './components/home/Recommendations.jsx'
import Sections from './components/home/Sections.jsx'
import { popularChannels, shorts, videos } from '../assets/data/Data.jsx';
import { useRef } from 'react';

function Home() {
  const popularChannelsRef = useRef(null);
  const catsRef = useRef(null);
  const shortsRef = useRef(null);
  return (
    <>
      <body>
        <Sidebar />
        <main className="main-content">
          <Ads />

          <Sections section="popular-channels" subtitle="Popular Channels" ref={popularChannelsRef} render={popularChannels} type="profile"></Sections>
          <Sections section="trending" subtitle="Shorts" ref={shortsRef} render={shorts} type="short"></Sections>
          <Sections section="subscriptions" subtitle="Catscribers" ref={catsRef} render={videos} type="video"></Sections>

          <Recommendations />

          <Ads />

          <Footer />

          <NewButton btntitle="Publish" />
        </main>
      </body>
    </>
  )
}

export default Home
