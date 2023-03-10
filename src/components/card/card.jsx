import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import Logement from '../../data/data_logement.json'
import { media } from '../../style/breakpoint'
import theme from '../../style/theme'


function Card () {

    const navigate = useNavigate() // Cette fonction utilise "useNavigate" de la bibliothèque React Router pour naviguer vers la page de détails de chaque logement lorsqu'on clique dessus.

    return (
        <CardHome>
            {Logement.map((data) => { // La liste de logements est obtenue à partir du fichier data_logement.json, qui contient l'ID, l'image Cover et le Tile.
                return (
                    <CardHomeArticle key={data.id}
                        onClick={() => navigate(`/logement/${data.id}`)}> 
                        {/* Pour chaque objet "data" du tableau "Logement", la fonction map crée un élément de 
                        carte avec une image et un titre, et lui associe une fonction de rappel qui navigue vers
                         la page de détails du logement en utilisant son "id".*/}
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
color: ${theme.secondary};
font-weight: 500;
font-size: 18px;
line-height: 25px;
width: 50%;
margin-left: 3%;
`

const CardHomeText = styled.div`
    height: 100%;
    width: 295px;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 10px;
    z-index: 2;

    ${media.desktop} {
        width: 300px;  
    }
`

const CardImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    position: absolute;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    filter: brightness(0.6);
    ${media.desktop} {
        height: 340px;
        width: 340px;
    }

`

const CardHomeArticle = styled.article`
    height: 355px;
    width: 94%;
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
            ${media.desktop} {
                height: 340px;
                width: 340px;
                margin: 25px 30px 25px 30px;
            }
`

const CardHome = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border-radius:25px;
    margin: 5% 0;
    padding: 0px;
    background-color: ${theme.backgroundCard};

    ${media.desktop} {
        margin: 60px 0 50px 0;
    }
`
