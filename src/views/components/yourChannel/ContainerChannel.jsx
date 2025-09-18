import foto from '../../../assets/media/yourChannel_media/thumbnails/cabildo.png'

function ContainerChannel() {
    return (
        <div className="container-channel">
            <div className="principal-video-container">
                <div className="principal-video"> <img className="principal-video" src={foto} alt="mini"></img> </div>
                <div className="text-principal-video">
                    <h2>Title of video</h2>
                    <div className="row-principal">
                        <p className="space">0 views</p>
                        <p className="space">0 years ago</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat asperiores voluptatibus laboriosam
                        consectetur quidem assumenda expedita et, culpa temporibus laborum nulla. Fugit sapiente blanditiis nulla
                        repellendus </p>
                </div>
            </div>
        </div>
    );
}

export default ContainerChannel;