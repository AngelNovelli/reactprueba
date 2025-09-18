import FooterItem  from './FooterItem.jsx'
import UlContainer from './UlContainer.jsx'
import FooterText from './FooterText.jsx'
import Container from './Container.jsx'
import { textfooter } from '../../../assets/data/Data.jsx';

function Footer() {
    return (
        <Container className="footer">
            <UlContainer>
                {textfooter.map((footer, index) => (
                    <FooterItem
                        key={index}
                        textfooter={footer.textfooter}
                    />
                ))}
            </UlContainer>
            <FooterText text="© 2025 CaTube. All rights reserved." />
        </Container>
    );
}

export default Footer