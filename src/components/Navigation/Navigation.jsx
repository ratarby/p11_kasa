import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className="Navigation" >
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
        </div>
    );
};

export default Navigation;