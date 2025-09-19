import ContainerButton from "./ContainerButton"
import VideosLatest from "./VideosLatest";
import Container from "../home/Container";
import { useState } from "react";

function VideosTab() {
    const tabvs = ['Latest', 'Popular', 'Oldest'];
    const [activeTab, setActiveTab] = useState(0);

    const tabContents = [
        <VideosLatest/>,
        <div>Contenido de la pestaña de Popular</div>,
        <div>Contenido de la pestaña de Oldest</div>
    ];
    return (
        <Container className="video-main-content">
        <ContainerButton tabs={tabvs} activeTabIndex={activeTab} onTabClick={setActiveTab} buttonClass="nav-btn-videos" ></ContainerButton>
        
        <div className="tab-content-container">
                        {tabContents[activeTab]}
        </div>
        </Container>
    );
}

export default VideosTab;