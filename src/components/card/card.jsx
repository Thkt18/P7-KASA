import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import Logement from '../../data/data_logement.json'

function Card () {

    const navigate = useNavigate()

    return (
        <CardHome>
            {Logement.map((data) => {
                return (
                    <CardHomeArticle key={data.id}
                        onClick={() => navigate(`/logement/${data.id}`)}>
                        <CardImg src={data.cover} alt='logement' />
                        <CardHomeText>
                            <CardHomeTextTitle>{data.title}</CardHomeTextTitle>
                        </CardHomeText>
                    </CardHomeArticle>
                )
            })}
        </CardHome>
    )
}

export default Card


const CardHomeTextTitle = styled.h2`
color: #ffffff;
text-decoration: none;
font-weight: 500;
font-size: 18px;
line-height: 22px;
width: 50%;
margin-left: 3%;
`

const CardHomeText = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 10px;
    z-index: 2;

    @media (min-width: 345px) and (max-width: 767px) {
        height: 100%;
        width: 335px;
    }

    @media (min-width: 768px) and (max-width: 1247px) {
        height: 100%;
    width: 100%;
    }
`

const CardImg = styled.img`
    height: 340px;
    width: 340px;
    border-radius: 10px;
    background-color: #ffffff;
    object-fit: cover;
    position: absolute;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    filter: brightness(0.6);
    @media (min-width: 345px) and (max-width: 767px) {
        height: 355px;
        width: 100%;
    }

    @media (min-width: 768px) and (max-width: 1247px) {
        height: 255px;
        width: 335px;
    }
`

const CardHomeArticle = styled.article`
    height: 340px;
    width: 340px;
    border-radius: 10px;
    background-color: #ffffff;
    margin: 20px 0;
    background-size: cover;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;    
        &:hover {
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
        }
    
    @media (min-width: 345px) and (max-width: 767px) {
        height: 355px;
        width: 94%;
    }

    @media (min-width: 768px) and (max-width: 1247px) {
        height: 255px;
        width: 335px;
    }
`

const CardHome = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #f6f6f6;
    border-radius:25px;
    margin: 60px 0 50px 0;
    padding: 56px 50px;

    @media (min-width: 345px) and (max-width: 767px) {
        margin: 5% 0;
        padding: 0px;
        background-color: #ffffff;
    }

    @media (min-width: 768px) and (max-width: 1247px) {
        margin: 0.5em 0em;
        padding: 0px;
        background-color: #ffffff;
    }
`
