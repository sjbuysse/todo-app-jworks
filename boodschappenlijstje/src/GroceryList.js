import React from 'react';

const GroceryList = (props) => {
    return (
        <ul>
            {props.items.map(item => (
                <li className="list-item" key={item.id}><p>{item.text}</p>
                    <button className="delete" onClick={() => props.onDelete(item.id)}><span>X</span></button>
                </li>
            ))}
        </ul>
    );
}

export default GroceryList
