import React from 'react';
import SpecSlide from "./SpecSlide";
import cl from './SpecBlock.module.css'

const SpecBlock = () => {
    return (
        <div className={cl.spec}>
            <div className={cl.container}>
                <h2>Специальные предложения</h2>
                <SpecSlide/>

            </div>

        </div>
    );
};

export default SpecBlock;