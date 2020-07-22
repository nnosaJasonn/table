import React, {useState} from 'react';
import './Column.css'
const Column =({label, type, sortable, handleSort})=> {

    const clickable = sortable ? 'sortable' : false;
   
    return <td onClick={() => handleSort(label, type)} className={clickable}>
        {label}
    </td>

}

export default Column;