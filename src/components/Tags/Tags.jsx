import React from 'react';
import styles from './Tags.module.css';


const Tags = ({ tags }) => {

    return (
        < div className={styles.tags}>
            <span key={tags} className={styles.tag}>{tags}</span>
        </div >
    );
};

export default Tags;