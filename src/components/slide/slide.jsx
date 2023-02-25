import React, { useState } from 'react'
import styled from 'styled-components'


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
              onClick={nextSlide}
            ></SlideLeftArrow>
            </div>
            <div className="slideshow_next_arrow">
              <SlideRightArrow
                className="fa-solid fa-chevron-right right_arrow"
                onClick={prevSlide}
              ></SlideRightArrow>
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
    margin: 0 3% 0 3%;

    @media (max-width: 767px) and (min-width: 320px) {
        width: 335px;
        height: 255px;
        margin: auto;
`

const SlidePicture = styled.img`
    width: 100%;
    height: 415px;
    mix-blend-mode: normal;
    border-radius: 25px;
    object-fit: cover;
    z-index: 1;
    position: relative;

    @media (max-width: 767px) and (min-width: 320px) {
        width: 335px;
        height: 255px;
        border-radius: 10px;
    }
`

const SlideArrows = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 0;
    height: 100%;
`

const SlideLeftArrow = styled.div`
    position: absolute;
    left: 6px;
    top: 50%;
    color: black;
    width:15%;
    height:15%;
    z-index: 2;
    border:3px solid blue;
    background-image: url(./../../assets/slideLeft.svg);
`

const SlideRightArrow = styled.i`
    position: absolute;
    right: 6px;
    top: 50%;
    color: white;
    font-size: 42px;
    width:15%;
    height:15%;
    z-index: 2;
    border:3px solid blue;
`

const SlideShowNumber = styled.span`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    text-align: center;
    margin-top: -2em;
    color: white;
    font-size: 18px;
    font-weight: 500;
`