import React from 'react';
import styles from './RatingStars.module.css';
import { TbStar, TbStarFilled } from 'react-icons/tb';
const RatingStars = ({ rating }) => {

    let starsCount = [];

    (function displayRatingStars(rating) {
        for (let i = 1; i <= 5; i++) {
            i <= rating ? starsCount.push(1) : starsCount.push(0);
        }
    })(rating);

    return (
        <div key={rating} className={styles.ratingStars}>
            {starsCount.map((el, index) =>
                el === 1 ? <TbStarFilled key={index} /> : <TbStar key={index} />
            )}
        </div>
    );
};

export default RatingStars;