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


function YourChannel() {
    const tabLabels = ['Home', 'Videos', 'Shorts', 'Playlists', 'Posts'];
    const [activeTab, setActiveTab] = useState(0);
    const tabContents = [
        <HomeTab />,
        <VideosTab />,
        <div>Contenido de la pestaña de Shorts</div>,
        <div>Contenido de la pestaña de Playlists</div>,
        <div>Contenido de la pestaña de Posts</div>
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
