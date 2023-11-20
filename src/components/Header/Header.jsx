import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/images/Logo/logo.svg";
import Navigation from "../Navigation/Navigation";


const Header = () => {
  return (
    <header className={styles.header}>
    <NavLink to="/">
      <Logo />
    </NavLink>
    <Navigation />
    
  </header>
  );
};

export default Header;