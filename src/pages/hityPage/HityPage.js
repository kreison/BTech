import React, { useEffect, useState } from 'react';
import classes from './Hity.module.css'
import Preview from '../../components/preview/Preview';

function HityPage(props) {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=50"
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setData(data.results))
    }, [URL])
    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className='container'>
            <h1>Хиты продаж</h1>
            <div className={ classes.container }>
                <div className={ classes.hitsInner }>
                    {
                        data.length > 0
                            ?
                            data.map((todo) =>
                                <Preview key={todo.id} todo={ todo } />
                            )
                            :
                            null
                    }
                </div>

            </div>
        </div>

    );
}

export default HityPage;