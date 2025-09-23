import Sidebar from "./components/home/Sidebar";
import Sections from "./components/home/Sections";
import { useRef } from 'react';
import { educationshorts } from "../assets/data/Data";
import Title from "./components/Trending.jsx/Title";
import Footer from "./components/home/Footer";
import Block from "./components/Trending.jsx/Block";
import VideoCard from "./components/Trending.jsx/VideoCard";
import '../styles/Global_components.css'
import '../styles/Home.css'
import '../styles/Trending.css'

function Education() {
    const shortsRef = useRef(null);
    return (
        <>
            <body>
                <Sidebar>
                </Sidebar>
                <main className="main-content">
                    <Title class="title-trending-container" title="Education"></Title>
                    <Block section="trending-videos" subtitle="Education Videos">
                        <VideoCard></VideoCard>
                    </Block>
                    <Sections section="trending-shorts" subtitle="Education Shorts" ref={shortsRef} render={educationshorts} type="short"></Sections>
                    <Footer></Footer>
                </main>
            </body>
        </>
    );
}

export default Education;