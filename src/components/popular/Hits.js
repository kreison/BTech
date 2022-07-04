import React from 'react';

function Hits(props) {
    return (
        <div>
            <h1>HITS TABLE</h1>
            {props.data.map((todo)=> {
                return (
                    <ul key={todo.id}>
                        <li>{todo.id}</li>
                        <li>{todo.name}</li>
                    </ul>
                )
            })}
        </div>
    );
}

export default Hits;