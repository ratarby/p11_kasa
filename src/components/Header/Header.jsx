import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/images/Logo/logo.svg";


const Header = () => {
  return (
    <header className={styles.header}>
    <NavLink to="/">
      <Logo />
    </NavLink>

    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to="/about"
      >
        A propos
      </NavLink>
    </nav>
  </header>
  );
};

export default Header;