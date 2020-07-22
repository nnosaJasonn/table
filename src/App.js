import React from 'react';
import './App.css'
import Header from './components/Header';

const columns = [
    {
        label: 'Id',
        type: 'id',
        sortable: false,
    },
    {
        label: 'External Id',
        type: 'id',
        sortable: false,
    },
    {
        label: 'Name',
        type: 'text',
        sortable: false,
    },
    {
        label: 'Date Created',
        type: 'date',
        sortable: 'date'
    }
];

const rows = [
    {
        cols: [
            {
                label: 'Id',
                value: '123'
            },
            {
                label: 'External Id',
                value: 'abc'
            },
            {
        
                label: 'Name',
                value: 'Bob'
            },
            {
                label: 'Date Created',
                value: '07/21/2020'
            }
        ]
    },
    {
        cols: [
            {
                label: 'Id',
                value: '234'
            },
            {
                label: 'External Id',
                value: 'def'
            },
            {
        
                label: 'Name',
                value: 'Janis'
            },
            {
                label: 'Date Created',
                value: '07/21/2020'
            }
        ]
    },
    {
        cols: [
            {
                label: 'Id',
                value: '345'
            },
            {
                label: 'External Id',
                value: 'fgh'
            },
            {
        
                label: 'Name',
                value: 'Elijah'
            },
            {
                label: 'Date Created',
                value: '07/20/2020'
            }
        ]
    },
    {
        cols: [
            {
                label: 'Id',
                value: '678'
            },
            {
                label: 'External Id',
                value: 'hij'
            },
            {
        
                label: 'Name',
                value: 'zeke'
            },
            {
                label: 'Date Created',
                value: '07/10/2020'
            }
        ]
    },
    {
        cols: [
            {
                label: 'Id',
                value: '098'
            },
            {
                label: 'External Id',
                value: 'zyx'
            },
            {
        
                label: 'Name',
                value: 'Karen'
            },
            {
                label: 'Date Created',
                value: '06/21/2020'
            }
        ]
    },
    {
        cols: [
            {
                label: 'Id',
                value: '987'
            },
            {
                label: 'External Id',
                value: 'wvu'
            },
            {
        
                label: 'Name',
                value: 'Moses'
            },
            {
                label: 'Date Created',
                value: '07/21/2019'
            }
        ]
    },
    {
        cols: [
            {
                label: 'Id',
                value: '876'
            },
            {
                label: 'External Id',
                value: 'kjl'
            },
            {
        
                label: 'Name',
                value: 'Byrd'
            },
            {
                label: 'Date Created',
                value: '06/30/2020'
            }
        ]
    },
    {
        cols: [
            {
                label: 'Id',
                value: '765'
            },
            {
                label: 'External Id',
                value: 'lji'
            },
            {
        
                label: 'Name',
                value: 'Buggy Bug'
            },
            {
                label: 'Date Created',
                value: '07/07/2020'
            }
        ]
    }
]

export default () => {
        return (
            <div>
            <Header color="green" />
            <table className="fixed_header">
                <Header columns={columns}/>
                <tbody>
                    <tr>
                    <td>row 1-0</td>
                    <td>row 1-1</td>
                    <td>row 1-2</td>
                    <td>row 1-3</td>

                    </tr>
                    <tr>
                    <td>row 2-0</td>
                    <td>row 2-1</td>
                    <td>row 2-2</td>
                    <td>row 2-3</td>

                    </tr>
                    <tr>
                    <td>row 3-0</td>
                    <td>row 3-1</td>
                    <td>row 3-2</td>
                    <td>row 3-3</td>

                    </tr>
                    <tr>
                    <td>row 4-0</td>
                    <td>row 4-1</td>
                    <td>row 4-2</td>
                    <td>row 4-3</td>

                    </tr>
                    <tr>
                    <td>row 5-0</td>
                    <td>row 5-1</td>
                    <td>row 5-2</td>
                    <td>row 5-3</td>

                    </tr>
                    <tr>
                    <td>row 6-0</td>
                    <td>row 6-1</td>
                    <td>row 6-2</td>
                    <td>row 6-3</td>

                    </tr>
                    <tr>
                    <td>row 7-0</td>
                    <td>row 7-1</td>
                    <td>row 7-2</td>
                    <td>row 7-3</td>

                    </tr>
                    </tbody>
                </table>
                </div>
        )
    }
    
