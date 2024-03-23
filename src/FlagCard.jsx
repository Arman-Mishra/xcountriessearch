import React from "react";
import "./flagCard.css";

const FlagCard = ({ name, img_src, alt }) => {
  return (
    <div className="countryCard">
      <img src={img_src} alt={alt} className="card_img" />
      <p>{name}</p>
    </div>
  );
};

export default FlagCard;
