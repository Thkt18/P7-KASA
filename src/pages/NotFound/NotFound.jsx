import styled from "styled-components"
import { media } from "../../style/breakpoint"
import theme from "../../style/theme"

export default function NotFound () {
    return (
        <NotFoundDiv>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundError>Oups! La page que vous demandez n'existe pas.</NotFoundError>
            <p><NotFoundReturn href="/">Retourner sur la page d'accueil</NotFoundReturn></p>
        </NotFoundDiv>
    )
}

const NotFoundReturn = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.primary};
    text-decoration: underline;
`

const NotFoundError = styled.h2`
    font-size: 36px;
    font-weight: 500;
    color: #ff6060;
    padding-top: -25px;

    ${media.mobile} {
        font-size: 18px;
        justify-content: center;
        width: 50%;
        border: ${theme.border};
    }

`


const NotFoundTitle = styled.h1`
    font-size: 200px;
    font-weight: 700;
    color: #ff6060;
    margin: 2% 0 2% 0;

    @media (max-width: 767px) and (min-width: 345px) {
        font-size: 96px;
        margin: 15% 0 8% 0;
    }
`

const NotFoundDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 94%;
    margin: 0 3% 0 3%;
    height: auto;
`  