import React, { useState } from "react";
import arrowRight from "../assets/slideShowRight.png";
import arrowLeft from "../assets/slideShowLeft.png";

const Slideshow = (image) => {
  const [counter, setCounter] = useState(0);
  const pictures = image.image;
  const slideLength = pictures.length;

  let actualImage = pictures[counter];

  const slideLeft = () => {
    setCounter((counter - 1 + slideLength) % slideLength);
  };

  const slideRight = () => {
    setCounter((counter + 1) % slideLength);
  };

  const compteur = `${counter + 1}/${slideLength}`;

  // Condition pour afficher ou masquer les flèches et le compteur
  const shouldShowControls = slideLength > 1;

  return (
    <div className="slider-cntr">
      <div className="slider">
        {shouldShowControls && (
          <img
            onClick={slideLeft}
            className="arrowLeft"
            src={arrowLeft}
            alt="fleche de gauche"
          />
        )}
        {shouldShowControls && (
          <img
            onClick={slideRight}
            className="arrowRight"
            src={arrowRight}
            alt="fleche de droite"
          />
        )}

        <img
          className="picture-appart"
          src={actualImage}
          alt="Visualisation de la chambre d'hote"
        />
        {shouldShowControls && (
          <p className="counter">{compteur}</p>
        )}
      </div>
    </div>
  );
};

export default Slideshow;