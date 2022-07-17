import React from 'react';
import Backet from '../../components/basket/backet/Backet';
import DeliveryInputs from '../../components/Delivery/DeliveryInputs';
import cl from './Delivery.module.css'
import nal from '../../picture/oplata/coins.svg'
import visa from '../../picture/oplata/visa.svg'
import mc from '../../picture/oplata/mastercard.svg'
import es from '../../picture/oplata/elsom.svg'
import bk from '../../picture/oplata/balancekg.svg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from '@mui/material';
import SuccesBind from '../../components/modals/SuccesBind/SuccesBind';


const SignIn = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [binded, setBinded] = useState()
    useEffect(() => {
        setBinded(localStorage.getItem('binded'))
        console.log(localStorage.getItem('binded'));
    }, [])
    return (
        <div className='container'>
            <div className={ cl.inner }>
                <DeliveryInputs />

                <Backet />
            </div>
            <h3>Способ оплаты</h3>
            <div className={ cl.formThird }>
                <div onClick={ (e) => e.target.classList.toggle(cl.active) } className={ cl.oplata }>
                    <img src={ nal } alt="" />
                    <h4>Наличными</h4>
                </div>

                <div onClick={ (e) => e.target.classList.toggle(cl.active) } className={ cl.oplata }>
                    <img src={ visa } alt="" />
                    <h4>Картой VISA</h4>
                </div>


                <div onClick={ (e) => e.target.classList.toggle(cl.active) } className={ cl.oplata }>
                    <img src={ mc } alt="" />
                    <h4>Mastercard</h4>
                </div>

                <div onClick={ (e) => e.target.classList.toggle(cl.active) } className={ cl.oplata }>
                    <img src={ es } alt="" />
                    <h4>Элсом</h4>
                </div>

                <div onClick={ (e) => e.target.classList.toggle(cl.active) } className={ cl.oplata }>
                    <img src={ bk } alt="" />
                    <h4>Balance KG</h4>
                </div>
            </div>

            {
                binded === 'true'
                    ?
                    <p onClick={ handleOpen } style={ { display: 'inline' } } className="button">Оплатить</p>
                    :
                    <Link to="/bind" className="button">Оплатить</Link>
            }
            <Modal
                open={ open }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={cl.modal}>
                    <SuccesBind close={handleClose} />
                </div>
            </Modal>
        </div>
    );
};

export default SignIn;