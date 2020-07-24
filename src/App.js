import React, {useState, useEffect} from 'react';
import Table from './components/Table'
import axios from 'axios';
import './App.css'
const columns = [
    {
        label: 'Id',
        name: 'Id',
        type: 'id',
        sortable: false,
    },
    {
        label: 'AutoStatus',
        name: 'AutoStatus',
        type: 'enum',
        sortable: false,
    },
    {
        label: 'AutoCreatedTime',
        name: 'AutoCreatedTime',
        type: 'date',
        sortable: true,
    },
    {
        label: 'AutoUpdatedTime',
        name: 'AutoUpdatedTime',
        type: 'date',
        sortable: true,
    },
    {
        label: 'AlertShortDesc',
        name: 'AlertShortDesc',
        type: 'text',
        sortable: false,
    },
    {
        label: 'AlertLongDesc',
        name: 'AlertLongDesc',
        type: 'text',
        sortable: false,
    },
    {
        label: 'AlertHost',
        name: 'AlertHost',
        type: 'text',
        sortable: true,
    },
    {
        label: 'AlertTriggeredTime',
        name: 'AlertTriggeredTime',
        type: 'date',
        sortable: true,
    },
    {
        label: 'AlertID',
        name: 'AlertID',
        type: 'id',
        sortable: false,
    },
    {
        label: 'AlertSource',
        name: 'AlertSource',
        type: 'text',
        sortable: false,
    },
    {
        label: 'AlertCompany',
        name: 'AlertCompany',
        type: 'text',
        sortable: false,
    },
    {
        label: 'SDTicketNum',
        name: 'SDTicketNum',
        type: 'text',
        sortable: false,
    },
    {
        label: 'SDID',
        name: 'SDID',
        type: 'text',
        sortable: true,
    },
    {
        label: 'SDStatus',
        name: 'SDStatus',
        type: 'enum',
        sortable: false,
    },
    {
        label: 'SDSupportGroup',
        name: 'SDSupportGroup',
        type: 'enum',
        sortable: false,
    },
    {
        label: 'AlertType',
        name: 'AlertType',
        type: 'enum',
        sortable: false,
    },
    {
        label: 'AlertSubtype',
        name: 'AlertSubtype',
        type: 'enum',
        sortable: false,
    },
    {
        label: 'AlertSeverity',
        name: 'AlertSeverity',
        type: 'enum',
        sortable: false,
    },
    {
        label: 'AutoAction',
        name: 'AutoAction',
        type: 'enum',
        sortable: false,
    },
    {
        label: 'AutoNote',
        name: 'AutoNote',
        type: 'enum',
        sortable: false,
    },
    {
        label: 'JATicketNum',
        name: 'JATicketNum',
        type: 'text',
        sortable: false,
    },
    {
        label: 'JAID',
        name: 'JAID',
        type: 'text',
        sortable: false,
    },
    {
        label: 'JAStatus',
        name: 'JAStatus',
        type: 'enum',
        sortable: false
    },
    {
        label: 'LinkStatus',
        name: 'LinkStatus',
        type: 'text',
        sortable: false,
    },
    {
        label: 'CommentStatus',
        name: 'CommentStatus',
        type: 'text',
        sortable: false,
    },
    {
        label: 'AlertSubCompany',
        name: 'AlertSubCompany',
        type: 'text',
        sortable: false,
    },
    {
        label: 'Location',
        name: 'Location',
        type: 'text',
        sortable: false,
    },
    {
        label: 'State',
        name: 'State',
        type: 'text',
        sortable: false,
    }
];

// const rows = [
//     {
//         Id: '123',
//         External_Id: 'abc',
//         Name: 'Bob',
//         Date_Created: '07/21/2020',
//         Status: 'Open',
//         NPS_Score: 7,
//     },
//     {
//         Id: '234',
//         External_Id: 'def',
//         Date_Created: '07/21/2020',
//         NPS_Score: 10,
//         Name: 'Janis',
//         Status: 'Closed',
//     },
//     {
//         Id: '345',
//         External_Id: 'fgh',
//         Name: 'Elijah',
//         Date_Created: '07/20/2020',
//         Status: 'Open',
//         NPS_Score: 1,
//     },
//     {
//         Id: '678',
//         External_Id: 'hij',
//         Name: 'zeke',
//         Date_Created: '07/10/2020',
//         Status: 'Closed',
//         NPS_Score: 3,
//     },
//     {
//         Id: '098',
//         External_Id: 'zyx',
//         Name: 'Karen',
//         Date_Created: '06/21/2020',
//         Status: 'Closed',
//         NPS_Score: 6,
//     },
//     {
//         External_Id: 'wvu',
//         Date_Created: '07/13/2019',
//         Id: '987',
//         Status: 'Closed',
//         Name: 'Moses',
//         NPS_Score: 8,
//     },
//     {
//         Id: '876',
//         External_Id: 'kjl',
//         Name: 'Byrd',
//         Date_Created: '06/30/2020',
//         Status: 'Open',
//         NPS_Score: 2,
//     },
//     {
//         Id: '765',
//         External_Id: 'lji',
//         Name: 'Buggy Bug',
//         Date_Created: '07/07/2020',
//         Status: 'Closed',
//         NPS_Score: 3,
//     }
// ]

export default () => {
    const [rows, setRows] = useState(null);
    const sortBy = 'AutoCreatedTime';
    const sortType = 'date';

    useEffect(() => {
        const  func = async () => {

            const res = await axios('http://localhost:8888/getRows');
            console.log(res.data);
            setRows(res.data);
        }
        func();
    }, [])

    if(rows) {
        return (
            <div>
                <Table sortBy={sortBy} sortType={sortType} rows={rows} columns={columns}/>
            </div>
        )
    }
    
    return (
        <div class="center">Loading...</div>      
    )
        
}
    
