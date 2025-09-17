import Short from '../home/Short.jsx'
import Container from '../home/Container.jsx'
import Subtitle from '../home/Subtitle.jsx'
import ButtonCarousel from '../home/ButtonCarousel.jsx'
import { shorts } from '../../assets/data/Data.jsx';
import { useRef } from 'react';

function Trending() {
    const shortsRef = useRef(null);
    return (
        <Container className="trending">
            <Subtitle subtitle="Shorts" />
            <Container className="carousel-container">
                <ButtonCarousel className="carousel-btn left" direction="left" carouselRef={shortsRef} />
                <Container className="carousel-trends" ref={shortsRef}>
                    {shorts.map((short, index) => (
                        <Short
                            key={index}
                            nameshort={short.nameshort}
                            shortviews={short.shortviews}
                            photo={short.photo}
                        />
                    ))}
                </Container>
                <ButtonCarousel className="carousel-btn right" direction="right" carouselRef={shortsRef} />
            </Container>
        </Container>
    );
}

export default Trending;