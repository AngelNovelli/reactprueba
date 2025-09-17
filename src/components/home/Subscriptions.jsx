import Video from '../home/Video.jsx'
import Container from '../home/Container.jsx'
import Subtitle from '../home/Subtitle.jsx'
import ButtonCarousel from '../home/ButtonCarousel.jsx'
import { videos } from '../../assets/data/Data.jsx';
import { useRef } from 'react';

function Subscriptions() {
    const catsRef = useRef(null);
    return (
        <Container className="subscriptions">
            <Subtitle subtitle="Catscribers" />
            <Container className="carousel-container">
                <ButtonCarousel className="carousel-btn left" direction="left" carouselRef={catsRef} />
                <Container className="carousel-subs" ref={catsRef}>
                    {videos.map((video, index) => (
                        <Video
                            key={index}
                            namevideo={video.namevideo}
                            videoviews={video.videoviews}
                            photo={video.photo}
                        />
                    ))}
                </Container>
                <ButtonCarousel className="carousel-btn right" direction="right" carouselRef={catsRef} />
            </Container>
        </Container>
    );
}

export default Subscriptions;