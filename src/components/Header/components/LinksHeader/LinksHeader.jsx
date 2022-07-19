import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cl from '../../Header.module.css'
import sign from '../../../../picture/header/userSign.svg'
import fav from '../../../../picture/header/fav.svg'
import basket from '../../../../picture/header/basket.svg'

const LinksHeader = () => {
    const nav = useNavigate()
    return (
        <>
            {
                localStorage.getItem('isLoggin') === 'true'
                    ?
                    <p onClick={ () => {localStorage.setItem('isLoggin', false); nav('/')} } className={ cl.link }><img src={ sign } alt='sign' /> Выйти</p>

                    :
                    <Link className={ cl.link } to={ '/sign' }><img src={ sign } alt='sign' /> Войти</Link>

            }
            <Link className={ cl.link } to='/fav'><img src={ fav } alt='fav' />Избранное</Link>

            <Link className={ cl.link } to='/delivery'><img src={ basket } alt='basket' />Корзина</Link>
        </>
    );
};

export default LinksHeader;