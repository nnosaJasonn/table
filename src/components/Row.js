import React from 'react';

const Row =({data, columnOrder})=> {

    

    if(data) {

        const renderedData = columnOrder.map(function(key, index) {
            return <td>{data[key]}</td>
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