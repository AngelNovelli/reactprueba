import short from '../assets/shorts.jpg';

function Short(props){
return (
     <div className="short-card">
        <img className="short" src={short} alt="fotodelshort" />
        <p className="name-channel">{props.nameshort}</p>
        <p className="subs-channel">{props.shortviews}</p>
        </div>
);
}
export default Short;