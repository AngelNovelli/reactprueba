// import { useState } from "react";
import "../styles/YourChannel.css";
import "../styles/Home.css";
import "../styles/Global_components.css";
import Sidebar from './components/home/Sidebar.jsx'

function Studio(){
    // // const tabLabels = ['Dashboard', 'Content', 'Analytics', 'Playlists', 'Posts'];
    // // const [activeTab, setActiveTab] = useState(0);
    // // const tabContents = [
    
    // ];
    return(
        <>
            <body>
                <Sidebar>
                </Sidebar>

                {/* <main className="main-content">
                    <div className="tab-content-container">
                        {tabContents[activeTab]}
                    </div>
                </main> */}
            </body>
        </>
    );
}

export default Studio;