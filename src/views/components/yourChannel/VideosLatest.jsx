import { videoLatest } from "../../../assets/data/Data";
import ButtonCarousel from "../home/ButtonCarousel";
import Container from "../home/Container";
import Video from "../home/Video";
import { useRef } from "react";

function VideosLatest(){
        const videosLatestRef = useRef(null);
        //  const videosToShow = videoLatest.slice(0, 24);
    return(
        <Container id="latestSection" className="content-table-videos">
            <Container className="carousel-container">
                <ButtonCarousel className="carousel-btn left" direction="left" carouselRef={videosLatestRef} />
                <Container className="latest-container" id="recommendations-latest" ref={videosLatestRef}>
                    {videoLatest.map((video, index) => (
                        <Video
                            key={index}
                            photo={video.photo}
                            namevideo={video.namevideo}
                            videoviews={video.videoviews}
                        />
                    ))}
                </Container>
                <ButtonCarousel className="carousel-btn right" direction="right" carouselRef={videosLatestRef} />
            </Container>
        </Container>
    );
}

export default VideosLatest;