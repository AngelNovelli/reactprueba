import NewButton from "../../home/Button";

function InfoContainer() {
    return (
        <div className="info-customization-container">
            <span>Name</span>
            <input type="text" id="channel-name-input" className="rectangle-customization" placeholder="name"></input>

            <span>Handle</span>
            <input type="text" id="channel-handle-input" className="rectangle-customization" placeholder="@name"></input>

            <span>Description</span>
            <input type="text" id="channel-description-input" className="rectangle-customization-description" placeholder="Description"></input>
            
            <NewButton id="publish-changes-btn" btnclass="custom-file-label" btntitle="Publish"></NewButton>
        </div>

    );
}

export default InfoContainer;