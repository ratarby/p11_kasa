import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../utils/housing.json';

const Housing = () => {
    const { id } = useParams();
    const housing = datas.find((data) => data.id === id) ;
    return (
        <main>
            <img src={housing.cover} alt={housing.title} />
            <h1>{housing.title}</h1>
        </main>
    );
};

export default Housing;