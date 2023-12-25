import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SVG404 } from "../../assets/images/error/404.svg";
import styles from "./Error404.module.css";




const Error404 = () => {
  return (
    <main className={styles.errorContainer}>
    <SVG404 />
    <div className={styles.textError}>
          <div className={styles.textError1}>Oups! La page que </div>
          <div className={styles.textError2}>vous demandez n'existe pas.</div>
    </div>
    <Link className={styles.link} to="/">
      Retourner sur la page d'accueil
    </Link>
  </main>
  );
};

export default Error404;
