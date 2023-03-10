import Logo from '../../assets/logo.png'
import Nav from '../nav/nav'
import styled from "styled-components";
import { media } from "../../style/breakpoint";

export default function Header() {
    return (
        <HEADER>
            <h1>
                <a href="/"><IMG src={Logo} alt="KASA, logo du site"/></a>
            </h1>
            <Nav />
        </HEADER>
    )
}

const HEADER = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 3% 0 3%;
`
const IMG = styled.img`
    height: 47px;
    width: auto;
    ${media.desktop} {
        height: 68px;
    }
`