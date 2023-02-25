import styled from 'styled-components';
import Logo from '../../assets/logo_footer.png';

function Footer () {
    return (
        <FooterBlock>
            <img src={Logo} alt="Logo" />
            <FooterSpan>© 2020 Kasa. All rights reserved</FooterSpan>
        </FooterBlock>
    )
}

export default Footer;

const FooterBlock = styled.footer`
    display: flex;
    flex-direction: column;
    height: 150px;
    background-color: #000;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
`

const FooterSpan = styled.span`
    padding-top: 30px;
    color: #fff;
    font-size: 24px;

    @media (max-width: 768px) and (min-width: 345px) {
        font-size: 12px;
    }
`
