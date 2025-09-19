import "../styles/YourChannel.css";
import "../styles/Home.css";
import "../styles/Global_components.css"
import Sidebar from "../views/components/home/Sidebar";
import Banner from "../views/components/yourChannel/Banner";
import Profile from "../views/components/yourChannel/Profile";
import ContainerButton from "../views/components/yourChannel/ContainerButton";
import HomeTab from "./components/yourChannel/HomeTab";
import VideosTab from "./components/yourChannel/VideosTab";
import { useState } from "react";
import ShortsTab from "./components/yourChannel/ShortsTab";
import Playlists from "./components/yourChannel/Playlists";
import PostsTab from "./components/yourChannel/PostsTab";


function YourChannel() {
    const tabLabels = ['Home', 'Videos', 'Shorts', 'Playlists', 'Posts'];
    const [activeTab, setActiveTab] = useState(0);
    const tabContents = [
        <HomeTab />,
        <VideosTab />,
        <ShortsTab />,
        <Playlists />,
        <PostsTab />
    ];
    return (

        <>
            <body>
                <Sidebar>
                </Sidebar>

                <main className="main-content">
                    <Banner></Banner>
                    <Profile></Profile>
                    <ContainerButton containerName="container-button" tabs={tabLabels} activeTabIndex={activeTab} onTabClick={setActiveTab} buttonClass="nav-btn" ></ContainerButton>

                    <div className="tab-content-container">
                        {tabContents[activeTab]}
                    </div>
                </main>
            </body>
        </>
    );
}

export default YourChannel;
