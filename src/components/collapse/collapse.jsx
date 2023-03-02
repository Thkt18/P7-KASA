import { useState } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../style/breakpoint'
import theme from '../../style/theme'

// style
import slidedown from './../../assets/slideDown.svg';


function Collapse({  title, props, page ,}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const displayProps = () => {
    if (typeof props === 'object') {
      return (
        <CollapseUl>
          {props.map((item, index) => (
            <CollapseLi key={index}>{item}</CollapseLi>
          ))}
        </CollapseUl>
      );
    } else {
      return <CollapseP>{props}</CollapseP>;
    }
  };

  return (
    <CollapseDiv page={page}>
      <CollapseTop page={page} className="collapse_top" onClick={handleClick}>
        <CollapseTitle page={page}>{title}</CollapseTitle>
        <SlideImg>
          <SlideIconUp src={slidedown} isOpen={isOpen} alt="" />
        </SlideImg>
      </CollapseTop>
      {isOpen && (
        <OpenCollapse page={page} 
          className={
            isOpen ? 'collapse_content  collapse_active' : 'collapse_content'
          }
        >
          {displayProps()}
        </OpenCollapse>
      )}
    </CollapseDiv>
  );
}

export default Collapse;





const CollapseDiv = styled.div`
  width: 94%;

  ${props => props.page === 'Logement' && css`
    margin: auto auto 30px auto;

    ${media.desktop} {
      width: 45%;
      margin-top: 0;
    }
  `}

  ${props => props.page === 'About' && css`
    margin: 3% auto;
  `}
`;



const CollapseTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.primary};
    border-radius: 12px;
    z-index: 2;
    

      ${props => props.page === 'Logement' && css` 
        width: 100%;
        margin: auto;
        border-radius: 5px;
        
            ${media.desktop} { 
                border-radius: 10px;
                width: 100%;
                max-width: ${theme.maxWidth};
            }
        `}

        ${props => props.page === 'About' && css` 
          margin-bottom:0;
          margin: auto;
          width: 89%;
          max-width: ${theme.maxWidth};
          border-radius: 5px;

          ${media.desktop} {
            border-radius: 12px;
          }
        `}
`;


const CollapseTitle = styled.h3`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 3%;
    font-size: 13px;
    color: ${theme.secondary};

    ${props => props.page === 'Logement' && css`
      ${media.desktop} {
          font-size: 18px;
      }
    `}

    ${props => props.page === 'About' && css` 


        ${media.desktop} {
            font-size: 18px;
        }
    `}
`;


const OpenCollapse = styled.div`
    display: flex;
    background-color: ${theme.backgroundCollapse};
    color: ${theme.primary};
    padding-top : 15px;
    z-index: -1;
    position: relative;
    margin: -15px auto;

    ${props => props.page === 'Logement' && css`
          width: 100%;
          border-radius: 5px;

          ${media.desktop} {
            border-radius: 12px;
          }
    `}

    ${props => props.page === 'About' && css` 
          width: 89%;
          border-radius: 5px;
          margin-bottom: 5%;

          ${media.desktop} {
            border-radius: 12px;
          }
    `}
`;



const SlideImg = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: auto;
  margin-right: 3%;
  cursor: pointer;
`

const SlideIcon = styled.img`
  /* styles for the icon image */
`;

const rotate180 = css`
  transform: rotate(180deg);
  transition: transform 0.2s ease-in-out;
`;

const SlideIconUp = styled(SlideIcon)`
  ${props => props.isOpen && rotate180};
`;

const CollapseP = styled.p`
    width: 94%;
    margin: 3%;
    font-weight: 400;
    font-size: 12px;

    ${media.desktop} {
      font-size: 18px;
    }
`

const CollapseUl = styled.ul`
    width: 94%;
    margin: 3%;
    padding: 0;
`

const CollapseLi = styled.li`
    width: 94%;
    padding: 0;
    font-size: 12px;
    font-weight: 400;
    
    ${media.desktop} {
      font-size: 18px;
    }
`

