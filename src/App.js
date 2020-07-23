import React, {useState} from 'react';
import Table from './components/Table'
const columns = [
    {
        label: 'Id',
        name: 'Id',
        type: 'id',
        sortable: 'false',
    },
    {
        label: 'External Id',
        name: 'External_Id',
        type: 'id',
        sortable: 'false',
    },
    {
        label: 'Name',
        name: 'Name',
        type: 'text',
        sortable: 'text',
    },
    {
        label: 'Date Created',
        name: 'Date_Created',
        type: 'date',
        sortable: 'date'
    },
    {
        label: 'Status',
        name: 'Status',
        type: 'boolean',
        sortable: 'boolean'
    }
];

const rows = [
    {
        Id: '123',
        External_Id: 'abc',
        Name: 'Bob',
        Date_Created: '07/21/2020',
        Status: 'Open'
    },
    {
        Id: '234',
        External_Id: 'def',
        Name: 'Janis',
        Date_Created: '07/21/2020',
        Status: 'Closed'
    },
    {
        Id: '345',
        External_Id: 'fgh',
        Name: 'Elijah',
        Date_Created: '07/20/2020',
        Status: 'Open'
    },
    {
        Id: '678',
        External_Id: 'hij',
        Name: 'zeke',
        Date_Created: '07/10/2020',
        Status: 'Closed'
    },
    {
        Id: '098',
        External_Id: 'zyx',
        Name: 'Karen',
        Date_Created: '06/21/2020',
        Status: 'Closed'
    },
    {
        External_Id: 'wvu',
        Date_Created: '07/13/2019',
        Id: '987',
        Status: 'Closed',
        Name: 'Moses'
    },
    {
        Id: '876',
        External_Id: 'kjl',
        Name: 'Byrd',
        Date_Created: '06/30/2020',
        Status: 'Open'
    },
    {
        Id: '765',
        External_Id: 'lji',
        Name: 'Buggy Bug',
        Date_Created: '07/07/2020',
        Status: 'Closed'
    }
]

export default () => {
        const sortBy = 'Date_Created';
        const sortType = 'date';
        return (
            <div>
                <Table sortBy={sortBy} sortType={sortType} rows={rows} columns={columns}/>
            </div>
        )
    }
    
