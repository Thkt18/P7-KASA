import styled from "styled-components";

export default function Nav() {
    return (
        <div className='navbar'>
            <UL>
                <LI><A className='navbar__list' href="/">Accueil</A></LI>
                <LI><A className='navbar__list' href="/about">A propos</A></LI>
            </UL>
        </div>
    );
}

const UL = styled.ul`
    display: flex;
    gap:57px;
    font-size: 20px;
    list-style: none;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 767px) and (min-width: 320px) {
        font-size: 15px;
        gap: 20px;
    }
`

const LI = styled.li `
liste-style: none;
`

const A = styled.a`
    text-decoration: none;
    color: #FF6060;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) and (min-width: 320px){
        text-transform: uppercase;
        font-size: 15px;
    }
`