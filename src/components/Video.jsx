
import video from '../assets/pinterest_swap_challenge.jpg';

function Video(props){
return (
        <div className="video-card">
        <img className="video-thumb" src={video} alt="fotodelvideo" />
        <p className="name-channel">{props.namevideo}</p>
        <p className="subs-channel">{props.videoviews}</p>
        </div>
);
}
export default Video;