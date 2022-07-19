import React from 'react';
import {NavLink } from 'react-router-dom';
import cl from './BreadCrumbs.module.css'

// const setActive = ({isActive}) => isActive ? {cl.active} : '';

const BreadCrumbsItem = ({item}) => {
    const reafactor = ()=>{
        if(item.key === '/'){
            return 'Главная'
        } else if (item.key === '/product'){
            return ' / Продукт'
        } else if( /^\/product\/\w$/i.test(item.key)){
            return(' / ' + item.key.match(/\d/)[0]);
        } else if(item.key === '/fav'){
            return ' / Избранное'
        } else if(item.key === '/sign'){
            return ' / Вход или Регистрация'
        } else if(item.key === '/delivery'){
            return ' / Доставка и Оплата'
        }

    }
    return (
        <NavLink className={({isActive}) => isActive ? cl.active : ''}  style={{color: '#999', textDecoration: 'none'}} to={item.key}>
            {reafactor()}
        </NavLink>
    );
};

export default BreadCrumbsItem;