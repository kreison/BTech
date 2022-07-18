import React from 'react';
import cl from './skidki.module.css'

const Skidki = () => {
    return (
        <div className='container'>
            <div className={cl.skidki}>
                <div className={cl.ngod}>
                    <p>Новогодние скидки</p>
                </div>
                <div className={cl.ngod}>
                    <p>Топ новинки</p>
                </div>
                <div className={cl.ngod}>
                    <p>Товары дня</p>
                </div>
                <div className={cl.ngod}>
                    <p>Рекомендуемое Вам</p>
                </div>

            </div>

        </div>
    );
};

export default Skidki;