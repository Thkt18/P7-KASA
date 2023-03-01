import { useState } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../style/breakpoint'
import theme from '../../style/theme'

// style
import slidedown from './../../assets/slideDown.svg';


function Collapse({ props, title }) {
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
    <CollapseDiv>
      <CollapseTop className="collapse_top" onClick={handleClick}>
        <CollapseTitle>{title}</CollapseTitle>
        <SlideImg>
          <SlideIconUp src={slidedown} isOpen={isOpen} alt="" />
        </SlideImg>
      </CollapseTop>
      {isOpen && (
        <OpenCollapse
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;

    ${media.desktop} {
        width: 45%;
        
    }
`

const CollapseTop = styled.div`

    width: 94%;
    display: flex;
    justify-content: center;
    margin: 15px auto 15px auto;
    background-color: ${theme.primary};
    border-radius: 12px;
    z-index: 2;
    border-radius: 5px;

    ${media.desktop} {
      margin-bottom:0;
      border-radius: 10px;
    }
`

const CollapseTitle = styled.h3`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 3%;
    color: ${theme.secondary};
    font-size: 13px;

    ${media.desktop} {
      font-size: 16px;
    }
`

const SlideImg = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: auto;
  margin-right: 1%;
  cursor: pointer;
`

const OpenCollapse = styled.div`
    display: flex;
    width: 94%;
    background-color: ${theme.backgroundCollapse};
    color: ${theme.primary};
    margin: -25px auto 25px auto;
    padding-top : 15px;
    border-radius: 5px;
    z-index: 1;

    ${media.desktop} {
      border-radius: 12px;
      margin-top: -15px;
      margin-bottom: 0;
    }
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