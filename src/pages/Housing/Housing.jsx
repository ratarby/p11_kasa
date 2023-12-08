import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../utils/housing.json';
import styles from './Housing.module.css';
import Collapse from '../../components/Collapse/Collapse';
import Err404 from '../../pages/Error/Error404';

const Housing = () => {
    const { id } = useParams();
    const housing = datas.find((data) => data.id === id) ;

    if (!housing) {
        return <Err404 />;
        
    }

    return (
        <main>
            <div className={styles.carrouselBgImg}>
                <img src={housing.cover} alt={housing.title} />
                <h2 className={styles.title}>{housing.title}</h2>
                <p className={styles.location}>{housing.location}</p>
            </div>
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