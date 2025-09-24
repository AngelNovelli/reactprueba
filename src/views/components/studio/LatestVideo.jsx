import { latesVideoIcons } from "../../../assets/data/Data";
import duki from "../../../assets/media/yourChannel_media/thumbnails/duki.jpeg"
import Container from "../home/Container";
import Subtitle from "../home/Subtitle";

function LatestVideo() {
    return (
        <>
            <Container className="dashboard-card">
                <Subtitle subtitle="Latest Video performance"></Subtitle>
                <img class="latest-video" src={duki}
                    alt="video"></img>
                <Container className="lca-dashboard">
                    {latesVideoIcons.map((item) => (
                        <>
                            <img src={item.icon} alt={item.alt}></img>
                            <div id="likeCount">{item.count}</div>
                        </>
                    ))
                    }
                </Container>
            </Container >
        </>
    );
}

export default LatestVideo;