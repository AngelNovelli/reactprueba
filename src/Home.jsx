import './Home.css'
import NewButton from './components/Button.jsx'
import Profile from './components/Profile.jsx'
import Subtitle from './components/Subtitle.jsx'
import Short from './components/Short.jsx'
import Container from './components/Container.jsx'
import Video from './components/Video.jsx'
import Ads from './components/Ads.jsx'
import FooterItem  from './components/FooterItem.jsx'
import UlContainer from './components/UlContainer.jsx'
import FooterText from './components/FooterText.jsx'
import { popularChannels, shorts, videos, textfooter, recommendedVideos} from './assets/data/Data.jsx'
import Sidebar from './components/Sidebar.jsx'
import ButtonCarousel from './components/ButtonCarousel.jsx'

function Home() {
  return (
    <>
<body>
      <Sidebar/>
    <main className="main-content">
    <Ads/>

    <Container className="popular-channels">    
    <Subtitle subtitle="Popular Channels"/>
    <Container className="carousel-container">
        <ButtonCarousel className="carousel-btn left" direction="left" />
          <Container className="carousel-channels">
          {popularChannels.map((channel, index) => (
          <Profile
            key={index}
            namechannel={channel.name}
            subschannel={channel.subs}
            photo={channel.photo}
          />
        ))}
          </Container>
        <ButtonCarousel className="carousel-btn right" direction="right" />
    </Container>
    </Container>

    <Container className="trending">
    <Subtitle subtitle="Shorts"/>
    <Container className="container">
      {shorts.map((short, index) => (
        <Short
          key={index}
          nameshort={short.nameshort}
          shortviews={short.shortviews}
          photo={short.photo}
        />    
      ))}           
    </Container>
    </Container>

    <Container className="subscriptions">
    <Subtitle subtitle="Catscribers"/>
    <Container className="container">
      {videos.map((video, index) => (
        <Video
          key={index}
          namevideo={video.namevideo}
          videoviews={video.videoviews}
          photo={video.photo}
        />    
      ))}           
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
