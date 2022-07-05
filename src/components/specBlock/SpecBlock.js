import React from 'react';
import SpecSlide from "./SpecSlide";
import cl from './SpecBlock.module.css'

const SpecBlock = () => {
    return (
        <div className={cl.spec}>
            <div className='container'>
                <h2>Специальные предложения</h2>
                

            </div>
            <SpecSlide/>
        </div>
    );
};

export default SpecBlock;