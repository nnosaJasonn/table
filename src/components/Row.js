import React from 'react';
import './Row.css'
const Row =({data, columnOrder})=> {

    

    if(data) {

        const renderedData = columnOrder.map(function(key, index) {
            return <td key={index}><div className="scrollable">{data[key]}</div></td>
          });

        return (
            <tr>
                {renderedData}
            </tr>
        )
    }

    return <tr>Loading...</tr>
   
}

export default Row;