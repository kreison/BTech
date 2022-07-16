import React from 'react';
import cl from './DeliveryInputs.module.css'

import { Link } from 'react-router-dom';



const SignInputs = () => {
    return (
        <div>
            <h2>Доставка и оплата</h2>
            <h3>Способ доставки</h3>

            <form className={cl.formFirst}>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label htmlFor="html">Самовывоз</label>
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label htmlFor="css">Доставка курьером</label>

            </form>
            <h3>Личные данные</h3>
            <form className={ cl.form }>
                <div className={ cl.group }>
                    <div>
                        <label htmlFor="">Имя*</label>
                        <input placeholder='Имя' type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Фамилия*</label>
                        <input placeholder='Фамилия' type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Контактный телефон*</label>
                        <input placeholder='+996' type="text" />
                    </div>

                </div>

                <label htmlFor="">Электронная почта</label>
                <input placeholder='example@mail.com' type="text" />

                <label htmlFor="">Адрес доставки</label>
                <input placeholder='Улица, номер дома, номер квартиры' type="text" />

            </form>

            
        </div>
    );
};

export default SignInputs;