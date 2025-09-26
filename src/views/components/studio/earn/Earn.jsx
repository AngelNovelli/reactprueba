import EarnOption from "./EarnOption";
import Container from "../../hooks/Container";
import NewButton from "../../home/Button";

function Earn() {
    return (
       <>
            <h1>Earn CaTube</h1>
            <hr></hr>
            <Container className="content">
                <Container className="earn-options">
                    <EarnOption
                        title="Membership"
                        subtitle="Grow your community and earn money monthly"
                        description="Offer exclusive benefits for paid members that will excite your audience. Users can join from your video and channel pages. You'll receive 70% of the net revenue."
                    />

                    <EarnOption
                        title="Donations"
                        description="Donations help you engage with your community and feel supported."
                    />

                    <EarnOption
                        title="Store"
                        subtitle="You can have your own integrated store in Catube."
                    >
                        <NewButton type="button" id="storeButton" btntitle=" Your Store"></NewButton>
                    </EarnOption>
                </Container>
                <div className="earn-requirements">
                    <h3>Requirements to Monetize</h3>
                    <h4>Subscribers</h4>
                    <div className="progress-bar-container">
                        <div className="progress-bar-track">
                            <div className="progress-bar-fill" id="subscribersProgressBarFill"></div>
                        </div>
                    </div>
                    <div className="progress-bar-labels">
                        <span id="subscribersProgressStartLabel">Subscribers</span>
                        <span id="subscribersProgressEndLabel">Target: 500</span>
                    </div>
                    <h4>Videos Uploaded</h4>
                    <div className="progress-bar-container">
                        <div className="progress-bar-track">
                            <div className="progress-bar-fill" id="videosUploadedProgressBarFill"></div>
                        </div>
                    </div>
                    <div className="progress-bar-labels">
                        <span id="videosUploadedProgressStartLabel">Videos</span>
                        <span id="videosUploadedProgressEndLabel">Target: 3</span>
                    </div>
                    <h4>Valid Public Watch Hours</h4>
                    <div className="progress-bar-container">
                        <div className="progress-bar-track">
                            <div className="progress-bar-fill" id="watchHoursProgressBarFill"></div>
                        </div>
                    </div>
                    <div className="progress-bar-labels">
                        <span id="watchHoursProgressStartLabel">Hours</span>
                        <span id="watchHoursProgressEndLabel">Target: 3000</span>
                    </div>
                    <div className="apply-btn-container">
                        <button type="button" id="applyButton" disabled>Apply</button>
                    </div>
                </div>
            </Container>
            </>
    );
}

export default Earn;