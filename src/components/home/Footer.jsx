import FooterItem  from '../home/FooterItem.jsx'
import UlContainer from '../home/UlContainer.jsx'
import FooterText from '../home/FooterText.jsx'
import { textfooter } from '../../assets/data/Data.jsx';
import Container from '../home/Container.jsx'

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