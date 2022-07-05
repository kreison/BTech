
import React from 'react';

const Hity = (props) => {
    
    return (
        <div>
            <h1>хиты продаж</h1>
            {props.data.slice(0 , 4).map((todo)=> {
                return (
                    <ul key={todo.id}>
                        <li>{todo.id}</li>
                        <li>{todo.name}</li>
                    </ul>
                )
            })}
        </div>
    );
};

export default Hity;