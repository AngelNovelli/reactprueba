import angel from '../assets/angel.jpg';

function Profile(props){
    return(
    <div className="profile">
    <img className="profile-photo" src={angel} alt="fotodelcanal" />
    <p className="name-channel">{props.namechannel}</p>
    <p className="subs-channel">{props.subschannel}</p>
    </div>
    );
}
export default Profile;