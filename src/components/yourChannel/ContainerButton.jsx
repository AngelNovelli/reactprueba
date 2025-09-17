function ContainerButton() {
    return (
        <div className="container-button">
            <ul className="content-ul">
                <li><button type="button" className="nav-btn active" data-section="homeSection">Home</button></li>
                <li><button type="button" className="nav-btn" data-section="videosSection">Videos</button></li>
                <li><button type="button" className="nav-btn" data-section="shortsSection">Shorts</button></li>
                <li><button type="button" className="nav-btn" data-section="playlistsSection">Playlists</button></li>
                <li><button type="button" className="nav-btn" data-section="postsSection">Posts</button></li>
            </ul>
        </div>
    );
}

export default ContainerButton;