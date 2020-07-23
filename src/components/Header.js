import React, {useState} from 'react';
import Column from './Column';

const Header = ({sortBy, direction, color, columns, sort}) => {


    const handleSort =(name, type, sortable)=> {
        if( sortable) {
            sort(name, type)
        }

    }

    let cols = [];

    if(columns) {
        cols = columns.map((column) => {
            return (<Column sortBy={sortBy} direction={direction} handleSort={handleSort} name={column.name} label={column.label} type={column.type} sortable={column.sortable}/>)
        })
    }

    return (
        <thead style={{background: color || 'black', borderRadius: '5px'}}>
            <tr>
                {cols} 
            </tr>
        </thead>
    )
}

export default Header;