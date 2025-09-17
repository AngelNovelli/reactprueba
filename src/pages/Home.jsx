import './Home.css'
import './Global_components.css'
import NewButton from '../components/home/Button.jsx'
import Profile from '../components/home/Profile.jsx'
import Subtitle from '../components/home/Subtitle.jsx'
import Short from '../components/home/Short.jsx'
import Container from '../components/home/Container.jsx'
import Video from '../components/home/Video.jsx'
import Ads from '../components/home/Ads.jsx'
import FooterItem  from '../components/home/FooterItem.jsx'
import UlContainer from '../components/home/UlContainer.jsx'
import FooterText from '../components/home/FooterText.jsx'
import { popularChannels, shorts, videos, textfooter, recommendedVideos} from '../assets/data/Data.jsx'
import Sidebar from '../components/home/Sidebar.jsx'
import ButtonCarousel from '../components/home/ButtonCarousel.jsx'
import { useRef } from 'react';


function Home() {
    const popularChannelsRef = useRef(null);
    const shortsRef = useRef(null);
    const catsRef = useRef(null);

  return (
    <>
<body>
      <Sidebar/>
    <main className="main-content">
    <Ads/>

    <Container className="popular-channels">    
    <Subtitle subtitle="Popular Channels"/>
    <Container className="carousel-container" >
        <ButtonCarousel className="carousel-btn left" direction="left" carouselRef={popularChannelsRef} />
          <Container className="carousel-channels" ref={popularChannelsRef}>
          {popularChannels.map((channel, index) => (
          <Profile
            key={index}
            namechannel={channel.name}
            subschannel={channel.subs}
            photo={channel.photo}
          />
        ))}
          </Container>
        <ButtonCarousel className="carousel-btn right" direction="right" carouselRef={popularChannelsRef} />
    </Container>
    </Container>

    <Container className="trending">
    <Subtitle subtitle="Shorts"/>
    <Container className="carousel-container">
        <ButtonCarousel className="carousel-btn left" direction="left" carouselRef={shortsRef} />
        <Container className="carousel-trends" ref={shortsRef}>   
      {shorts.map((short, index) => (
        <Short
          key={index}
          nameshort={short.nameshort}
          shortviews={short.shortviews}
          photo={short.photo}
        />    
      ))}    
      </Container> 
          <ButtonCarousel className="carousel-btn right" direction="right" carouselRef={shortsRef} />      
    </Container>

    </Container>

    <Container className="subscriptions">
    <Subtitle subtitle="Catscribers"/>
    <Container className="carousel-container">
      <ButtonCarousel className="carousel-btn left" direction="left" carouselRef={catsRef} />
      <Container className="carousel-subs" ref={catsRef}>
      {videos.map((video, index) => (
        <Video
          key={index}
          namevideo={video.namevideo}
          videoviews={video.videoviews}
          photo={video.photo}
        />    
      ))}   
      </Container>    
      <ButtonCarousel className="carousel-btn right" direction="right" carouselRef={catsRef} />       
    </Container>
    </Container>
    
    <Container className="recommendations">
    <Subtitle subtitle="Recommended"/>
    <Container className="recommendations-container">
        {recommendedVideos.map((video, index) => (
        <Video
          key={index}
          namevideo={video.namevideorecommended}
          videoviews={video.videoviewsrecommended}
          photo={video.photorecommended}
        />    
      ))} 
    </Container>
    </Container>

    <Ads/>

    <Container className="footer">
    <UlContainer>
      {textfooter.map((footer, index) => (
        <FooterItem
          key={index}
          textfooter={footer.textfooter}
        />
      ))}
    </UlContainer>
    <FooterText text="© 2025 CaTube. All rights reserved." />
    </Container>

    <NewButton btntitle="Publish"/>
    </main>
    </body>
    </>
  )
}

export default Home
