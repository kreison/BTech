import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Preview.module.css'

function Preview({todo}) {
    return (

        <div key={todo.id} className={classes.block}>
            <div className={classes.block_inner}>
                <Link to="/"><img src='#' alt='image not found' /></Link>
                <span>{todo.name} </span>
                <p>{todo.email}</p>
                <p>{todo.surName}</p>
            </div>
        </div>
    );
}

export default Preview;