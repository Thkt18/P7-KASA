import styled from 'styled-components';
import { media } from '../../style/breakpoint';
import theme from '../../style/theme';

function Banner(props) {

  return (

    <DIV className='banner'>
      <IMG className="banner_img" src={props.img} alt="Background banner" />
      {/* Il y a une image à l'intérieur de la bannière avec une source dynamique
       (props.img) et un texte alternatif. */}
      <TEXT>
      {/* Il y a un élément de texte, également à l'intérieur de la bannière, contenant un élément de titre avec
       la classe CSS "banner_text" et un contenu de texte dynamique (props.title). */}
      <TITRE className="banner_text">{props.title}</TITRE>
      </TEXT>
    </DIV>

  )
};

export default Banner;


const TITRE = styled.p`
    font-size: 24px;
    line-height: 100%;
    width: 222px;
    height: 48px;
    font-weight: 500;
        ${media.desktop} {
            font-size: 48px;
            width: 80%;
        }
`

const TEXT = styled.div`
    color: ${theme.secondary};
    display: block;
    justify-content: start;
    white-space: pre-wrap;
    width: 90%;
    margin: 0;
    margin-left: 3%;
    justify-content: center;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
        ${media.desktop} {
            display: flex;
            position: absolute;
            margin-left: 15%;
            width:75%;
     }
`

const   DIV = styled.div`
    position: relative;
    align-self: center;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    width: 100%;
`

const IMG = styled.img`
    height: 111px;
    width: 94%;
    object-fit: cover;
    filter: brightness(60%);
    border-radius: 10px;
    ${media.desktop} {
        height: 223px;
    }
`
