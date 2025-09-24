import Container from "../home/Container";
import NewButton from "../home/Button";
import {lcacommunityData } from "../../../assets/data/Data";

function LcaCommunity() {
    return (
        <Container className="lca-community">
            <NewButton btnclass="btn-community" btntitle="Reply" ></NewButton>
            <Container>
                {lcacommunityData.map((item)=>(
                <img src={item.src} alt={item.alt}></img>
                ))}
            </Container>
        </Container>
    );
}

export default LcaCommunity;