import "../styles/YourChannel.css";
import "../styles/Home.css";
import "../styles/Global_components.css"
import Sidebar from "../views/components/home/Sidebar";
import Banner from "../views/components/yourChannel/Banner";
import Profile from "../views/components/yourChannel/Profile";
import Container from "../views/components/home/Container";
import ContainerButton from "../views/components/yourChannel/ContainerButton";
import ContainerChannel from "../views/components/yourChannel/ContainerChannel";
import Sections from "../views/components/home/Sections"
import Footer from "../views/components/home/Footer"
import { useRef } from "react";
import { foryouvideos, shortsyc, videosyc } from "../assets/data/Data";

function YourChannel() {
    const foryouRef = useRef(null);
    const videosRef = useRef(null);
    const shortsRef = useRef(null);
    return (
        <>
            <body>
                <Sidebar>
                </Sidebar>

                <main className="main-content">
                    <Banner></Banner>
                    <Profile></Profile>
                    <ContainerButton></ContainerButton>
    
                    <Container className="content-table">
                        <ContainerChannel>
                        </ContainerChannel>
                    </Container>
                    <Sections section="subscriptions" subtitle="For you" ref={foryouRef} render={foryouvideos} type="video"></Sections>
                    <Sections section="subscriptions" subtitle="Videos" ref={videosRef} render={videosyc} type="video"></Sections>
                    <Sections section="subscriptions" subtitle="Shorts" ref={shortsRef} render={shortsyc} type="short"></Sections>

                    <Footer></Footer>
                </main>
            </body>
        </>
    );
}

export default YourChannel;
