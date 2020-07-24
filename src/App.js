import React, {useState, useEffect} from 'react';
import Table from './components/Table'
import axios from 'axios';
import './App.css'
const columns = [
    {
        label: 'Action',
        name: 'action',
        type: 'action',
        sortable: false
    },
    {
        label: 'Id',
        name: 'Id',
        type: 'number',
        sortable: true,
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


export default () => {
    const [rows, setRows] = useState(null);
    const sortBy = 'Id';
    const sortType = 'number';

    useEffect(() => {
        const  func = async () => {

            const res = await axios('http://localhost:8888/getRows');
            res.data.forEach(row => {
                row['action'] = <button onClick={() => alert(row['Id'])} type="button" class="btn btn-light scrollable"><i class="material-icons">send</i></button>

            })
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
    
