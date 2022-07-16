import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Preview.module.css'

function Preview({ todo }) {
    const [info, setInfo] = useState({ sprites: { other: { dream_world: { front_default: '' } } } })
    useEffect(() => {
        return async () => {
            const response = await fetch(todo.url);
            const json = await response.json();
            setInfo(json)
        }
    }, []);

    const addFavourite = async (e) => {
        e.target.classList.toggle(classes.active);
        if (e.target.classList.contains(classes.active)) {
            let response = await fetch('http://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(todo)
            });
            
        } 
    }
    return (

        <div className={ classes.preview }>
            <Link className={ classes.link } to={ `/product/${info.id}` }><img className={ classes.img } src={ info.sprites.other.dream_world.front_default } alt='image not found' /></Link>
            {/* <p className={ classes.name }>{todo.name} </p> */ }
            <p className={ classes.name }>Смартфон Samsung Galaxy A 52 5G (EU)</p>
            <div className={ classes.bottom }>
                <h5 className={ classes.price }>45 000 cом</h5>
                <div onClick={ addFavourite } className={ classes.addFavourite }></div>
            </div>

        </div>
    );
}

export default Preview;