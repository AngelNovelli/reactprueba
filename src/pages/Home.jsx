import './Home.css'
import './Global_components.css'
import NewButton from '../components/home/Button.jsx'
import Ads from '../components/home/Ads.jsx'
import Sidebar from '../components/home/Sidebar.jsx'
import Footer from '../components/home/Footer.jsx'
import Recommendations from '../components/home/Recommendations.jsx'
import Subscriptions from '../components/home/Subscriptions.jsx'
import Trending from '../components/home/Trending.jsx'
import PopularChannels from '../components/home/PopularChannels.jsx'


function Home() {

  return (
    <>
<body>
    <Sidebar/>
    <main className="main-content">
    <Ads/>

    <PopularChannels/>

    <Trending/>

    <Subscriptions/>
    
    <Recommendations/>

    <Ads/>

    <Footer/>

    <NewButton btntitle="Publish"/>
    </main>
    </body>
    </>
  )
}

export default Home
