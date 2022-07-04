import React, {useEffect, useState} from 'react';
import classes from './Hity.module.css'
import {Link} from 'react-router-dom'

function HityPage(props) {
    const URL = "https://jsonplaceholder.typicode.com/users"
    const [data, setData] = useState([])
    
    useEffect(()=> {
        fetch(URL)
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])

    return (
        <div>
            <h1>Хиты продаж</h1>
            <div className={classes.container}>
                    {data.slice(0,4).map((todo) => 
                                <div key={todo.id} className={classes.block}>
                                    <div className={classes.block_inner}>
                                        <Link to="/"><img src='#' alt='image not found'/></Link>
                                        <span>{todo.name} </span>
                                        <p>{todo.email}</p>
                                        <p>{todo.surName}</p>
                                    </div>
                                </div>
                        )}
            </div>
        </div>

    );
}

export default HityPage;