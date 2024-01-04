import React from "react";
import styles from "./Banner.module.css";

const Banner = ({title, image}) => {
  return (
    <main>
      <div className={styles.banner}>
        <h1 className={styles.sentence}>{title}</h1>
        <img src={image} alt="bannière" />
      </div>
    </main>
  );
  
};

export default Banner;