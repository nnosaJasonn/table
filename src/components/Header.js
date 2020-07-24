import React from 'react';
import Column from './Column';

const Header = ({sortBy, direction, color, columns, sort}) => {


    const handleSort =(name, type, sortable)=> {
        if( sortable) {
            sort(name, type)
        }

    }

    let cols = [];

    if(columns) {
        cols = columns.map((column, i) => {
            return (<Column key={i} sortBy={sortBy} direction={direction} handleSort={handleSort} name={column.name} label={column.label} type={column.type} sortable={column.sortable}/>)
        })
    }

    return (
        <thead className="thead-dark">
            <tr>
                {cols} 
            </tr>
        </thead>
    )
}

export default Header;