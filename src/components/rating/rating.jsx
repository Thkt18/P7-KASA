import React from "react";
import styled from "styled-components";
import { media } from "../../style/breakpoint";

// style
import redstar from "./../../assets/StarRed.svg";
import greystar from "./../../assets/StarGrey.svg";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <RatingDiv className="rating">
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
          <Star
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt=""
          />
        ) : (
          <Star
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt=""
          />
        )
      )}
    </RatingDiv>
  );
};

export default Rating;

const RatingDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: no-wrap;
    width: auto;
    height:50%;

    ${media.desktop} {
      width: 100%;
    }
`

const Star = styled.img`
    width: 15px;
    height: 15px;

    ${media.desktop} {
      width: 30px;
      height: 30px;
    }
`

