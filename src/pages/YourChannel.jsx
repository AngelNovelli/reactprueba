import Sidebar from "../components/home/Sidebar";
import "./YourChannel.css";
import "./Home.css";
import "./Global_components.css"
import Banner from "../components/yourChannel/Banner";
import Profile from "../components/yourChannel/Profile";
import Container from "../components/home/Container";
import ContainerButton from "../components/yourChannel/ContainerButton";
import ContainerChannel from "../components/yourChannel/ContainerChannel";

function YourChannel() {
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
                </main>
            </body>
        </>
    );
}

export default YourChannel;
