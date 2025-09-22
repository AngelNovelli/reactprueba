import Sidebar from "./components/home/Sidebar";
import Sections from "./components/home/Sections";
import { useRef } from 'react';
import { trendingshorts } from "../assets/data/Data";
import Title from "./components/Trending.jsx/Title";
import Footer from "./components/home/Footer";
import Block from "./components/Trending.jsx/Block";
import VideoCard from "./components/Trending.jsx/VideoCard";
import '../styles/Global_components.css'
import '../styles/Home.css'
import '../styles/Trending.css'

function Trending (){
    const shortsRef = useRef(null);
    return(
        <>
            <body>
                <Sidebar>
                </Sidebar>

                <main className="main-content">
                    <Title class="title-trending-container" title="Trending"></Title>  
                    <Sections section="trending-shorts" subtitle="Trending Shorts" ref={shortsRef} render={trendingshorts} type="short"></Sections>
                    <Block section="trending-videos" subtitle="Trending Videos">
                        <VideoCard></VideoCard>
                    </Block>
                    <Footer></Footer>
                </main>
            </body>
        </>
    );
}

export default Trending;