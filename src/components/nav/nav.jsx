import styled from "styled-components";
import { media } from "../../style/breakpoint";
import theme from "../../style/theme";

export default function Nav() {
    return (
        <div className='navbar'>
            <UL>
                <li><A className='navbar__list' href="/">Accueil</A></li>
                <li><A className='navbar__list' href="/about">A propos</A></li>
            </UL>
        </div>
    );
}



const UL = styled.ul`
    display: flex;
    gap: 10px;
    font-size: 12px;
    text-transform: uppercase;
    

    ${media.desktop} {
        font-size: 24px;
        gap: 57px; /* Espace entre 'Accueil' et 'A propos', 57px comme sur la maquette */
        text-transform: none;
    }
`


const A = styled.a`
    color: ${theme.primary};
    &:hover {
        text-decoration: underline;
    }

`