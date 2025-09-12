import './App.css'
import NewButton from './components/Button.jsx'
import Profile from './components/Profile.jsx'
import Subtitle from './components/Subtitle.jsx'
import Blocks from './components/Blocks.jsx'
import Short from './components/Short.jsx'
import Container from './components/Container.jsx'
import Video from './components/Video.jsx'
import Ads from './components/Ads.jsx'

const popularChannels = [
  { name: "Angel", subs: "15k subs" },
  { name: "Thiago", subs: "20k subs" },
  { name: "Jeremias", subs: "12k subs" },
  { name: "Genaro", subs: "30k subs" },
  { name: "Maria", subs: "25k subs" },
  { name: "Ana", subs: "18k subs" },
  { name: "Beatriz", subs: "22k subs" },  
  { name: "Carlos", subs: "28k subs" },
  { name: "Diana", subs: "14k subs" },
  { name: "Eduardo", subs: "16k subs" },
  { name: "Fernanda", subs: "19k subs" }, 
  { name: "Gustavo", subs: "21k subs" },
  { name: "Helena", subs: "17k subs" },
  { name: "Isabel", subs: "13k subs" },
  { name: "João", subs: "29k subs" },
  { name: "Lucas", subs: "24k subs" },
  { name: "Nicolas", subs: "27k subs" },
];

const shorts = [
  { nameshort: "Funny Cats", shortviews: "9k views • 1d ago" },
  { nameshort: "Amazing Dogs", shortviews: "12k views • 2d ago" },
  { nameshort: "Wildlife Wonders", shortviews: "15k views • 3d ago" },
  { nameshort: "Travel Vlogs", shortviews: "20k views • 4d ago" },
  { nameshort: "Tech Reviews", shortviews: "8k views • 5d ago" },
  { nameshort: "Cooking Tips", shortviews: "11k views • 6d ago" },
  { nameshort: "Fitness Routines", shortviews: "14k views • 7d ago" },
  { nameshort: "Gaming Highlights", shortviews: "13k views • 9d ago" },
  { nameshort: "Music Covers", shortviews: "10k views • 10d ago" },
  { nameshort: "Art Tutorials", shortviews: "6k views • 11d ago" },
];

const videos = [
  { namevideo: "Cats Playing", videoviews: "5k views • 1d ago" },
  { namevideo: "Dogs Barking", videoviews: "8k views • 2d ago" },
  { namevideo: "Birds Singing", videoviews: "10k views • 3d ago" },
  { namevideo: "Fish Swimming", videoviews: "7k views • 4d ago" },
  { namevideo: "Hamsters Running", videoviews: "6k views • 5d ago" },
  { namevideo: "Turtles Crawling", videoviews: "3k views • 7d ago" },
  { namevideo: "Lizards Sunbathing", videoviews: "2k views • 8d ago" },
];

function App() {
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

    <Blocks>
    <Subtitle subtitle="Catscribers"/>
    <Container>
      {videos.map((video, index) => (
        <Video
          key={index}
          namevideo={video.namevideo}
          videoviews={video.videoviews}
        />    
      ))}           
    </Container>
    </Blocks>
    <Ads/>
    <NewButton btntitle="Publish"/>
    </main>
    </>
  )
}

export default App
