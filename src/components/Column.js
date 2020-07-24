import React from 'react';
import './Column.css'
const Column =({sortBy, direction, name, label, type, sortable, handleSort})=> {


    
    if(sortBy === name) {
        return (
            <th scope="col" onClick={() => handleSort(name, type, sortable)} className={sortable ? 'sortable' : 'false'}>
        {label} {direction ? '↑': '↓'}
    </th>
        )
    }

    return <th scope="col" onClick={() => handleSort(name, type, sortable)} className={sortable ? 'sortable' : 'false'}>
        {label}
    </th>

}

export default Column;