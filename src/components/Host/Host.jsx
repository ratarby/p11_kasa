import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Host.module.css';
import datas from '../../utils/housing.json';


const Host = () => {
    const { id } = useParams();
    const housing = datas.find((data) => data.id === id) ;
    const { picture } = housing.host;
    const [firstName, lastName] = housing.host.name;
    

    return (
        <div key={housing.host.name} className={styles.host}>
            <h3 className={styles.profileName}>
                <span>{housing.host.name.split(' ')[0]}</span>
                <span>{housing.host.name.split(' ')[1]}</span>
            </h3>
            <img className={styles.photo} src={picture} alt={`${firstName} ${lastName}`} />
        </div>
    );
};

export default Host;