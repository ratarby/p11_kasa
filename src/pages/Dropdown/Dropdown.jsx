import React, { useState } from 'react';
import dropdown from './../../utils/dropdown.json';
import styles from './../Dropdown/Dropdown.module.css';
import { ReactComponent as Arrow } from '../../assets/images/dropdown/arrow.svg';

const Dropdown = ({ title, description }, index) => {
    const [rotate, setRotate] = useState(false);
    const styleArrow = {
        transform: rotate ? "rotate(0deg)" : "rotate(180deg)",
    }

    return (

        <main>
            <div className={styles.containerDropdown}>
                <details className={styles.details}>
                    <title onClick={() => setRotate(!rotate)}>
                        {title} <Arrow style={styleArrow} />
                    </title>
                    {dropdown.map(({ title, description }) => (
                        <div key={index}>  
                        <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    ))}
                </details>
            </div>
        </main>
    );
};

export default Dropdown;
