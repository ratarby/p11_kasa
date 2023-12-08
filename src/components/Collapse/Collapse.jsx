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

    const textItem = Array.isArray(description)
    ? description.map((item, index) => <p key={index}>{item}</p>)
    : description;
    
    return (
        <main>
            <div className={styles.containerDropdown}>
                <div className={styles.button} onClick={toggleOpen}>
                    {title}
                    <div>
                        <Arrow style={rotateArrowStyle} />
                    </div>
                </div>
                {isOpen && 
                    <p className={styles.description}>{textItem}</p>}
            </div>
        </main>
        
    );
};

export default Collapse;