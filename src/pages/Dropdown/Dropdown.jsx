import React from 'react';
import dropdown from '../../utils/dropdown.json';
import styles from './../Dropdown/Dropdown.module.css';

const Dropdown = () => {
    return (
        <main>
            <div className={styles.containerDropdown}>
                {dropdown.map(({ title, description }) => (
                    <div key={title}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
            ))}
            </div>
        </main>
    );
};

export default Dropdown;