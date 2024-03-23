import React from "react";
import styles from "./flagCard.module.css";

const FlagCard = ({ name, img_src, alt }) => {
  return (
    <div className={styles.countryCard}>
      <img src={img_src} alt={alt} className={styles.card_img} />
      <p>{name}</p>
    </div>
  );
};

export default FlagCard;
