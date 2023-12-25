import React from 'react';
import styles from './Host.module.css';

const Host = ({ host }) => {
    const { picture } = host;
    const firstName = host.name.split(' ')[0];
    const lastName = host.name.split(' ')[1];
    

    return (
        <div  className={styles.host}>
            <h3>
                <span>{firstName}</span>
                <span>{lastName}</span>
            </h3>
            <img src={picture} alt={`${firstName} ${lastName}`} />
        </div>
    );
};

export default Host;