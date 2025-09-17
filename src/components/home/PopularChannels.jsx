import Profile from '../home/Profile.jsx'
import Container from '../home/Container.jsx'
import Subtitle from '../home/Subtitle.jsx'
import ButtonCarousel from '../home/ButtonCarousel.jsx'
import { popularChannels } from '../../assets/data/Data.jsx';
import { useRef } from 'react';

function PopularChannels() {
    const popularChannelsRef = useRef(null);
    return (
        <Container className="popular-channels">
            <Subtitle subtitle="Popular Channels" />
                <Container className="carousel-container" >
                    <ButtonCarousel className="carousel-btn left" direction="left" carouselRef={popularChannelsRef} />
                        <Container className="carousel-channels" ref={popularChannelsRef}>
                        {popularChannels.map((channel, index) => (
                            <Profile
                            key={index}
                            namechannel={channel.name}
                            subschannel={channel.subs}
                            photo={channel.photo}
                            />
                        ))}
                        </Container>
                    <ButtonCarousel className="carousel-btn right" direction="right" carouselRef={popularChannelsRef} />
                </Container>
        </Container>);
}

export default PopularChannels;