import React, { useState } from 'react';
import styles from './Collapse.module.css';
import { ReactComponent as Arrow } from '../../assets/images/collapse/arrow.svg';

const Collapse = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRotated, setIsRotated] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        setIsRotated(!isRotated);
    };

    const rotateArrowStyle = {
        transform: isRotated ? "rotate(0)" : "rotate(180deg)",
    };

    return (
        <div className={styles.container}>
            <div className={styles.button} onClick={toggleOpen}>
                {title}
                <div>
                    <Arrow style={rotateArrowStyle} />
                </div>
            </div>
            {isOpen && <p className={styles.description}>{description}</p>}
        </div>
    );
};

export default Collapse;