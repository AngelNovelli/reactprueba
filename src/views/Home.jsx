import '../styles/Home.css'
import '../styles/Global_components.css'
import Ads from './components/home/Ads.jsx'
import Sidebar from "../views/components/hooks/Sidebar";
import Footer from "./components/hooks/Footer.jsx";
import Recommendations from './components/home/Recommendations.jsx'
import Sections from './components/home/Sections.jsx'
import Header from './components/header/Header.jsx'
import { popularChannels, shorts, videos } from '../assets/data/Data.jsx';
import { useRef } from 'react';

function Home() {
  const popularChannelsRef = useRef(null);
  const catsRef = useRef(null);
  const shortsRef = useRef(null);
  return (
    <>
      <body>
        <Header></Header>
        <Sidebar />
        <main className="main-content">
          <Ads />

          <Sections section="popular-channels" subtitle="Popular Channels" ref={popularChannelsRef} render={popularChannels} type="profile" cts="carousel-cts" ></Sections>
          <Sections section="trending" subtitle="Shorts" ref={shortsRef} render={shorts} type="short" cts="carousel-ctshorts"></Sections>
          <Sections section="subscriptions" subtitle="Catscribers" ref={catsRef} render={videos} type="video" cts="carousel-ctsvideos"></Sections>

          <Recommendations />

          <Ads />

          <Footer footer="footer"></Footer>
        </main>
      </body>
    </>
  )
}

export default Home
