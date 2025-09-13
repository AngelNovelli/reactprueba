import './Home.css'
import NewButton from './components/Button.jsx'
import Profile from './components/Profile.jsx'
import Subtitle from './components/Subtitle.jsx'
import Blocks from './components/Blocks.jsx'
import Short from './components/Short.jsx'
import Container from './components/Container.jsx'
import Video from './components/Video.jsx'
import Ads from './components/Ads.jsx'
import FooterItem  from './components/FooterItem.jsx'
import FooterContainer from './components/FooterContainer.jsx'
import FooterText from './components/FooterText.jsx'
import { popularChannels, shorts, videos, textfooter } from './assets/data/Data.jsx'

function Home() {
  return (
    <>
    <main className="main-content">
    <Ads/>
    <Blocks>    
    <Subtitle subtitle="Popular Channels"/>
    <Container>
          {popularChannels.map((channel, index) => (
          <Profile
            key={index}
            namechannel={channel.name}
            subschannel={channel.subs}
            photo={channel.photo}
          />
        ))}
    </Container>
    </Blocks>

    <Blocks>
    <Subtitle subtitle="Shorts"/>
    <Container>
      {shorts.map((short, index) => (
        <Short
          key={index}
          nameshort={short.nameshort}
          shortviews={short.shortviews}
          photo={short.photo}
        />    
      ))}           
    </Container>
    </Blocks>

    <Blocks>
    <Subtitle subtitle="Catscribers"/>
    <Container>
      {videos.map((video, index) => (
        <Video
          key={index}
          namevideo={video.namevideo}
          videoviews={video.videoviews}
          photo={video.photo}
        />    
      ))}           
    </Container>
    </Blocks>
    <Ads/>

    <Blocks>
    <FooterContainer>
      {textfooter.map((footer, index) => (
        <FooterItem
          key={index}
          textfooter={footer.textfooter}
        />
      ))}
    </FooterContainer>
    <FooterText text="© 2025 CaTube. All rights reserved." />
    </Blocks>

    <NewButton btntitle="Publish"/>

    </main>
    </>
  )
}

export default Home
