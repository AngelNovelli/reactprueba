import './App.css'
import NewButton from './components/Button.jsx'
import Profile from './components/Profile.jsx'
import Subtitle from './components/Subtitle.jsx'
import Blocks from './components/Blocks.jsx'
import Short from './components/Short.jsx'
import Container from './components/Container.jsx'

const popularChannels = [
  { name: "Angel", subs: "15k subs" },
  { name: "Thiagoelmascapito", subs: "20k subs" },
  { name: "Jeremiaselreydelosgatosmedievales", subs: "12k subs" },
  { name: "Genaro", subs: "30k subs" },
];

const shorts = [
  { nameshort: "Funny Cats", shortviews: "9k views • 1d ago" },
  { nameshort: "Amazing Dogs", shortviews: "12k views • 2d ago" },
  { nameshort: "Wildlife Wonders", shortviews: "15k views • 3d ago" },
  { nameshort: "Travel Vlogs", shortviews: "20k views • 4d ago" },
];

function App() {
  return (
    <>
    <Blocks>    
    <Subtitle subtitle="Popular Channels"/>
    <Container>
       {popularChannels.map((channel, index) => (
          <Profile
            key={index}
            namechannel={channel.name}
            subschannel={channel.subs}
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
        />    
      ))}           
    </Container>
    </Blocks>
    <NewButton btntitle="Publish"/>
    </>
  )
}

export default App
