import React from 'react';
import cl from './SuccesBind.module.css'
import img from '../../../picture/modals/bindCard.svg'

const SuccesBind = ({close}) => {
    return (
        <div className={cl.succes}>
            <img src={img} alt="" />
            <h3>Отлично!</h3>
            <p>Карта успешно привязана.</p>
            <p onClick={close} className="button">Продолжить</p>
        </div>
    );
};

export default SuccesBind;