import Sidebar from "./components/home/Sidebar";
import Youprofile from "./components/you/Youprofile";
import Sections from "./components/home/Sections";
import Footer from "./components/home/Footer";
import Sectionyou from "./components/you/Sectionyou";
import deleted from "../assets/media/yourChannel_media/Delete.png"
import ViewMoreAllSection from "./components/you/ViewMoreAllSection";
import { historyvideo, playlistvideo, viewlatervideo, likedvideo, ViewLaterData, myPlaylistsData } from "../assets/data/Data";
import { useRef } from "react";
import '../styles/Global_components.css'
import '../styles/Home.css'
import '../styles/YourChannel.css'
import '../styles/You.css'

function You() {
    const HistoryRef = useRef(null);
    const PlaylistRef = useRef(null);
    const ViewLaterRef = useRef(null);
    const LikedRef = useRef(null);

    return (
        <>
            <body>
                <Sidebar>
                </Sidebar>

                <main className="main-content">
                    <Youprofile></Youprofile>
                    <Sectionyou btnclass="btn-trash" section="trending" subtitle="History" ref={HistoryRef} render={historyvideo} startExpanded={true} ><img src={deleted} alt="Delete history" /> </Sectionyou>
                    <Sectionyou btnclass="btn-viewall-playlists" btntitle="View more" section="trending" subtitle="Playlists" ref={PlaylistRef} render={playlistvideo} expandedContent={<ViewMoreAllSection render={myPlaylistsData}/>}>   </Sectionyou>
                    <Sectionyou btnclass="btn-viewall-playlists" btntitle="View all" section="trending" subtitle="View Later" ref={ViewLaterRef} render={viewlatervideo} expandedContent={<ViewMoreAllSection render={ViewLaterData} />}> </Sectionyou>
                    <Sections section="trending" subtitle="Liked" ref={LikedRef} render={likedvideo} type="video" ></Sections>
                    <Footer></Footer>
                </main>
            </body>
        </>
    );
}

export default You;