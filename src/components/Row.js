import React from 'react';

const Row =({data})=> {

    

    if(data) {
        console.log(data)
        const renderedData = Object.keys(data).map(function(key, index) {
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