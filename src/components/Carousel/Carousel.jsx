import React from 'react';
import styles from './Carousel.module.css';
import { useParams } from 'react-router-dom';
import datas from '../../utils/housing.json';

const Carousel = ( ) => {
    const { id } = useParams();
    const housing = datas.find((data) => data.id === id);

    
    return (
        <div className={styles.carouselBgImg}>
            <img src={housing.cover} alt={housing.title} />
            <h1>{housing.title}</h1>
            <p>{housing.location}</p>
        </div>
    );
};

export default Carousel;