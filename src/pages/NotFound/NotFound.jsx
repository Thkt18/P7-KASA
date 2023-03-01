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
    font-size: 14px;
    font-weight: 500;
    color: ${theme.primary};
    text-decoration: underline;
    ${media.desktop} {
        font-size: 18px;
    }
`

const NotFoundError = styled.h2`
    font-size: 18px;
    width: 280px;
    text-align: center;
    font-weight: 500;
    color: ${theme.primary};
    margin-top: -50px;
    margin-bottom: 100px;

    ${media.desktop} {
        font-size: 36px;
        margin-top: 0;
        width: 90%;
    }

`


const NotFoundTitle = styled.h1`
    font-size: 96px;
    font-weight: 700;
    color: ${theme.primary};
    margin: 15% 0 8% 0;

    ${media.desktop} {
        font-size: 288px;
        margin: 0;
    }
`

const NotFoundDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 94%;
    margin: 0 3% 8% 3%;
`  