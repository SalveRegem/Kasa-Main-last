import React from "react";
import { useParams } from "react-router-dom";
import logement from "../data/logements";
import StarsFull from "../assets/star-active.png";
import StarsEmpty from "../assets/star-inactive.png";
import "../style/Stars.css";

const Stars = () => {
  const { id } = useParams();
  const item = logement.find((item) => item.id === id);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < item.rating) {
        stars.push(
          <img className="stars" key={i} src={StarsFull} alt="Rating" />
        );
      } else {
        stars.push(
          <img
            className="stars"
            id="StarsEmpty"
            key={i}
            src={StarsEmpty}
            alt="Rating"
          />
        );
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Stars;