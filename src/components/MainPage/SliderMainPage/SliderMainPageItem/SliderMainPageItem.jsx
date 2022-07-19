import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cl from './slider.module.css'

const SliderMainPageItem = ({ info }) => {

    const [data, setData] = useState({ sprites: { other: { dream_world: { front_default: '' } } } })
    useEffect(() => {
        return async () => {
            const response = await fetch(info);
            const json = await response.json();
            setData(json)
        }
    }, []);
    useEffect(()=>{
        console.log(data);
    }, [data])
    return (
        <>
            <div className={ cl.inner }>
                <div className={ cl.left }>
                    <h1 className={ cl.h1 }>{ data.name }</h1>
                    <h3 className={ cl.h3 }>{ data.name }</h3>
                    <Link className='button' to={ `/product/${data.id}` }>Посмотреть на товар</Link>

                </div>
                <div className={ cl.right }>
                    <img src={ data.sprites.other.dream_world.front_default } alt="IMG" />
                </div>
            </div>
        </>
    );
};

export default SliderMainPageItem;