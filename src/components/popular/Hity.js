import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHitsAction } from '../../redux/actions/actions'
import Preview from '../preview/Preview';
import classes from './Hity.module.css'

const Hity = (props) => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.hitsProduct.product)
    useEffect(() => {
        dispatch(getHitsAction(10))
    }, [])
    useEffect(() => {
        console.log(pokemon);
    }, [pokemon])
    return (
        <div className='container'>
            <h1 className={classes.header}>Хиты продаж</h1>
            <div className={classes.block}>
                {
                    pokemon.length > 0
                        ?
                        pokemon.map((todo) =>
                            <Preview key={todo.id} todo={todo} />
                        )
                        :
                        'fsffsd'
                }
            </div>
            <Link to='/hits'>Все товары</Link>
        </div>
    );
};

export default Hity;