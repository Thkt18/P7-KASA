import { useState } from 'react';
import styled, { css } from 'styled-components';

// style
import slideup from './../../assets/slideUp.svg';


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
          <SlideIconUp src={slideup} isOpen={isOpen} alt="" />
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


const SlideImg = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: auto;
  margin-right: 1%;
  cursor: pointer;
`;

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





const CollapseDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 45%;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 768px) and (min-width: 345px) {
        width: 100%;
        
    }
`

const CollapseTop = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    background-color:#f96060;
    border-radius: 12px;
    z-index: 2;

    @media (max-width: 768px) and (min-width: 345px) {
      margin-bottom:20px;
      border-radius: 5px;
    }
`

const CollapseTitle = styled.h3`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 3%;
    color: white;
    font-size: 16px;

    @media (max-width: 768px) and (min-width: 345px) {
      font-size: 13px;
    }
`

const OpenCollapse = styled.div`
    display: flex;
    width: 100%;
    background-color: #D7D7CD;
    color: #FF6060;
    margin-top: -15px;
    padding-top : 15px;
    border-radius: 12px;
    z-index: 1;

    @media (max-width: 768px) and (min-width: 345px) {
      border-radius: 5px;
      margin-top: -25px;
      margin-bottom: 25px;
    }
`

const CollapseP = styled.p`
    width: 94%;
    margin: 3%;

    @media (max-width: 768px) and (min-width: 345px) {
      font-size: 12px;
    }
`

const CollapseUl = styled.ul`
    width: 94%;
    margin: 3%;
    list-style-type: none;
    padding: 0;
`

const CollapseLi = styled.li`
    width: 94%;
    list-style-type: none;
    padding: 0;
`