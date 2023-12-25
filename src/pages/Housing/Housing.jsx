import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../utils/housing.json';
import styles from './Housing.module.css';
import Collapse from '../../components/Collapse/Collapse';
import Err404 from '../../pages/Error/Error404';
import Host from '../../components/Host/Host';
import RatingStars from '../../components/RatingStars/RatingStars';
import Tag from '../../components/Tag/Tag';
import Carousel from '../../components/Carousel/Carousel';

const Housing = () => {
    const { id } = useParams();
    const housing = datas.find((data) => data.id === id);

    if (!housing) {
        return <Err404 />;
    }

    const { tags } = housing;

    return (
        <main>
            <div className={styles.detailsContainer}>
                    {/* carrousel */}
                    <div className={styles.carrouselBgImg}>
                        <Carousel key={housing.pictures} pictures={housing.pictures} />
                    </div>

                    <div className={styles.titlesAndTagsAndHost}>
                        <div className={styles.titlesAndTags}>
                            {/* Title & Location */}
                            <div className={styles.titleAndLocation}>
                                <h1 className={styles.title}>{housing.title}</h1>
                                <h2 className={styles.location}>{housing.location}</h2>
                            </div>

                            {/* Tags */}
                            <div className={styles.tags}>
                                {tags.map((tag, index) => (
                                    <Tag
                                        key={index}
                                        tag={tag}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={styles.hostAndRatingContainer}>
                            <Host className={styles.host} key={housing.host.name} host={housing.host} />
                            <RatingStars key={housing.rating} rating={housing.rating} />
                        </div>
                    </div> 

            </div>


            {/* collapse */}
            <div className={styles.collapseContainers}>
                <div className={styles.collapseDescription}>
                    <Collapse  title="Description" description={housing.description} />
                </div>
                <div className={styles.collapseEquipments}>
                    <Collapse  title="Équipements" description={housing.equipments} />
                </div>
            </div>

        </main>
    );
};

export default Housing;