import React from "react";
import styles from "./Banner.module.css";




const Banner = ({title, image}) => {
  // const bgStyle = {
  //   background: `var(--linear), url("${page === "home" ? bgHome : bgAbout}")`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center right",
  // };

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