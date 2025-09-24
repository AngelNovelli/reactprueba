import "../styles/YourChannel.css";
import "../styles/Home.css";
import "../styles/Global_components.css";
import "../styles/Studio.css";
import SidebarStudio from "./components/studio/SidebardStudio.jsx";
import Footer from "./components/home/Footer.jsx";
import Dashboard from "./components/studio/Dashboard.jsx";
import Content from "./components/studio/Content.jsx";
import Analytics from "./components/studio/Analytics.jsx";
import Community from "./components/studio/Community.jsx";
import Store from "./components/studio/Store.jsx";
import Earn from "./components/studio/Earn.jsx";
import Customization from "./components/studio/Customization.jsx";
import RightMenu from "./components/studio/RightMenu.jsx";
import { useState } from "react";


function Studio() {
    const [activeTab, setActiveTab] = useState(0);
    const tabContents = [
        <Dashboard></Dashboard>,
        <Content></Content>,
        <Analytics></Analytics>,
        <Community></Community>,
        <Store></Store>,
        <Earn></Earn>,
        <Customization></Customization>
    ];
    return (
        <>
            <body>
                <main >
                    <SidebarStudio activeTabIndex={activeTab} onTabClick={setActiveTab}></SidebarStudio>
                    <div className="container-studio">
                        {tabContents[activeTab]}
                        <Footer footer="footer-studio"></Footer>
                    </div>
                    <RightMenu></RightMenu>
                </main>
            </body>
        </>
    );
}

export default Studio;