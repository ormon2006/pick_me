import React from "react";
import styles from  "@/assets/components/InfoCard/InfoCard.module.scss";

const InfoCard = ({ title, description, image }) => {
  return (
    <div className={styles.InfoCard__infoCard}>
      <img src={image} alt={title} className={styles.InfoCard__cardImage} />
      <h3 className={styles.InfoCard__titleCard}>{title}</h3>
      <p className={styles.InfoCard__cardDescription}>{description}</p>
    </div>
  );
}

export default InfoCard;
