import React from 'react';
import cl from './popular.module.css'
import Slide from './Slide';

const Popular = () => {
    return (
        <div className='container'>

        <div className={cl.popular}>

            <h2>Популярные категории</h2>
            <Slide/>
        </div>
        </div>
    );
};

export default Popular;