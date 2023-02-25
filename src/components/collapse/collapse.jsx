import { useState } from 'react'
import styled from 'styled-components';

// style
import slideup from "./../../assets/slideUp.svg";

function Collapse ({ props, title }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
      isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    const displayProps = () => {
      if (typeof props === 'object') {
        return (
          <ul>
            {props.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      } else {
        return <CollapseP>{props}</CollapseP>
      }
    }
  
    return (
      <CollapseDiv>
        <CollapseTop className="collapse_top" onClick={() => handleClick()}>
          <CollapseTitle>{title}</CollapseTitle>
          <SlideImg type="button">
            {isOpen ? (
              <img src={slideup} alt="" />
            ) : (
              <img src={slideup} alt="" />
            )}
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
    )
  }

  export default Collapse

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
`

const SlideImg = styled.button`
    background-color:#f96060;
    border: none;
    border-radius: 12px;
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