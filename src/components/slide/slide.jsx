import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from "../../style/breakpoint"
import theme from "../../style/theme"

import SlideLeft from "./../../assets/slideLeft.svg";
import SlideRight from "./../../assets/slideRight.svg";

function Carrousel({ slideshow }) {
    let [displayPicture, changePicture] = useState(0)
    let pictureNumber = slideshow.length
  
    const nextSlide = () => {
      if (displayPicture === 0) {
        changePicture(pictureNumber - 1)
      } else {
        changePicture(displayPicture - 1)
      }
      return changePicture
    }
  
    const prevSlide = () => {
      if (displayPicture === pictureNumber - 1) {
        changePicture((pictureNumber = 0))
      } else {
        changePicture(displayPicture + 1)
      }
      return changePicture
    }
  
    return (
      <SlideContent>
        {slideshow.map((picture, index) => {
          return (
            <div
              key={index}
              className={
                index === displayPicture
                  ? 'slide slideshow_active-picture'
                  : 'slide slideshow_inactive-picture'
              }
            >
              {index === displayPicture && (
                <SlidePicture src={picture} alt=""/>
              )}
            </div>
          )
        })}
        {/* if there's more than one picture  */} 
        {pictureNumber > 1 ? (
          <SlideArrows>
            <div className="slideshow_prev_arrow">
              <SlideLeftArrow
                onClick={nextSlide}>
                  <SlideImg src={SlideLeft} alt="" />
              </SlideLeftArrow>
            </div>
            <div className="slideshow_next_arrow">
              <SlideRightArrow
                onClick={prevSlide}>
                  <SlideImg src={SlideRight} alt="" />
              </SlideRightArrow>
            </div>
          </SlideArrows>
        ) : null}
  
        <SlideShowNumber>
          {displayPicture + 1}/{slideshow.length}
        </SlideShowNumber>
      </SlideContent>
    )
  }
  
export default Carrousel

const SlideContent = styled.div`
    width: 94%;
    position: relative;
    height: 255px;
    margin: auto;

    ${media.desktop} {
        width: 94%;
        height: 415px;
        margin: 0 3% 0 3%;
    }
`

const SlidePicture = styled.img`
    width: 100%;
    height: 255px;
    mix-blend-mode: normal;
    border-radius: 10px;
    object-fit: cover;
    z-index: 1;
    position: relative;

    ${media.desktop} {
        width: 100%;
        height: 415px;
        border-radius: 25px;
    }
`

const SlideArrows = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: ${theme.secondary};
    cursor: pointer;
    position: absolute;
    top: 0;
    height: 100%;
`

const SlideLeftArrow = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    left: 1%;
    top: 50%;
    z-index: 2;
    ${media.desktop} {
        top: 40%;
    } 
`

const SlideRightArrow = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    right: 1%;
    top: 50%;
    font-size: 42px;
    z-index: 2;
      ${media.desktop} {
          top: 40%;
      } 
`

const SlideImg = styled.img`
    width: 12px;
    height: auto;

    ${media.desktop} {
        width: 46px;
    }
`

const SlideShowNumber = styled.span`
    display: none;
      ${media.desktop} {
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        text-align: center;
        margin-top: -2em;
        color: white;
        font-size: 18px;
        font-weight: 500;
        z-index: 2;
        position: relative;
      }
`