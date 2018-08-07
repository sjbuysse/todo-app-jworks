import React from 'react';

const GroceryList = (props) => {
    return (
        <ul>
            {props.items.map(item => (
                <li className="list-item" key={item.id}><p>{item.text}</p>
                </li>
            ))}
        </ul>
    );
}

export default GroceryList
