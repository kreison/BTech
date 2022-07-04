import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Preview.module.css'

function Preview({ todo }) {
    const [info, setInfo] = useState({sprites: {other: {dream_world: {front_default: ''}}}})
    useEffect(()=>{
        return async ()=>{
            const response = await fetch(todo.url);
            const json = await response.json();
            setInfo(json)
        }
        

    }, [])
    return (

        <div className={ classes.preview }>
            <Link className={ classes.link } to={ `/product/${info.id}` }><img className={classes.img} src={info.sprites.other.dream_world.front_default} alt='image not found' /></Link>
            <p className={ classes.name }>{todo.name} </p>
            <p className={ classes.title }></p>

        </div>
    );
}

export default Preview;