import React from 'react';
import styles from './Carousel.module.css';
import { useParams } from 'react-router-dom';
import datas from '../../utils/housing.json';

const Carousel = ( ) => {
    const { id } = useParams();
    const housing = datas.find((data) => data.id === id);

    
    return (
        <div className={styles.carrouselBgImg}>
            <img src={housing.cover} alt={housing.title} />
            <h2 className={styles.title}>{housing.title}</h2>
            <p className={styles.location}>{housing.location}</p>
        </div>
    );
};

export default Carousel;