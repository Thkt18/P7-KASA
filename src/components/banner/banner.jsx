// import BannerImg from '../../assets/banner.png';
import styled from 'styled-components';

function Banner(props) {

  return (

    <DIV className='banner'>
      <IMG className="banner_img" src={props.img} alt="BAckground banner" />
      <TEXT>
      <TITRE className="banner_text">{props.title}</TITRE>
      </TEXT>
    </DIV>

  )
};

export default Banner;

const TITRE = styled.p`
    font-weight: 500;
    font-size: 48px;
    line-height: 68.45px;
    margin-right: 0.25em;

    @media (min-width: 345px) and (max-width: 767px) {
        font-size: 24px;
        line-height: 10px;
    }

    @media (min-width: 768px) and (max-width: 1247px) {
        font-size: 34px;
    }
`

const TEXT = styled.div`
    color: #fff;
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    margin: 0;
    justify-content: center;

    @media (min-width: 345px) and (max-width: 767px) {
        display: block;
        margin-left: 15%;
        white-space: pre-wrap;
        justify-content: start;
        
    }
`

const   DIV = styled.div`
    position: relative;
    align-self: center;
    display: flex;
    justify-content: center;
    margin-top: 5%;
`

const IMG = styled.img`
    border-radius: 10px;
    height: 223px;
    width: 94%;
    object-fit: cover;
    filter: brightness(60%);

    @media (min-width: 345px) and (max-width: 767px) {
        height: 111px;
    }
`


