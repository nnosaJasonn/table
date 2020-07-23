import React from 'react';
import './Column.css'
const Column =({sortBy, direction, name, label, type, sortable, handleSort})=> {


    
    if(sortBy === name) {
        return (
            <td onClick={() => handleSort(name, type, sortable)} className={sortable ? 'sortable' : 'false'}>
        {label} {direction ? '↑': '↓'}
    </td>
        )
    }

    return <td onClick={() => handleSort(name, type, sortable)} className={sortable ? 'sortable' : 'false'}>
        {label}
    </td>

}

export default Column;