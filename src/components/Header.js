import React, {useState} from 'react';
import Column from './Column';

const Header = ({color, columns}) => {


    const handleSort =(label, type)=> {
        console.log('label -> ' + label, 'type -> ' + type);
    }

    let cols = [];
    
    if(columns) {
        cols = columns.map((column) => {
            return (<Column handleSort={handleSort} label={column.label} type={column.type} sortable={column.sortable}/>)
        })
    }

    return (
        <thead style={{background: color || 'black'}}>
            <tr>
                {cols} 
            </tr>
        </thead>
    )
}

export default Header;