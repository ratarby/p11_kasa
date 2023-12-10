import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../utils/housing.json';
import styles from './Housing.module.css';
import Collapse from '../../components/Collapse/Collapse';
import Err404 from '../../pages/Error/Error404';
import Host from '../../components/Host/Host';
import RatingStars from '../../components/RatingStars/RatingStars';
import Tags from '../../components/Tags/Tags';

const Housing = () => {
    const { id } = useParams();
    const housing = datas.find((data) => data.id === id);

    if (!housing) {
        return <Err404 />;

    }

    const {tags} = housing;

    return (
        <main>
            <div className={styles.detailsContainer}>

                {/* carrousel */}
                <div className={styles.carrouselBgImg}>
                    <img src={housing.cover} alt={housing.title} />
                    <h2 className={styles.title}>{housing.title}</h2>
                    <p className={styles.location}>{housing.location}</p>

                {/* Tags */}
                <div className={styles.tags}>
                        {tags.map((tags,index)=> (
                            <Tags
                                key={index}
                                tags={tags}
                            />
                        ))}
                </div>
            </div>
               
                   

                {/* Host & Rating */}
                <div>
                    <Host key={housing.host.name} name={housing.host.name} picture={housing.host.picture} />
                    <RatingStars key={housing.rating} rating={housing.rating} />
                </div>


            </div>

            {/* carrousel */}





            {/* collapse */}
            <div className={styles.collapseContainers}>
                <div className={styles.collapseDescription}>
                    <Collapse title="Description" description={housing.description} />
                </div>
                <div className={styles.collapseEquipments}>
                    <Collapse className={styles.equipments} title="Équipements" description={housing.equipments} />
                </div>
            </div>

        </main>
    );
};

export default Housing;