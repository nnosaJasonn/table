import React from 'react';
import './Column.css'
const Column =({sortBy, direction, name, label, type, sortable, handleSort})=> {

    const clickable = sortable !== 'false' ? 'sortable' : false;
    
    if(sortBy === name) {
        return (
            <td onClick={() => handleSort(name, type, sortable)} className={clickable}>
        {label} {direction ? '↑': '↓'}
    </td>
        )
    }

    return <td onClick={() => handleSort(name, type, sortable)} className={clickable}>
        {label}
    </td>

}

export default Column;