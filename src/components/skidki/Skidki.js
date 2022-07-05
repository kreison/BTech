import React from 'react';
import cl from './skidki.module.css'

const Skidki = () => {
    return (
        <div className={cl.container}>
            <div className={cl.skidki}>
                <div className={cl.ngod}>
                    <h4>Новогодние скидки</h4>
                </div>
                <div className={cl.ngod}>
                    <h4>Топ новинки</h4>
                </div>
                <div className={cl.ngod}>
                    <h4>Товары дня</h4>
                </div>
                <div className={cl.ngod}>
                    <h4>Рекомендуемое Вам</h4>
                </div>

            </div>

        </div>
    );
};

export default Skidki;