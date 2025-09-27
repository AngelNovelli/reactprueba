import NewButton from "../../home/Button";

function InfoContainer() {
    return (
        <div className="info-customization-container">
            <span>Name</span>
            <input type="text" id="channel-name-input" className="rectangle-customization" placeholder="name"/>

            <span>Handle</span>
            <input type="text" id="channel-handle-input" className="rectangle-customization" placeholder="@name"/>

            <span>Description</span>
            <input type="text" id="channel-description-input" className="rectangle-customization-description" placeholder="Description"/>
            
            <NewButton id="publish-changes-btn" btnclass="custom-file-label" btntitle="Publish"></NewButton>
        </div>

    );
}

export default InfoContainer;