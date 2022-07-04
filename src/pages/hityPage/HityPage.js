import React, { useEffect, useState } from 'react';
import classes from './Hity.module.css'
import { Link } from 'react-router-dom'
// import Hity from '../../components/popular/hity';
import Preview from '../../components/preview/Preview';

function HityPage(props) {
    const URL = "https://jsonplaceholder.typicode.com/posts"
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <h1>Хиты продаж</h1>
            <div className={classes.container}>
                {data.map((todo) =>
                    <Preview todo={todo}/>
                )}

            </div>
            {/* <Hity data={data} /> */}
        </div>

    );
}

export default HityPage;