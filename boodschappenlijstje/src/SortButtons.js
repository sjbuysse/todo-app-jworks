import React from 'react';

const SortButtons = ({onSortDate, onSortAlphabet}) => {
    return (
        <div className="sort-buttons">
            <button onClick={onSortDate}>⏱</button>
            <button onClick={onSortAlphabet}>🔤</button>
        </div>
    );
}

export default SortButtons
