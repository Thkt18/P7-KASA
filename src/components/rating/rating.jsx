import React from "react";
import styled from "styled-components";
import { media } from "../../style/breakpoint";

// Import des images des étoiles rouge et grise
import redstar from "./../../assets/StarRed.svg";
import greystar from "./../../assets/StarGrey.svg";

const Rating = ({ rating }) => { // Tableau de 5 étoiles
  const stars = [1, 2, 3, 4, 5];

  return ( // Conteneur pour le composant Rating
    <RatingDiv className="rating"> 
      {/*  Boucle pour afficher chaque étoile selon la note  */}
      {stars.map((star) =>
        rating >= star ? ( // Étoile rouge si la note est supérieure ou égale à l'index de l'étoile
          <Star
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt=""
          />
        ) : (
          <Star // Étoile grise si la note est inférieure à l'index de l'étoile
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

