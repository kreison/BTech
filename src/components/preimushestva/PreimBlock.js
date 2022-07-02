import React from 'react';
import pic1 from '../../picture/garant.png'
import pic2 from '../../picture/dostavka.png'
import pic3 from '../../picture/rassrochka.png'
import pic4 from '../../picture/online.png'
import cl from './preimishestva.module.css'

const PreimBlock = () => {
    return (
        <div className={cl.pBlock}>
            <div className={cl.container}>
                <h2>Наши преимущества</h2>

                <div className={cl.pBlock_inner}>

                <div className={cl.garant}>
            <img src={pic1} alt="x"/>
                <h4>Гарантия качества</h4>
                </div>
                <div className={cl.garant}>
            <img src={pic2} alt="x"/>
                <h4>Быстрая доставка</h4>
                </div>
                <div className={cl.garant}>
            <img src={pic3} alt="x"/>
                <h4>Рассрочка без %</h4>
                </div>
                <div className={cl.garant}>
            <img src={pic4} alt="x"/>
                <h4>Онлайн поддержка</h4>
                </div>
            </div>
            </div>

        </div>
    );
};

export default PreimBlock;