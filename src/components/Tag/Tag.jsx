import React from 'react';
import styles from './Tag.module.css';


const Tag = ({ tag }) => {

    return (
        < div className={styles.tag}>
            <span  className={styles.tag}>{tag}</span>
        </div >
    );
};

export default Tag;