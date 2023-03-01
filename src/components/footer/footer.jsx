import styled from 'styled-components';
import Logo from '../../assets/logo_footer.png';
import { media } from '../../style/breakpoint';
import theme from '../../style/theme';

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
    height: 209px;
    background-color: #000;
    align-items: center;
    justify-content: center;
`

const FooterSpan = styled.span`
    padding-top: 62px;
    color: ${theme.secondary};
    font-size: 12px;

    ${media.desktop} {
        font-size: 24px;
        padding-top: 66px;
    }
`
