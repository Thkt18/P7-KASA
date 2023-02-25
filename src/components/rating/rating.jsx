import React from "react";
import styled from "styled-components";

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

  @media (min-width: 345px) and (max-width: 767px) {
    width: auto;
    height:50%;
  }
`

const Star = styled.img`
    width: 30px;
    height: 30px;

    @media (min-width: 345px) and (max-width: 767px) {
      width: 15px;
      height: 15px;
    }
`

